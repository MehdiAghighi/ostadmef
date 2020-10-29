import React, { useState, useEffect, useCallback } from "react"
// import Title from "../title/title.component";
// import { Link } from "react-router-dom";
import { Clock } from "../icon/icon.component"
import Button from "../button/button.component"
import HDivider from "../h-divider/h-divider.component"

import "./course-intro.style.scss"

import Rodal from "rodal"

import { nl2br } from "../../helpers/functions"

// import Main from "../../assets/images/Main.png";
// import DecoratedImage from "../decorated-image/decorated-image.component";
import TeacherCard from "../teacher-card/teacher-card.component"
import CourseTitle from "../course-title/course-title.component"
import { useAuthState, useAuthDispatch } from "../../contexts/auth-context"

import API from "../../helpers/api"
import CustomLoader from "../custom-loader/custom-loader.component"
import { toast } from "react-toastify"
import CourseDescription from "../course-description/course-description.component"

function CourseIntro({ course, bought }) {
  const [buyModalOpen, setBuyModalOpen] = useState(false)
  const [fetchingUrlStatus, setFetchingUrlStatus] = useState(false)
  const [paymentLink, setPaymentLink] = useState("")

  const { isLoggedIn } = useAuthState()
  const authDispatch = useAuthDispatch()

  const fetchPaymentUrl = useCallback(async () => {
    setFetchingUrlStatus("pending")
    API.get(`/course/admin/invoice/${course.slug}`)
      .then((resp) => {
        setPaymentLink(resp.data.payment_url)
        setFetchingUrlStatus("success")
      })
      .catch((err) => {
        setFetchingUrlStatus("error")
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
  })

  useEffect(() => {
    if (!bought) {
      if (paymentLink === "") {
        if (buyModalOpen) {
          fetchPaymentUrl()
        }
      }
    }
  }, [bought, buyModalOpen])
  return (
    <>
      <div className="course-intro pt-10 container mx-auto flex flex-col-reverse xl:flex-row justify-between index-intro items-center">
        <div
          className="xl:pt-6 lg:pt-8 pt-10 xl:pb-3 lg:pb-6 pb-8 lg:w-3/5 xl:w-8/12 px-2 mb-6 xl:mt-0 mt-10"
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
                {course.price} تومان
              </span>
            </div>
          </div>
          <div className="w-full mx-auto lg:w-auto">
            {bought ? null : (
              <button
                id="buyButton"
                className="py-4 w-full bg-teal-600 rounded-lg text-white text-3xl hover:bg-teal-700 transition-all duration-100"
                arrow
                onClick={async () => {
                  if (isLoggedIn) {
                    setBuyModalOpen(true)
                  } else {
                    // await fetchPaymentUrl()
                    authDispatch({
                      type: "CHANGE_AFTER_LOGIN",
                      payload: {
                        action: "FETCH_N_REDIRECT",
                        getDataFrom: `/course/admin/invoice/${course.slug}`,
                        buttonText: "ورود و انتقال به درگاه پرداخت",
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
          <img
            src={`${course.pic.url}`}
            alt={course.title}
            className="mx-auto"
            // style={{
            //   width: 570,
            //   height: 370,
            // }}
          />
        </div>
        <Rodal
          visible={buyModalOpen}
          onClose={() => setBuyModalOpen(false)}
          customStyles={
            {
              // height: "100vh",
              // width: "100vw",
            }
          }
          animation="slideUp"
          duration={500}
        >
          <div className="w-full h-full flex flex-col">
            <div className="mx-auto font-bold text-3xl text-center text-green-600">
              خرید دوره
            </div>
            <div className="flex flex-col h-full justify-center items-center">
              <div className="w-full font-bold flex justify-around text-green-900">
                <span>{course.title}</span>
                <span>{course.price} تومان</span>
              </div>
            </div>
            {fetchingUrlStatus === "pending" ? (
              <div className="mt-8">
                <CustomLoader />
              </div>
            ) : fetchingUrlStatus === "success" ? (
              paymentLink !== "" ? (
                <a href={paymentLink} id="payLink">
                  <Button
                    id="payButton"
                    className="mx-auto w-2/3 font-bold leading-8 py-2 px-4"
                    arrow
                  >
                    انتقال به درگاه پرداخت
                  </Button>
                </a>
              ) : null
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
      <div className="container mx-auto mt-3">
        <div className="bg-gray-200 rounded-lg lg:px-8 px-4 py-3 flex md:flex-row flex-col justify-between items-center">
          <div className="flex sm:flex-row flex-col flex-wrap justify-start items-center h-full">
            <span className="text-lg leading-10">{course.title}</span>
            <HDivider />
            <span className="font-bold leading-10">
              {course.user.first_name} {course.user.last_name}
            </span>
            <HDivider />
            <span className="font-bold leading-10">
              <Clock className="text-xs ml-1" />
              {course.hour_length} ساعت
            </span>
            <HDivider />
            <span className="font-bold text-lg leading-10 text-green-500">
              {course.price} تومان
            </span>
          </div>
          {bought ? (
            <span>شما عضو این دوره هستید</span>
          ) : (
            <button
              id="buyButtonDown"
              className="text-lg leading-8 bg-teal-600 hover:bg-teal-700 px-8 py-3 text-white rounded-lg transition-all duration-100"
              arrow
              onClick={async () => {
                if (isLoggedIn) {
                  setBuyModalOpen(true)
                } else {
                  // await fetchPaymentUrl()
                  authDispatch({
                    type: "CHANGE_AFTER_LOGIN",
                    payload: {
                      action: "FETCH_N_REDIRECT",
                      getDataFrom: `/course/admin/invoice/${course.slug}`,
                      buttonText: "ورود و انتقال به درگاه پرداخت",
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
