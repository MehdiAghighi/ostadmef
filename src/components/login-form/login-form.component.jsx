import React, { useState } from "react"

import Loader from "react-loader-spinner"
import { Formik, Field, Form, ErrorMessage } from "formik"
import * as Yup from "yup"
import { Transition } from "react-transition-group"
import { toast } from "react-toastify"

import Button from "../../components/button/button.component"

import API from "../../helpers/api"
import {
  useAuthDispatch,
  fetchUser,
  useAuthState,
} from "../../contexts/auth-context"

import { setCookie, getCookie } from "../../helpers/functions"
import { useCallback } from "react"
import { useHistory } from "react-router-dom"
import { useSiteDispatch } from "../../contexts/site-context"

const duration = 500

const defaultStyle = {
  transition: `opacity ${duration}ms ease-in-out`,
  opacity: 0,
}

const transitionStyles1 = {
  entering: { opacity: 1 },
  entered: { opacity: 1 },
  exiting: { opacity: 0, position: "absolute" },
  exited: { opacity: 0, position: "absolute" },
}

const transitionStyles2 = {
  entering: { opacity: 0, position: "absolute" },
  entered: { opacity: 0, position: "absolute" },
  exiting: { opacity: 1 },
  exited: { opacity: 1 },
}

function LoginForm(props) {
  const { afterLogin } = useAuthState()
  const authDispatch = useAuthDispatch()
  const siteDispatch = useSiteDispatch()
  const toggleModal = () => authDispatch({ type: "TOGGLE_MODAL" })
  const history = useHistory()

  const [fetchingUrlStatus, setFetchingUrlStatus] = useState(false)
  const [paymentLink, setPaymentLink] = useState("")

  const fetchPaymentUrl = useCallback(async () => {
    setFetchingUrlStatus("pending")
    const hasCourse = await API.get(
      `/course/admin/invoice/check/${afterLogin.payload.courseId}`
    )
    if (hasCourse.statusText == "OK") {
      if (hasCourse.data.invoice) {
        return null
      }
    } else {
      if (hasCourse.response) {
        if (hasCourse.response.status == 401) {
          // toast.respor("لطفا ابتدا وارد سایت شوید")
        } else {
          toast.error(hasCourse.response.data.message)
        }
      } else {
        toast.error("مشکلی در ارتباط با سرور پیش آمده است")
      }
    }
    const resp = await API.get(afterLogin.getDataFrom)
    if (resp.statusText == "Created") {
      setFetchingUrlStatus("success")
      return resp.data.payment_url
    } else {
      setFetchingUrlStatus("error")
      if (resp.response) {
        if (resp.response.status == 401) {
          // toast.respor("لطفا ابتدا وارد سایت شوید")
        } else {
          toast.error(resp.response.data.message)
        }
      } else {
        toast.error("مشکلی در ارتباط با سرور پیش آمده است")
      }
    }
  })

  const [stage, setStage] = useState(1)
  const [buttonText, setButtonText] = useState("ارسال رمز عبور")

  const [inProp, setInProp] = useState(true)
  return (
    <Formik
      initialValues={{
        phone: "",
        verification_code: "",
      }}
      validationSchema={Yup.object({
        phone: Yup.string()
          .trim()
          .length(11, "شماره تلفن فقط می‌تواند 11 کاراکتر باشد")
          .matches("^09[0-9]{9}", "فرمت شماره صحیح نیست")
          .required("لطفا شماره تلفن را وارد کنید"),
        verification_code: Yup.string().trim().length(5, "کد 5 رقمی را وارد کنید"),
      })}
      onSubmit={async (values, { setSubmitting }) => {
        let data
        if (stage === 1) {
          const json = await API.post(`/auth/get_verify_code`, null, {
            params: {
              phone: values.phone,
            },
          }).catch((err) => {
            if (err.response.status === 500) {
              toast.error("مشکلی در ارتباط پیش آمده")
              return
            } else {
              toast.error(err.response.data.message)
              return
            }
          })
          if (json.status < 300) {
            data = json.data
            await setStage(2)
            await setInProp(false)
            await setButtonText(
              afterLogin.buttonText ? afterLogin.buttonText : "اعتبار سنجی کد"
            )
          }
        } else if (stage === 2) {
          const json = await API.post(`/auth/login`, null, {
            params: {
              phone: values.phone,
              verification_code: values.verification_code,
            },
          }).catch((err) => {
            if (err.response.status === 500) {
              toast.error("مشکلی در ارتباط پیش آمده")
              return
            } else {
              toast.error(err.response.data.message)
              return
            }
          })
          data = json.data

          if (json.status < 300) {
            // localStorage.setItem("token", data.token)
            var expiryDate = new Date()
            expiryDate.setMonth(expiryDate.getMonth() + 1)
            // setCookie("token", `Bearer ${data.token}`, {
            //   expires: expiryDate,
            //   path: "/",
            // })
            setCookie("token", data.token, 30, "linom.ir")
            setCookie("token", data.token, 30, "localhost")
            setCookie("token", data.token, 30, ".sanctum.test")
            setCookie("token", data.token, 30, "panel.sanctum.test")
            await fetchUser(authDispatch)
            if (afterLogin.action == "TOGGLE_MODAL") {
              toggleModal({ type: "TOGGLE_MODAL" })
            }
            if (afterLogin.action == "OPEN_BUY_MODAL") {
              toggleModal({ type: "TOGGLE_MODAL" })
              siteDispatch({ type: "TOGGLE_BUY_MODAL", payload: { open: true } })
            }
            authDispatch({
              type: "CHANGE_AFTER_LOGIN",
              payload: { action: "TOGGLE_MODAL" },
            })
            await setStage(1)
            await setInProp(true)
            await setButtonText("ارسال رمز عبور")
          } else {
            toast.error("مشکلی در ارتباط پیش آمده")
          }
        }
        await setSubmitting(false)

        // console.log(data);
      }}
    >
      {(formik) => (
        <Form>
          <Transition in={inProp} timeout={700}>
            {(state) => (
              <div>
                <div
                  className="flex flex-col items-start z-10 "
                  style={{
                    ...defaultStyle,
                    ...transitionStyles1[state],
                  }}
                >
                  <label htmlFor="phone" className="my-2">
                    شماره تلفن
                  </label>
                  <Field
                    name="phone"
                    type="text"
                    placeholder="شماره تلفن را وارد کنید ... "
                    className={`z-10 my-1 py-2 px-10 text-center border-2 rounded-lg focus:outline-none focus:bg-gray-200 ${
                      formik.touched.phone && formik.errors.phone
                        ? "border-red-500"
                        : " border-purple-700"
                    }`}
                  />
                  <div className="my-1 text-red-500">
                    <ErrorMessage name="phone" />
                  </div>
                </div>
                <div
                  className="flex flex-col items-start z-10 "
                  style={{
                    ...defaultStyle,
                    ...transitionStyles2[state],
                  }}
                >
                  <label htmlFor="verification_code" className="my-2">
                    کد اعتبارسنجی
                  </label>
                  <Field
                    name="verification_code"
                    type="text"
                    placeholder="کد اعتبارسنجی را وارد کنید ..."
                    className={`z-10 my-1 py-2 px-10 text-center border-2 rounded-lg focus:outline-none focus:bg-gray-200 ${
                      formik.touched.verification_code &&
                      formik.errors.verification_code
                        ? "border-red-500"
                        : " border-purple-700"
                    }`}
                  />
                  <div className="my-1 text-red-500">
                    <ErrorMessage name="verification_code" />
                  </div>
                </div>
              </div>
            )}
          </Transition>
          <Button
            btnBgClass={formik.isSubmitting ? " bg-gray-400" : "bg-orange-500"}
            btnTextClass="text-white"
            className={`font-bold leading-loose px-6 py-1 relative z-20 ${
              formik.isSubmitting ? " cursor-not-allowed" : ""
            }`}
            disabled={formik.isSubmitting}
          >
            {formik.isSubmitting ? (
              <Loader type="ThreeDots" color="#00BFFF" height={32} width={100} />
            ) : (
              buttonText
            )}
          </Button>
        </Form>
      )}
    </Formik>
  )
}

export default LoginForm
