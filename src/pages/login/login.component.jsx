import React, { useState } from "react";
import { useAuthState, useAuthDispatch } from "../../contexts/auth-context";

import "./login.style.scss";

import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";

import Loader from "react-loader-spinner";

import Main from "../../assets/images/Main.png";
import Blueprint from "../../assets/images/Blueprint.svg";
import OrRec from "../../assets/images/or-rec.svg";
import PurpRec from "../../assets/images/purp-rec.svg";

import Rodal from "rodal";
// include styles
import "rodal/lib/rodal.css";

import { NavLink } from "react-router-dom";

import Title from "../../components/title/title.component";
import Button from "../../components/button/button.component";

import { Transition } from "react-transition-group";

const duration = 300;

const defaultStyle = {
   transition: `opacity ${duration}ms ease-in-out`,
   opacity: 0,
};

const transitionStyles1 = {
   entering: { opacity: 1 },
   entered: { opacity: 1 },
   exiting: { opacity: 0, position: "absolute" },
   exited: { opacity: 0, position: "absolute" },
};

const transitionStyles2 = {
   entering: { opacity: 0, position: "absolute" },
   entered: { opacity: 0, position: "absolute" },
   exiting: { opacity: 1 },
   exited: { opacity: 1 },
};

function Login(props) {
   const { authModalOpen } = useAuthState();
   const setAuthModalOpen = useAuthDispatch();

   const [stage, setStage] = useState(1);
   const [buttonText, setButtonText] = useState("ارسال رمز عبور");

   const [inProp, setInProp] = useState(true);
   return (
      <div className="login">
         <Rodal
            visible={authModalOpen}
            onClose={() => setAuthModalOpen({ type: "TOGGLE_MODAL" })}
            className="w-screen h-screen"
            customStyles={{
               height: "100vh",
               width: "100vw",
            }}
            animation="slideUp"
            duration={500}
         >
            <div className="relative w-full h-full flex flex-col text-center">
               <NavLink to="/">
                  <h1 className="font-bold text-4xl leading-tight">
                     لــــینوم
                  </h1>
               </NavLink>
               <div className="h-full w-full flex justify-center mt-8">
                  <div className="container">
                     <div className="flex flex-row justify-between">
                        <div className="flex flex-col items-start py-8">
                           <div className="">
                              <Title>ورود به لینوم</Title>
                           </div>
                           <span className="my-5 text-blue-1000 text-lg">
                              جهت ورود یا ثبت‌نام در لینوم فرم زیر را پر کنید
                           </span>
                           <div className="my-10">
                              <Formik
                                 initialValues={{
                                    phone: "",
                                    verification_code: "",
                                 }}
                                 validationSchema={Yup.object({
                                    phone: Yup.string()
                                       .max(
                                          11,
                                          "شماره تلفن فقط می‌تواند 11 کاراکتر باشد"
                                       )
                                       .min(
                                          11,
                                          "شماره تلفن فقط می‌تواند 11 کاراکتر باشد"
                                       )
                                       .required(
                                          "لطفا شماره تلفن را وارد کنید"
                                       ),
                                    verification_code: Yup.string()
                                       .max(5, "کد باید 5 رقم باشد")
                                       .min(5, "کد باید 5 رقم باشد")
                                       .required("لطفا کد را وارد کنید"),
                                 })}
                                 onSubmit={async (
                                    values,
                                    { setSubmitting }
                                 ) => {
                                    let data;
                                    if (stage == 1) {
                                       const json = await fetch(
                                          `http://localhost:8000/api/auth/get_verify_code?phone=${values.phone}`,
                                          { method: "POST" }
                                       );
                                       data = await json.json();
                                       await setStage(2);
                                       await setInProp(false);
                                       await setButtonText("اعتبار سنجی کد");
                                    } else if (stage == 2) {
                                       const json = await fetch(
                                          `http://localhost:8000/api/auth/login?phone=${values.phone}&verification_code=${values.verification_code}`,
                                          {
                                             method: "POST",
                                          }
                                       );
                                       data = await json.json();

                                       localStorage.setItem(
                                          "token",
                                          data.token
                                       );
                                       setAuthModalOpen({
                                          type: "TOGGLE_MODAL",
                                       });
                                    }

                                    await setSubmitting(false);

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
                                                      ...transitionStyles1[
                                                         state
                                                      ],
                                                   }}
                                                >
                                                   <label
                                                      htmlFor="phone"
                                                      className="my-2"
                                                   >
                                                      شماره تلفن
                                                   </label>
                                                   <Field
                                                      name="phone"
                                                      type="text"
                                                      placeholder="شماره تلفن را وارد کنید ... "
                                                      className={`z-10 my-1 py-2 px-10 text-center border-2 rounded-lg focus:outline-none focus:bg-gray-200 ${
                                                         formik.touched.phone &&
                                                         formik.errors.phone
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
                                                      ...transitionStyles2[
                                                         state
                                                      ],
                                                   }}
                                                >
                                                   <label
                                                      htmlFor="verification_code"
                                                      className="my-2"
                                                   >
                                                      کد اعتبارسنجی
                                                   </label>
                                                   <Field
                                                      name="verification_code"
                                                      type="text"
                                                      placeholder="کد اعتبارسنجی را وارد کنید ..."
                                                      className={`z-10 my-1 py-2 px-10 text-center border-2 rounded-lg focus:outline-none focus:bg-gray-200 ${
                                                         formik.touched
                                                            .verification_code &&
                                                         formik.errors
                                                            .verification_code
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
                                          btnBgClass={
                                             formik.isSubmitting
                                                ? " bg-gray-400"
                                                : "bg-orange-500"
                                          }
                                          btnTextClass="text-white"
                                          className={`font-bold leading-loose px-6 py-1 relative z-20 ${
                                             formik.isSubmitting
                                                ? " cursor-not-allowed"
                                                : ""
                                          }`}
                                          disabled={formik.isSubmitting}
                                       >
                                          {formik.isSubmitting ? (
                                             <Loader
                                                type="ThreeDots"
                                                color="#00BFFF"
                                                height={35}
                                                width={100}
                                             />
                                          ) : (
                                             buttonText
                                          )}
                                       </Button>
                                    </Form>
                                 )}
                              </Formik>
                           </div>
                        </div>
                        <div>
                           <div className="pt-8 w-full sm:w-10/12 lg:w-auto mx-auto">
                              <div className="relative mx-auto w-full">
                                 <img
                                    src={Blueprint}
                                    className="absolute w-24 xl:w-auto sm:w-32 blueprint"
                                    alt=""
                                 />
                                 <img
                                    src={Main}
                                    className="inset-0 relative w-11/12 mx-auto z-10"
                                    alt="Linom Courses"
                                 />
                                 <img
                                    src={OrRec}
                                    className="absolute w-32 xl:w-56 sm:w-48 or-rec"
                                    alt=""
                                 />
                                 <img
                                    src={PurpRec}
                                    className="absolute w-32 xl:w-56 sm:w-48 purp-rec"
                                    alt=""
                                 />
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </Rodal>
      </div>
   );
}

export default Login;
