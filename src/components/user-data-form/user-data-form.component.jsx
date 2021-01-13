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
import Select from "react-select"

const options = [
  { value: "", label: "لطفا دانشگاه خود را انتخاب کنید ..." },
  { value: "دانشگاه صنعتی شاهرود", label: "دانشگاه صنعتی شاهرود" },
  { value: "دانشگاه صنعتی مالک اشتر", label: "دانشگاه صنعتی مالک اشتر" },
  { value: "دانشگاه گیلان", label: "دانشگاه گیلان" },
  { value: "دانشگاه صنعتی قوچان", label: "دانشگاه صنعتی قوچان" },
  { value: "دانشگاه  ارومیه", label: "دانشگاه  ارومیه" },
  { value: "دانشگاه شهید چمران", label: "دانشگاه شهید چمران" },
  { value: "دانشگاه صنعتی جندی شاپور", label: "دانشگاه صنعتی جندی شاپور" },
  { value: "دانشگاه سمنان", label: "دانشگاه سمنان" },
  {
    value: "پردیس دانشگاه ارومیه(محل تحصیل دانشکده فنی خوی)",
    label: "پردیس دانشگاه ارومیه(محل تحصیل دانشکده فنی خوی)",
  },
  { value: "دانشگاه علم و فناوری مازندران", label: "دانشگاه علم و فناوری مازندران" },
  { value: "دانشگاه شهید بهشتی", label: "دانشگاه شهید بهشتی" },
  { value: "دانشگاه محقق اردبیلی", label: "دانشگاه محقق اردبیلی" },
  { value: "دانشگاه بیرجند", label: "دانشگاه بیرجند" },
  { value: "دانشگاه رازی کرمانشاه", label: "دانشگاه رازی کرمانشاه" },
  { value: "دانشگاه شهید مدنی آذربایجان", label: "دانشگاه شهید مدنی آذربایجان" },
  { value: "دانشگاه صنعتی امیر کبیر", label: "دانشگاه صنعتی امیر کبیر" },
  { value: "دانشگاه علم و صنعت", label: "دانشگاه علم و صنعت" },
  { value: "دانشگاه صنعتی اصفهان", label: "دانشگاه صنعتی اصفهان" },
  { value: "دانشگاه صنعتی خواجه نصیر", label: "دانشگاه صنعتی خواجه نصیر" },
  { value: "دانشگاه حکیم سبزواری", label: "دانشگاه حکیم سبزواری" },
  {
    value: "پردیس دانشگاه صنعتی امیرکبیر(محل تحصیل دانشگاه امیرکبیر)",
    label: "پردیس دانشگاه صنعتی امیرکبیر(محل تحصیل دانشگاه امیرکبیر)",
  },
  {
    value: "پردیس دانشگاه کردستان(محل تحصیل دانشکده فنی و مهندسی بیجار)",
    label: "پردیس دانشگاه کردستان(محل تحصیل دانشکده فنی و مهندسی بیجار)",
  },
  { value: "دانشگاه صنعتی اراک", label: "دانشگاه صنعتی اراک" },
  { value: "دانشگاه کاشان", label: "دانشگاه کاشان" },
  { value: "دانشگاه خوارزمی", label: "دانشگاه خوارزمی" },
  {
    value: "پردیس دانشگاه تبریز(محل تحصیل آموزشکده فنی و مهندسی مرند)",
    label: "پردیس دانشگاه تبریز(محل تحصیل آموزشکده فنی و مهندسی مرند)",
  },
  {
    value: "دانشگاه تبریز(محل تحصیل دانشکده فنی میانه)",
    label: "دانشگاه تبریز(محل تحصیل دانشکده فنی میانه)",
  },
  { value: "دانشگاه یاسوج", label: "دانشگاه یاسوج" },
  {
    value: "پردیس دانشگاه یاسوج(محل تحصیل دانشکده نفت و گاز گچساران)",
    label: "پردیس دانشگاه یاسوج(محل تحصیل دانشکده نفت و گاز گچساران)",
  },
  { value: "دانشگاه شیراز", label: "دانشگاه شیراز" },
  { value: "دانشگاه تهران", label: "دانشگاه تهران" },
  { value: "دانشگاه اصفهان", label: "دانشگاه اصفهان" },
  {
    value: "پردیس دانشگاه تهران(محل تحصیل دانشکده فنی کاسپین گیلان)",
    label: "پردیس دانشگاه تهران(محل تحصیل دانشکده فنی کاسپین گیلان)",
  },
  {
    value: "پردیس دانشگاه تهران(محل تحصیل پردیس فارابی قم)",
    label: "پردیس دانشگاه تهران(محل تحصیل پردیس فارابی قم)",
  },
  {
    value: "پردیس دانشگاه تهران(محل تحصیل دانشکده فنی فون واقع در فومن گیلان)",
    label: "پردیس دانشگاه تهران(محل تحصیل دانشکده فنی فون واقع در فومن گیلان)",
  },
  {
    value: "پردیس دانشگاه تهران(محل تحصیل دانشکده فنی کاسپین  رضوان شهر گیلان)",
    label: "پردیس دانشگاه تهران(محل تحصیل دانشکده فنی کاسپین  رضوان شهر گیلان)",
  },
  { value: "دانشگاه بین المللی امام خمینی", label: "دانشگاه بین المللی امام خمینی" },
  { value: "دانشگاه تبریز", label: "دانشگاه تبریز" },
  { value: "دانشگاه صنعتی شیراز", label: "دانشگاه صنعتی شیراز" },
  { value: "دانشگاه فردوسی مشهد", label: "دانشگاه فردوسی مشهد" },
  {
    value: "پردیس دانشگاه صنعتی شریف(محل تحصیل تهران)",
    label: "پردیس دانشگاه صنعتی شریف(محل تحصیل تهران)",
  },
  { value: "دانشگاه صنعتی شریف", label: "دانشگاه صنعتی شریف" },
  { value: "دانشگاه صنعتی نوشیروانی بابل", label: "دانشگاه صنعتی نوشیروانی بابل" },
  { value: "دانشگاه ولیعصر رفسنجان", label: "دانشگاه ولیعصر رفسنجان" },
  { value: "دانشگاه ملایر", label: "دانشگاه ملایر" },
  { value: "دانشگاه صنعتی سهند", label: "دانشگاه صنعتی سهند" },
  { value: "دانشگاه یزد", label: "دانشگاه یزد" },
  { value: "دانشگاه تربت حیدریه", label: "دانشگاه تربت حیدریه" },
  {
    value: "پردیس دانشگاه بوعلی سینا(محل تحصیل دانشکده فنی تویسرکان)",
    label: "پردیس دانشگاه بوعلی سینا(محل تحصیل دانشکده فنی تویسرکان)",
  },
  { value: "دانشگاه قم", label: "دانشگاه قم" },
  { value: "دانشگاه آزاد علوم تحقیقات", label: "دانشگاه آزاد علوم تحقیقات" },
  { value: "دانشگاه آزاد واحد ساری", label: "دانشگاه آزاد واحد ساری" },
  { value: "دانشگاه آزاد واحد بوشهر", label: "دانشگاه آزاد واحد بوشهر" },
  { value: "دانشگاه آزاد کرمانشاه", label: "دانشگاه آزاد کرمانشاه" },
  { value: "دانشگاه آزاد تهران مرکز", label: "دانشگاه آزاد تهران مرکز" },
  { value: "دانشگاه آزاد تهران جنوب", label: "دانشگاه آزاد تهران جنوب" },
  { value: "دانشگاه آزاد تهران شمال", label: "دانشگاه آزاد تهران شمال" },
  { value: "دانشگاه آزاد قزوین", label: "دانشگاه آزاد قزوین" },
  { value: "دانشگاه آزاد تبریز", label: "دانشگاه آزاد تبریز" },

  { value: "دانشگاه آزاد کرج", label: "دانشگاه آزاد کرج" },
  { value: "دانشگاه آزاد نجف آباد", label: "دانشگاه آزاد نجف آباد" },
  {
    value: "دانشگاه آزاد اصفهان ( خوراسگان)",
    label: "دانشگاه آزاد اصفهان ( خوراسگان)",
  },
  { value: "دانشگاه آزاد مشهد", label: "دانشگاه آزاد مشهد" },
  { value: "دانشگاه آزاد یزد", label: "دانشگاه آزاد یزد" },
  { value: "دانشگاه آزاد شیراز", label: "دانشگاه آزاد شیراز" },
  { value: "دیگر", label: "دیگر" },
]

