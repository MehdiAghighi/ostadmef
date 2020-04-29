import React from "react";

import "./index-intro.style.scss";

import Main from "../../assets/images/Main.png";
import Blueprint from "../../assets/images/Blueprint.svg";
import OrRec from "../../assets/images/or-rec.svg";
import PurpRec from "../../assets/images/purp-rec.svg";

import Title from "../title/title.component";
import { Link } from "react-router-dom";
import Button from "../button/button.component";

function IndexIntro() {
   return (
      <div className="pt-10 container mx-auto flex flex-row justify-between index-intro">
         <div
            className="xl:py-20 py-16"
            style={{
               flexBasis: "45%",
            }}
         >
            <div className="xl:mb-16 mb-8" style={{ width: 335 }}>
               <Title>آشنایی با لــــینوم</Title>
            </div>
            <p className="xl:font-light font-normal xl:text-2xl text-xl leading-10">
               لینوم یک پلتفرم آموزشی است که با تکیه بر ویدئو های کوتاه و فشرده
               بستری را برای دانشجویان ایجاد میکند که در آن بتوانند در کوتاه
               ترین زمان ممکن یک کورس را به طور کامل یاد بگیرند.
            </p>
            <Link to="/">
               <Button
                  btnBgClass="bg-purple-800"
                  bgnTextClass="text-white"
                  className="xl:mt-12 mt-5 text-sm leading-8 py-2 px-5"
                  arrow
               >
                  آشنایی بیشتر
               </Button>
            </Link>
         </div>
         <div className="pt-8">
            <div className="relative mx-auto w-full">
               <img
                  src={Blueprint}
                  className="absolute xl:w-auto w-32 blueprint"
                  alt=""
               />
               <img
                  src={Main}
                  className="inset-0 relative w-11/12 mx-auto z-10"
                  alt="Linom Courses"
               />
               <img
                  src={OrRec}
                  className="absolute xl:w-auto w-48 or-rec"
                  alt=""
               />
               <img
                  src={PurpRec}
                  className="absolute xl:w-auto w-48 purp-rec"
                  alt=""
               />
            </div>
         </div>
      </div>
   );
}

export default IndexIntro;
