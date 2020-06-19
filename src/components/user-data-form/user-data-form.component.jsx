import React, { useState, useEffect } from "react"

import "./user-data-form.style.scss"

import Loader from "react-loader-spinner"
import { Formik, Field, Form, ErrorMessage } from "formik"
import * as Yup from "yup"
import { Transition } from "react-transition-group"
import { toast } from "react-toastify"
import Rodal from "rodal"
import "rodal/lib/rodal.css"

import Button from "../../components/button/button.component"

import API from "../../helpers/api"
import {
  useAuthDispatch,
  useAuthState,
  updateUser,
} from "../../contexts/auth-context"
import { NavLink } from "react-router-dom"
import Title from "../title/title.component"
import CustomLoader from "../custom-loader/custom-loader.component"

function UserDataForm({ justEmail }) {
  const { userDataModalOpen } = useAuthState()
  const authDispatch = useAuthDispatch()

  const [user, setUser] = useState({})
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    API.get("/auth/me")
      .then((res) => {
        return res.data
      })
      .then((user) => {
        setUser(user)
        setIsLoading(false)
      })
      .catch((err) => {
        if (err.response) {
          toast.error(err.response.data.message)
          setIsLoading(false)
        } else {
          toast.error("مشکلی در ارتباط با سرور پیش آمده است")
        }
      })
  }, [])

  return (
    <div className="user-data-form">
      <Rodal
        visible={userDataModalOpen}
        onClose={() => authDispatch({ type: "TOGGLE_USER_DATA_MODAL" })}
        className="w-screen h-screen"
        showMask={false}
        customStyles={{
          height: "100vh",
          width: "100vw",
        }}
        animation="slideUp"
        duration={500}
      >
        <div className="relative w-full h-full flex flex-col text-center">
          <NavLink to="/">
            <h1 className="font-bold text-4xl leading-tight">لــــینوم</h1>
          </NavLink>
          <div className="h-full w-full flex mt-8">
            <div className="container mx-auto">
              <div className="flex flex-col lg:flex-row mx-auto lg:w-10/12 w-full">
                <div className="flex flex-col items-start py-8 w-full">
                  <Title>اطلاعات کاربر</Title>
                  <span className="my-5 text-blue-1000 text-lg">
                    برای دیدن ویدیو‌ها لطفا اطلاعات خود را وارد کنید
                  </span>
                  <div className="my-10 w-full">
                    {isLoading ? (
                      <CustomLoader />
                    ) : (
                      <Formik
                        initialValues={
                          !justEmail
                            ? {
                                first_name: user.first_name,
                                last_name: user.last_name,
                                email: user.email ? user.email : "",
                                university: user.university ? user.university : "",
                              }
                            : {
                                email: user.email ? user.email : "",
                              }
                        }
                        validationSchema={Yup.object(
                          !justEmail
                            ? {
                                first_name: Yup.string()
                                  .trim()
                                  .required("لطفا نام را وارد کنید"),
                                last_name: Yup.string()
                                  .trim()
                                  .required("لطفا نام خانوادگی را وارد کنید"),
                                email: Yup.string()
                                  .trim()
                                  .email()
                                  .required("لطفا ایمیل را وارد کنید"),
                                university: Yup.string()
                                  .trim()
                                  .required("لطفا دانشگاه را وارد کنید"),
                              }
                            : {
                                email: Yup.string()
                                  .trim()
                                  .email()
                                  .required("لطفا ایمیل را وارد کنید"),
                              }
                        )}
                        onSubmit={async (values, { setSubmitting }) => {
                          console.log(values)
                          const request = await updateUser(authDispatch, values)
                          if (request.status >= 200 && request.status < 300) {
                            toast.success("اطلاعات کاربر با موفقیت بروز شد")
                          }
                          setSubmitting(false)
                          authDispatch({ type: "TOGGLE_USER_DATA_MODAL" })
                        }}
                      >
                        {(formik) => (
                          <Form>
                            <div className="flex flex-col sm:flex-row justify-between w-full">
                              {!justEmail && (
                                <div className="flex flex-col">
                                  <label htmlFor="first_name" className="my-2">
                                    نام
                                  </label>
                                  <Field
                                    name="first_name"
                                    type="text"
                                    id="first_name"
                                    placeholder="نام را وارد کنید ..."
                                    className={`z-10 my-1 py-2 px-10 text-center border-2 rounded-lg focus:outline-none focus:bg-gray-200 ${
                                      formik.touched.first_name &&
                                      formik.errors.first_name
                                        ? "border-red-500"
                                        : " border-purple-700"
                                    }`}
                                  />
                                  <div className="my-1 text-red-500">
                                    <ErrorMessage name="first_name" />
                                  </div>
                                </div>
                              )}
                              {!justEmail && (
                                <div className="flex flex-col">
                                  <label htmlFor="last_name" className="my-2">
                                    نام خانوادگی
                                  </label>
                                  <Field
                                    name="last_name"
                                    type="text"
                                    id="last_name"
                                    placeholder="نام خانوادگی را وارد کنید ..."
                                    className={`z-10 my-1 py-2 px-10 text-center border-2 rounded-lg focus:outline-none focus:bg-gray-200 ${
                                      formik.touched.last_name &&
                                      formik.errors.last_name
                                        ? "border-red-500"
                                        : " border-purple-700"
                                    }`}
                                  />
                                  <div className="my-1 text-red-500">
                                    <ErrorMessage name="last_name" />
                                  </div>
                                </div>
                              )}
                            </div>
                            <div className="flex flex-col sm:flex-row justify-between w-full">
                              <div className="flex flex-col">
                                <label htmlFor="email" className="my-2">
                                  ایمیل
                                </label>
                                <Field
                                  name="email"
                                  type="text"
                                  id="email"
                                  placeholder="لطفا ایمیل را وارد کنید ..."
                                  className={`z-10 my-1 py-2 px-10 text-center border-2 rounded-lg focus:outline-none focus:bg-gray-200 ${
                                    formik.touched.email && formik.errors.email
                                      ? "border-red-500"
                                      : " border-purple-700"
                                  }`}
                                />
                                <div className="my-1 text-red-500">
                                  <ErrorMessage name="email" />
                                </div>
                              </div>
                              {!justEmail && (
                                <div className="flex flex-col">
                                  <label htmlFor="university" className="my-2">
                                    دانشگاه
                                  </label>
                                  <Field
                                    name="university"
                                    type="text"
                                    id="university"
                                    placeholder="لطفا دانشگاه را وارد کنید ..."
                                    className={`z-10 my-1 py-2 px-10 text-center border-2 rounded-lg focus:outline-none focus:bg-gray-200 ${
                                      formik.touched.university &&
                                      formik.errors.university
                                        ? "border-red-500"
                                        : " border-purple-700"
                                    }`}
                                  />
                                  <div className="my-1 text-red-500">
                                    <ErrorMessage name="university" />
                                  </div>
                                </div>
                              )}
                            </div>
                            <Button
                              type="submit"
                              btnBgClass={
                                formik.isSubmitting
                                  ? " bg-gray-400"
                                  : "bg-orange-500"
                              }
                              btnTextClass="text-white"
                              className={`font-bold leading-loose px-6 py-1 relative z-20 ${
                                formik.isSubmitting ? " cursor-not-allowed" : ""
                              }`}
                              disabled={formik.isSubmitting}
                            >
                              {formik.isSubmitting ? (
                                <Loader
                                  type="ThreeDots"
                                  color="#00BFFF"
                                  height={32}
                                  width={100}
                                />
                              ) : (
                                "ثبت"
                              )}
                            </Button>
                          </Form>
                        )}
                      </Formik>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Rodal>
    </div>
  )
}

UserDataForm.defaultProps = {
  justEmail: false,
}
export default UserDataForm
