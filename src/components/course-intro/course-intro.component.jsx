import React, { useState, useEffect, useCallback } from "react"
import { Clock, Play, Pause } from "../icon/icon.component"
import Button from "../button/button.component"
import HDivider from "../h-divider/h-divider.component"

import "./course-intro.style.scss"

import Rodal from "rodal"

import { formatNumberWithCommas } from "../../helpers/functions"

import TeacherCard from "../teacher-card/teacher-card.component"
import CourseTitle from "../course-title/course-title.component"
import { useAuthState, useAuthDispatch } from "../../contexts/auth-context"

import API, { request } from "../../helpers/api"
import CustomLoader from "../custom-loader/custom-loader.component"
import { toast } from "react-toastify"
import CourseDescription from "../course-description/course-description.component"
import { useRef } from "react"
import ReactPlayer from "react-player"
import CourseSections from "../course-sections/course-sections.component"
import { Link } from "react-router-dom"
import Loader from "react-loader-spinner"
import { useSiteState, useSiteDispatch } from "../../contexts/site-context"
import { useQueryParams, StringParam, withDefault } from "use-query-params"

function CourseIntro({ course, bought }) {
  const { buyModalOpen } = useSiteState()
  const siteDispatch = useSiteDispatch()
  const setBuyModalOpen = (e) => siteDispatch({ type: "TOGGLE_BUY_MODAL", payload: { open: e } })
  
  const [query, setQuery] = useQueryParams({
    action: withDefault(StringParam, null, true),
  })
  const { action } = query

  const [paymentStatus, setPaymentStatus] = useState(false)

  const [paymentLink, setPaymentLink] = useState("")
  const [invoice, setInvoice] = useState(null)

  const [discountInput, setDiscountInput] = useState("")
  const [discountValue, setDiscountValue] = useState("")
  const [discount, setDiscount] = useState({})

  const [referralDiscount, setReferralDiscount] = useState(0)

  const [discountDescriptions, setDiscountDescriptions] = useState([])
  
  const [ finalDiscount, setFinalDiscount ] = useState(0)

  const [isWalletBalanceLoading, setIsWalletBalanceLoading] = useState(false)
  const [walletBalance, setWalletBalance] = useState(0)

  const [lastPrice, setLastPrice] = useState(0)

  const { isLoggedIn, user } = useAuthState()
  const authDispatch = useAuthDispatch()

  const [videoPlaying, setVideoPlaying] = useState(false)

  const generateInvoice = useCallback(async () => {
    setPaymentStatus("pending")
    await getUserWalletBalance()
    API.get(`/course/admin/invoice/${course.slug}`)
      .then((resp) => {
        setInvoice(resp.data.invoice)
        if (resp.data.discount && resp.data.discount > 0) {
          setReferralDiscount(resp.data.discount)
        }
        setDiscountDescriptions(resp.data.discount_descriptions)
        setPaymentStatus("success")
      })
      .catch((err) => {
        setPaymentStatus("error")
        if (err.response) {
          if (err.response.status == 401) {
            // toast.error("لطفا ابتدا وارد سایت شوید")
          } else {
            toast.error(err.response.data.message)
          }
        } else {
          toast.error("مشکلی در ارتباط با سرور پیش آمده است")
        }
      })
  }, [course.slug])

  const redirectToPayment = useCallback(async () => {
    setPaymentStatus("redirecting")
    if (invoice) {
      API.post(`/course/admin/invoice/payment_url/${invoice.id}`, {
        discount: discount.reward ? discount.code : null
      })
        .then((resp) => {
          setPaymentStatus("success")
          if (resp.data.payment_url) {
            window.location.href = resp.data.payment_url
          }
        })
        .catch((err) => {
          setPaymentStatus("error")
          if (err.response) {
            if (err.response.status == 401) {
              // toast.error("لطفا ابتدا وارد سایت شوید")
            } else {
              toast.error(err.response.data.message)
            }
          } else {
            toast.error("مشکلی در ارتباط با سرور پیش آمده است")
          }
        })
    }
  })

  const getUserWalletBalance = async () => {
    setIsWalletBalanceLoading(true)
    request(`/user/profile/wallet-balance`, (res) => {
      setWalletBalance(res.data.balance)
      setIsWalletBalanceLoading(false)
    })
  }

  const submitDiscountCode = useCallback(async () => {
    setDiscountInput("loading")
    API.get(`course/admin/invoice/discount/${discountValue}`)
      .then((resp) => {
        setDiscount(resp.data.code)
        setDiscountInput("verified")
      })
      .catch((err) => {
        setDiscountInput("input")
        if (err.response) {
          toast.error("کد تخفیف مورد نظر صحیح نیست.")
        }
      })
  }, [discountValue])

  useEffect(() => {
    if (!bought) {
      if (paymentLink === "") {
        if (buyModalOpen) {
          generateInvoice()
        }
      }
    }
  }, [bought, buyModalOpen])

  useEffect(() => {
    if (course.price) {
      let downTo = 0

      if (finalDiscount) {
        downTo += finalDiscount
      }
      if (walletBalance) {
        // console.log(walletBalance)
        downTo += parseInt(walletBalance)
      }

      setLastPrice(course.price - downTo > 0 ? course.price - downTo : 0)
    }
  }, [finalDiscount, walletBalance, course.price])

  useEffect(() => {
    let fd = 0;
    if (discount.reward) {
      let codeDiscount = parseInt((parseInt(discount.reward) / 100) * course.price) < discount.max ? parseInt((parseInt(discount.reward) / 100) * course.price) : discount.max
      fd += codeDiscount
    }

    if (referralDiscount) {
      fd += referralDiscount
    }

    setFinalDiscount(fd)

  }, [discount, referralDiscount])

  useEffect(() => {
    if (action == "buy") {
      if (isLoggedIn) {
        setBuyModalOpen(true)
      } else {
        // await fetchPaymentUrl()
        toast.warning("لطفا اول شماره تلفن خود را ثبت کنید.")
        authDispatch({
          type: "CHANGE_AFTER_LOGIN",
          payload: {
            action: "OPEN_BUY_MODAL",
            getDataFrom: `/course/admin/invoice/${course.slug}`,
            buttonText: "ورود",
            payload: { courseId: course.id },
          },
        })
        authDispatch({ type: "TOGGLE_MODAL" })
      }
    }
  }, [action, isLoggedIn, course])

  const handleOpenBuyModal = () => {
    window.dataLayer = window.dataLayer || [];  
    window.dataLayer.push({ ecommerce: null });
    window.dataLayer.push({
      'event': 'checkout',
      'ecommerce': {
        'checkout': {
          'actionField': {'step': 3},
          'products': [{
            'name': course.title,
            'id': course.id,
            'price': course.price,
            'brand': "Linom",
            'category': course.main_category.title,
            'quantity': 1
          }]
        }
      }
    });
    setBuyModalOpen(true)
  }

  return (
    <>
      <div className="course-intro pt-10 container mx-auto flex flex-col-reverse xl:flex-row justify-between index-intro items-center">
        <div
          className="xl:pt-6 lg:pt-8 pt-10 xl:pb-3 lg:pb-6 pb-8 w-full sm:w-9/12 lg:w-3/5 xl:w-8/12 px-2 mb-6 xl:mt-0 mt-10"
          style={{
            // flexBasis: "50%",
            borderRadius: 8,
            boxShadow: "1px 5px 24px rgba(0, 0, 0, 0.16)",
            background: "#F6F4F5",
          }}
        >
          <div className="xl:mb-5 mb-5 mx-auto lg:text-right text-center">
            <h1 className="text-3xl text-center font-bold text-blue-800">
              {course.title}
            </h1>
          </div>
          {/* <p
            className="text-justify xl:font-light font-normal xl:text-lg text-base leading-10 w-full xl:w-10/12 sm:w-9/12 mx-auto lg:w-auto xs:px-auto px-4"
            dangerouslySetInnerHTML={{ __html: nl2br(course.description) }}
          ></p> */}
          <p className="text-justify xl:font-light font-normal xl:text-lg text-base leading-9 w-full xl:w-10/12 sm:w-9/12 mx-auto lg:w-auto xs:px-auto my-2">
            {course.short_description}
          </p>
          <div className="my-2">
            <TeacherCard className="" teacher={course.user} />
          </div>
          <div className="px-16 my-6">
            <div className="flex sm:flex-row flex-col flex-wrap justify-around items-center">
              <span className="font-bold leading-10 text-xl">
                <Clock className="text-lg ml-3" />
                {course.hour_length} ساعت
              </span>
              <HDivider className="bg-gray-600" />
              <span className="font-bold text-xl leading-10 text-green-500">
                {formatNumberWithCommas(course.price)} تومان
              </span>
            </div>
          </div>
          <div className="w-full mx-auto lg:w-auto">
            {bought ? (
              <div className="text-center text-lg text-green-600">
                <span>شما عضو این دوره هستید</span>
              </div>
            ) : (
              <button
                id="buyButton"
                className="py-4 w-full bg-site-teal rounded-lg text-white text-3xl hover:bg-teal-600 transition-all duration-100"
                arrow
                onClick={async () => {
                  if (isLoggedIn) {
                    handleOpenBuyModal()
                  } else {
                    // await fetchPaymentUrl()
                    toast.warning("لطفا اول شماره تلفن خود را ثبت کنید.")
                    authDispatch({
                      type: "CHANGE_AFTER_LOGIN",
                      payload: {
                        action: "OPEN_BUY_MODAL",
                        getDataFrom: `/course/admin/invoice/${course.slug}`,
                        buttonText: "ورود",
                        payload: { courseId: course.id },
                      },
                    })
                    authDispatch({ type: "TOGGLE_MODAL" })
                  }
                }}
              >
                خرید دوره
              </button>
            )}
          </div>
        </div>
        <div className="w-full mx-auto md:lg-6">
          {!course.teaser ? (
            <img
              src={`${course.pic.url}`}
              alt={course.title}
              className="mx-auto"
              // style={{
              //   width: 570,
              //   height: 370,
              // }}
              style={{
                width: 450,
                height: 450,
              }}
            />
          ) : (
            <div
              className="relative mx-auto videoBox w-full md:w-9/12"
              style={
                {
                  // width: "85%",
                  // height: 315,
                }
              }
            >
              <div
                className={`absolute w-full h-full bg-black z-10 transition-all duration-100 v-overlay ${
                  !videoPlaying ? "opacity-50" : "opacity-0"
                }`}
                style={{
                  top: 0,
                  left: 0,
                  // width: "85%",
                  // height: 400,
                }}
              ></div>
              <div
                className={`absolute py-5 px-5 bg-white text-orange-white rounded-full z-20 transition-all duration-100 p-button ${
                  videoPlaying ? "opacity-0" : ""
                }`}
                style={{
                  top: "50%",
                  left: "50%",
                  transform: "translate(-50%, -50%)",
                }}
                onClick={() => {
                  setVideoPlaying((state) => !state)
                }}
              >
                {videoPlaying ? (
                  <Pause className="text-2xl text-orange-500" />
                ) : (
                  <Play
                    className="text-2xl text-orange-500"
                    style={{
                      marginLeft: 5,
                    }}
                  />
                )}
              </div>

              <ReactPlayer
                playing={videoPlaying}
                width="100%"
                height="auto"
                className="mx-auto shadow-lg"
                url={course.teaser}
              />
            </div>
          )}
        </div>
        <Rodal
          visible={buyModalOpen}
          onClose={() => setBuyModalOpen(false)}
          customStyles={{
            borderRadius: 10,
          }}
          height="420"
          width="400"
          animation="slideUp"
          duration={500}
        >
          <div className="w-full h-full flex flex-col">
            <div className="mx-auto font-bold text-3xl text-center text-green-600">
              خرید دوره
            </div>
            <div className="flex flex-col h-32 justify-center items-center">
              <div className="w-full font-bold flex justify-around text-green-900 border border-blue-700 py-4 px-4 rounded-lg">
                <span>{course.title}</span>
                <span>{formatNumberWithCommas(course.price)} تومان</span>
              </div>
            </div>
            <div className="pb-3 pt-2 mb-1">
              {!discountInput ? (
                <span
                  className="text-blue-500 border-b border-blue-500 pb-1"
                  onClick={() => {
                    setDiscountInput("input")
                  }}
                >
                  کد تخفیف دارید؟
                </span>
              ) : discountInput === "input" ? (
                <div className="flex flex-col justify-between mt-2">
                  <span className="pb-2">کد تخفیف:</span>
                  <div className="flex flex-row justify-between">
                    <input
                      className="outline-none border border-orange-500 rounded-lg py-2 px-3"
                      value={discountValue}
                      onChange={(e) => setDiscountValue(e.target.value)}
                      style={{
                        direction: "ltr",
                        fontFamily: "sans",
                      }}
                    />
                    <button
                      className=" py-2 px-3 bg-orange-500 rounded-lg text-white"
                      onClick={submitDiscountCode}
                    >
                      اعمال تخفیف
                    </button>
                  </div>
                </div>
              ) : discountInput === "loading" ? (
                <div className="w-full text-center flex justify-center mb-2">
                  <Loader type="ThreeDots" height="50" width="50" />
                </div>
              ) : discountInput === "verified" ? (
                <div className="flex flex-col2">
                  {discount.reward ? (
                    <span className="text-teal-600 leading-8 text-sm">
                      {discount.reward}% درصد تخفیف با سقف{" "}
                      {formatNumberWithCommas(discount.max)} تومان اعمال شد.
                    </span>
                  ) : null}
                </div>
              ) : null}
            </div>
            <div className="">
              {discountDescriptions.map((description, index) => (
                <span className="text-teal-600 leading-8 text-sm">
                  {description}
                </span>
              ))}
            </div>
            <div className="mb-6 mt-1 text-green-600">
              {/* <div className="flex flex-row justify-between my-1">
                <span>موجودی کیف پول</span>
                <span>{formatNumberWithCommas(0)}</span>
              </div>
              <hr /> */}
              <div className="flex flex-row justify-between my-1">
                <span>تخفیف</span>
                <span>
                  {/* {discount.reward
                    ? (parseInt(discount.reward) / 100) * course.price > discount.max
                      ? formatNumberWithCommas(discount.max)
                      : formatNumberWithCommas(
                          (parseInt(discount.reward) / 100) * course.price
                        )
                    : formatNumberWithCommas(0)} */}
                  {finalDiscount
                    ? formatNumberWithCommas(finalDiscount)
                    : finalDiscount}
                </span>
              </div>
              <hr />
              <div className="flex flex-row justify-between my-1">
                <span>موجودی کیف پول</span>
                <span>{formatNumberWithCommas(walletBalance)}</span>
              </div>
              <hr />
              <div className="flex flex-row justify-between my-1">
                <span>مبلغ قابل پرداخت</span>
                <span>{formatNumberWithCommas(lastPrice)}</span>
              </div>
            </div>
            {paymentStatus === "pending" ? (
              <div className="mt-8">
                <CustomLoader />
              </div>
            ) : paymentStatus === "success" ? (
              invoice ? (
                <div onClick={redirectToPayment} id="payLink">
                  <Button
                    id="payButton"
                    className="mx-auto w-2/3 font-bold leading-8 py-2 px-4"
                    arrow
                  >
                    انتقال به درگاه پرداخت
                  </Button>
                </div>
              ) : null
            ) : paymentStatus === "redirecting" ? (
              <span className="text-teal-500 mx-auto text-center font-bold">
                در حال انتقال به درگاه پرداخت ...
              </span>
            ) : (
              <span className="text-red-500 mx-auto text-center font-bold">
                مشکلی پیش آمده
              </span>
            )}
          </div>
        </Rodal>
      </div>
      <div className="w-full">
        <CourseDescription data={course.description} />
      </div>
      <div className="mb-12">
        <CourseSections
          course={{ id: course.id, title: course.title }}
          bought={bought}
        />
      </div>
      <div className="container mx-auto mt-12">
        <div className="bg-gray-200 rounded-lg lg:px-8 px-4 py-3 flex md:flex-row flex-col justify-between items-center">
          <div className="flex sm:flex-row flex-col flex-wrap justify-start items-center h-full">
            <span className="text-lg leading-10">{course.title}</span>
            <HDivider />
            <Link to={`/teacher/${course.user.username}`}>
              <span className="font-bold leading-10">
                {course.user.first_name} {course.user.last_name}
              </span>
            </Link>
            <HDivider />
            <span className="font-bold leading-10">
              <Clock className="text-xs ml-1" />
              {course.hour_length} ساعت
            </span>
            <HDivider />
            <span className="font-bold text-lg leading-10 text-green-500">
              {formatNumberWithCommas(course.price)} تومان
            </span>
          </div>
          {bought ? (
            <span>شما عضو این دوره هستید</span>
          ) : (
            <button
              id="buyButtonDown"
              className="text-lg leading-8 bg-site-teal hover:bg-teal-600 px-8 py-3 text-white rounded-lg transition-all duration-100"
              arrow
              onClick={async () => {
                if (isLoggedIn) {
                  setBuyModalOpen(true)
                } else {
                  // await fetchPaymentUrl()
                  toast.warning("لطفا اول شماره تلفن خود را ثبت کنید.")
                  authDispatch({
                    type: "CHANGE_AFTER_LOGIN",
                    payload: {
                      action: "OPEN_BUY_MODAL",
                      getDataFrom: `/course/admin/invoice/${course.slug}`,
                      buttonText: "ورود",
                      payload: { courseId: course.id },
                    },
                  })
                  authDispatch({ type: "TOGGLE_MODAL" })
                }
              }}
            >
              خرید دوره
            </button>
          )}
        </div>
      </div>
    </>
  )
}

export default CourseIntro