function UserDataForm({ justEmail, afterSubmit, courseId }) {
  const { userDataModalOpen, isLoggedIn } = useAuthState()
  const authDispatch = useAuthDispatch()

  const [user, setUser] = useState({})
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    if (isLoggedIn) {
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
    } else {
      setIsLoading(false)
    }
  }, [isLoggedIn])
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
        <div className="relative w-full h-full flex flex-col text-center overflow-scroll">
          <NavLink to="/">
            <span className="font-bold text-4xl leading-tight">لــــینوم</span>
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
                                first_name: user.first_name ? user.first_name : "",
                                last_name: user.last_name ? user.last_name : "",
                                email: user.email ? user.email : "",
                                university: user.university ? user.university : "",
                              }
                            : {
                                email: "",
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
                                  .email("فرمت ایمیل صحیح نیست")
                                  .required("لطفا ایمیل را وارد کنید"),
                                university: Yup.string()
                                  .trim()
                                  .required("لطفا دانشگاه را وارد کنید"),
                              }
                            : {
                                email: Yup.string()
                                  .trim()
                                  .email("فرمت ایمیل صحیح نیست")
                                  .required("لطفا ایمیل را وارد کنید"),
                              }
                        )}
                        onSubmit={async (values, { setSubmitting }) => {
                          if (!justEmail) {
                            const request = await updateUser(authDispatch, values)
                            if (request.status >= 200 && request.status < 300) {
                              toast.success("اطلاعات کاربر با موفقیت بروز شد")
                            }
                            localStorage.setItem("GetData", 1)
                          } else {
                            const fd = new FormData()
                            fd.append("email", values.email)
                            fd.append("course_id", courseId)
                            API.post("/newsletter/admin", fd)
                            localStorage.setItem("GetEmail", 1)
                          }
                          afterSubmit(false)
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
                            <div className="flex flex-col justify-between w-full">
                              {!justEmail && (
                                <div className="flex flex-col w-full">
                                  <label htmlFor="university" className="my-2">
                                    دانشگاه
                                  </label>
                                  {/* <Field
                                    value={formik.values.university}
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                    as="select"
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
                                  >
                                    <option value="تهران" label="دانشگاه تهران" />
                                  </Field> */}
                                  <Select
                                    className={
                                      formik.touched.university &&
                                      formik.errors.university
                                        ? "border-r"
                                        : ""
                                    }
                                    classNamePrefix="select"
                                    defaultValue={options[0]}
                                    isDisabled={false}
                                    isLoading={false}
                                    isClearable={true}
                                    isRtl={true}
                                    isSearchable={true}
                                    name="university"
                                    options={options}
                                    placeholder="لطفا دانشگاه خود را انتخاب کنید"
                                    // onChange={formik.handleChange}
                                    // onBlur={formik.handleBlur}
                                    onChange={(options) =>
                                      {
                                          formik.setValues({
                                            ...formik.values,
                                            university: options ? options.value : "",
                                          })
                                      }
                                    }
                                    // onBlur={() =>
                                    //   // formik.setFieldTouched("university", true)
                                    // }
                                  />
                                  <div className="my-1 text-red-500">
                                    <ErrorMessage name="university" />
                                  </div>
                                </div>
                              )}
                              <div className="flex flex-col">
                                <label htmlFor="email" className="my-2">
                                  ایمیل
                                </label>
                                <Field
                                  name="email"
                                  type="text"
                                  id="email"
                                  placeholder="لطفا ایمیل را وارد کنید ..."
                                  className={`my-1 py-2 px-10 text-center border-2 rounded-lg focus:outline-none focus:bg-gray-200 sm:w-1/2 w-full mx-auto ${
                                    formik.touched.email && formik.errors.email
                                      ? "border-red-500"
                                      : " border-purple-700"
                                  }`}
                                />
                                <div className="my-1 text-red-500">
                                  <ErrorMessage name="email" />
                                </div>
                              </div>
                            </div>
                            <Button
                              type="submit"
                              btnBgClass={
                                formik.isSubmitting
                                  ? " bg-gray-400"
                                  : "bg-orange-500"
                              }
                              btnTextClass="text-white"
                              className={`font-bold leading-loose px-6 py-1 relative ${
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
  courseId: null
}
export default UserDataForm
