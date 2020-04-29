import React from "react";

import Main from "../../assets/images/Main.png";
import Blueprint from "../../assets/images/Blueprint.svg";
import OrRec from "../../assets/images/or-rec.svg";
import PurpRec from "../../assets/images/purp-rec.svg";

import Title from "../title/title.component";
import { ArrowLeft } from "../icon/icon.component";
import { Link } from "react-router-dom";

function IndexIntro() {
   return (
      <div className="pt-10 container mx-auto flex flex-row justify-between">
         <div
            className="py-20"
            style={{
               flexBasis: "45%",
            }}
         >
            <div className="mb-16" style={{ width: 335 }}>
               <Title>آشنایی با لــــینوم</Title>
            </div>
            <p className="font-light text-2xl leading-10">
               لینوم یک پلتفرم آموزشی است که با تکیه بر ویدئو های کوتاه و فشرده
               بستری را برای دانشجویان ایجاد میکند که در آن بتوانند در کوتاه
               ترین زمان ممکن یک کورس را به طور کامل یاد بگیرند.
            </p>
            <Link to="/">
               <button className="rounded-lg py-2 px-5 bg-purple-800 text-white flex flex-row justify-between items-center mt-12 text-sm leading-8">
                  آشنایی بیشتر
                  <div className="py-1 px-3 bg-white rounded-lg text-orange-700 mr-4">
                     <ArrowLeft className="text-orange-500 font-light text-xs" />
                  </div>
               </button>
            </Link>
         </div>
         <div className="pt-8">
            <div className="relative w-full">
               <img
                  src={Blueprint}
                  className="absolute"
                  style={{
                     top: -16.5,
                     left: 0,
                  }}
                  alt=""
               />
               <img
                  src={Main}
                  className="inset-0 relative w-11/12 mx-auto z-10"
                  alt="Linom Courses"
               />
               <img
                  src={OrRec}
                  className="absolute"
                  style={{
                     top: -24,
                     right: 0,
                  }}
                  alt=""
               />
               <img
                  src={PurpRec}
                  className="absolute"
                  style={{
                     bottom: -39,
                     left: 0,
                  }}
                  alt=""
               />
            </div>
         </div>
      </div>
   );
}

export default IndexIntro;
