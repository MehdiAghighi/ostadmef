import React from "react";

import UserImg from "../../assets/images/unnamed.png";

import { ArrowLeft } from "../icon/icon.component";

function TeacherCard({ teacher, className }) {
   return (
     <div>
       <div
         className={`py-2 px-3 border border-purple-800 rounded-lg flex flex-row justify-between mx-auto xl:w-10/12 lg:w-full sm:w-6/12 w-full lg:my-0 my-2 ${className}`}
       >
         <div className="relative w-full">
           <div className="flex flex-row items-center">
             <div className="overflow-hidden rounded-full">
               <img
                 src={teacher.avatar ? teacher.avatar : UserImg}
                 style={{ borderRadius: "50%", width: 61, height: 61 }}
                 alt="معلم دوره"
               />
             </div>
             <div className="flex flex-col mx-3">
               <span className="text-base leading-10">
                 مدرس:{" "}
                 <span className="font-bold">
                   {teacher.first_name} {teacher.last_name}
                 </span>
               </span>
               {/* <span className="text-base leading-10">
                              کارشناس ارشد ارتباطات
                              </span> */}
             </div>
           </div>
           <div
             className="absolute"
             style={{
               left: 0,
               top: "31%",
             }}
           >
             <ArrowLeft className="text-orange-500 cursor-not-allowed" />
           </div>
         </div>
       </div>
     </div>
   )
}

export default TeacherCard;
