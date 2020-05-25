import React, { useState, useEffect } from "react";
// import Title from "../title/title.component";
// import { Link } from "react-router-dom";
import { Clock } from "../icon/icon.component";
import Button from "../button/button.component";
import HDivider from "../h-divider/h-divider.component";

import "./course-intro.style.scss";

import Rodal from "rodal";
// include styles
import "rodal/lib/rodal.css";

import { toast } from "react-toastify";

// import Main from "../../assets/images/Main.png";
// import DecoratedImage from "../decorated-image/decorated-image.component";
import TeacherCard from "../teacher-card/teacher-card.component";
import CourseTitle from "../course-title/course-title.component";

import API from "../../helpers/api";
import CustomLoader from "../custom-loader/custom-loader.component";

function CourseIntro({ course, bought }) {
   const [buyModalOpen, setBuyModalOpen] = useState(false);
   const [fetchingUrlStatus, setFetchingUrlStatus] = useState(false);
   const [paymentLink, setPaymentLink] = useState("");

   useEffect(() => {
      if (!bought) {
         if (paymentLink === "") {
            if (buyModalOpen) {
               setFetchingUrlStatus("pending");
               API.get(`/course/admin/invoice/${course.id}`)
                  .then((resp) => {
                     return resp.data;
                  })
                  .then((data) => {
                     setPaymentLink(data.payment_url);
                     setFetchingUrlStatus("success");
                  })
                  .catch((err) => {
                     if (err.response) {
                        toast.error(err.response.data.message);
                     } else {
                        toast.error("مشکلی در ارتباط با سرور پیش آمده است");
                     }
                     setFetchingUrlStatus("error");
                  });
            }
         }
      }
   }, [bought, buyModalOpen]);
   return (
      <>
         <div className="course-intro pt-10 container mx-auto flex flex-col-reverse lg:flex-row justify-between index-intro">
            <div
               className="xl:py-20 lg:py-16 py-10 ml-2"
               style={{
                  flexBasis: "49%",
               }}
            >
               <div className="xl:mb-5 mb-5 mx-auto lg:text-right text-center">
                  <CourseTitle>{course.title}</CourseTitle>
               </div>
               <p className="text-justify xl:font-light font-normal xl:text-2xl sm:text-lg text-lg leading-10 w-full xl:w-10/12 sm:w-9/12 mx-auto lg:w-auto">
                  {course.description}
               </p>
               <TeacherCard className="" teacher={course.user} />
               <div className="w-full mx-auto lg:w-auto">
                  {bought ? null : (
                     <Button
                        btnBgClass="bg-purple-800"
                        bgnTextClass="text-white"
                        className="xl:mt-5 mt-5 text-sm leading-8 py-2 px-5 lg:mx-0 mx-auto"
                        arrow
                        onClick={() => setBuyModalOpen(true)}
                     >
                        شرکت در دوره
                     </Button>
                  )}
               </div>
            </div>
            <div className="pt-8 w-full sm:w-11/12 lg:w-auto mx-auto mt-6">
               <img
                  src={`http://localhost:8000/storage/${course.pic}`}
                  className="mx-auto"
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
                  <div className="mx-auto font-bold text-3xl text-center text-green-500">
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
                        <a href={paymentLink}>
                           <Button
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
         <div className="container mx-auto mt-3">
            <div className="bg-gray-200 rounded-lg lg:px-8 px-4 py-3 flex md:flex-row flex-col justify-between items-center">
               <div className="flex sm:flex-row flex-col flex-wrap justify-start items-center h-full justify-center items-center">
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
                  <Button
                     btnBgClass="bg-purple-800"
                     bgnTextClass="text-white"
                     className="text-sm leading-8 py-2 px-5 lg:mx-0 mx-auto"
                     arrow
                     onClick={() => setBuyModalOpen(true)}
                  >
                     شرکت در دوره
                  </Button>
               )}
            </div>
         </div>
      </>
   );
}

export default CourseIntro;
