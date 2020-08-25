import React from "react"

import "./why-linom.style.scss"

import OrRecBot from "../../assets/images/or-rec-bot.png"
import PurpRecBig from "../../assets/images/purp-rec-big.png"
import WhyLinomImg from "../../assets/images/why-linom.webp"
import Blueprint from "../../assets/images/Blueprint.svg"
import Title from "../title/title.component"
import { FAQ, Student, AidKit } from "../icon/icon.component"
import Button from "../button/button.component"

function WhyLinom(props) {
  return (
    <div className="container mx-auto mt-24 why-linom px-4 xs:px-0">
      <div className="flex lg:flex-row lg:justify-between flex-col justify-center items-center">
        <div className="w-11/12 sm:w-7/12 lg:w-5/12 relative">
          <img src={PurpRecBig} alt="" className="absolute purp-rec" style={{}} />
          <img
            src={WhyLinomImg}
            alt="چرا لینوم ؟"
            className="w-full relative z-10"
            style={{ borderRadius: "10px 226px 10px 10px" }}
          />
          <img src={OrRecBot} alt="" className="absolute or-rec" />
          <img src={Blueprint} alt="" className="absolute blueprint" />
        </div>
        <div className="w-12/12 sm:w-11/12 md:10/12 lg:w-7/12 mt-8 lg:mt-0 lg:mr-5">
          <div className="flex flex-col inline-flex">
            <span>چرا باید</span>
            <Title>لینوم را انتخاب کنم؟</Title>
          </div>
          <p className="font-light text-base sm:text-lg leading-10 mt-3 xl:text-2xl xl:mt-6 text-justify ml-2">
            ما در لینوم برای تک تک دقایق شما ارزش قائلیم . لینوم با صرفه‌جویی در زمان
            و ارائه‌ی ویدئو های کپسولی، شما را در گذراندن واحدهای درسی خود همراهی و
            یاری میکند. هر زمان که به کمک لینوم نیاز داشتید، ما تمام قد در کنار شما
            هستیم.
          </p>
          <div className="xl:mr-10 mr-6">
            <div className="flex flex-col flex-wrap mt-3 features-ic">
              {/* <div className="mx-2 xl:mt-5 lg:mt-3 md:mt-6 sm:mt-3 mt-6 flex flex-row items-center">
                <div>
                  <span className="shadow-md py-5 px-3 rounded">
                    <FAQ className="text-blue-1000 text-3xl" />
                  </span>
                </div>
                <div className="mr-2">
                  <span className="font-bold text-base xl:text-lg leading-8 text-blue-1000">
                    بیش از 3500 کپسول آموزشی
                  </span>
                </div>
              </div> */}
              <div className="mx-2 xl:mt-5 lg:mt-3 md:mt-6 sm:mt-3 mt-6 flex flex-row items-center">
                <div>
                  <span className="shadow-md py-5 px-3 rounded">
                    <Student className="text-teal-500 text-3xl" />
                  </span>
                </div>
                <div className="mr-2">
                  <span className="font-bold text-base xl:text-lg leading-8 text-blue-1000">
                    مورد اعتماد بیش از 1800 دانشجو
                  </span>
                </div>
              </div>
              <div className="mx-2 xl:mt-5 lg:mt-3 md:mt-6 sm:mt-3 mt-6 flex flex-row items-center">
                <div>
                  <span className="shadow-md py-5 px-3 rounded">
                    <AidKit className="text-teal-500 text-3xl" />
                  </span>
                </div>
                <div className="mr-2">
                  <span className="font-bold text-base xl:text-lg leading-8 text-blue-1000">
                    56 ساعت ویدئوی کپسولی معادل بیش از 280 ساعت ویدئوی عادی
                  </span>
                </div>
              </div>
              {/* <div className="mx-2 xl:mt-5 lg:mt-3 md:mt-6 sm:mt-3 mt-6 flex flex-row items-center">
                <div>
                  <span className="shadow-md py-5 px-3 rounded">
                    <FAQ className="text-blue-1000 text-3xl" />
                  </span>
                </div>
                <div className="mr-2">
                  <span className="font-bold text-base xl:text-lg leading-8 text-blue-1000">
                    کپسول‌های ویژه شب امتحان
                  </span>
                </div>
              </div> */}
            </div>
          </div>
          <div className="w-full flex flex-row justify-between mt-8 xl:mt-12">
            <span></span>
            <Button arrow className="px-3 py-2 self-end" to="/story">
              قصه‌ی ‌ما
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default WhyLinom
