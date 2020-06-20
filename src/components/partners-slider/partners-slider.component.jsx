import React from "react"

import "./partners-slider.style.scss"

import { SliderBack, SliderFor } from "../icon/icon.component"

// import Kabir from "../../assets/images/Kabir.png";
import Sharif from "../../assets/images/Sharif.png"
import Tehran from "../../assets/images/Tehran.png"

import Alame from "../../assets/images/universities/alame.png"
import AmirKabir from "../../assets/images/universities/amirkabir.png"
import Beheshti from "../../assets/images/universities/beheshti.png"
import ElmoSanat from "../../assets/images/universities/elmosanat.png"
import Esfahan from "../../assets/images/universities/esfahan.png"
import Ferdosi from "../../assets/images/universities/ferdosi.png"
import Gilan from "../../assets/images/universities/gilan.png"
import Ilam from "../../assets/images/universities/ilam.png"
import ImamHosein from "../../assets/images/universities/imamhosein.png"
import Mazandaran from "../../assets/images/universities/mazandaran.png"
import Oxford from "../../assets/images/universities/oxford.png"
import Payam from "../../assets/images/universities/payam.jpg"
import Semnan from "../../assets/images/universities/semnan.png"
import Shahed from "../../assets/images/universities/shahed.png"
import Shiraz from "../../assets/images/universities/shiraz.png"
import Yazd from "../../assets/images/universities/yazd.png"

import Swiper from "react-id-swiper"

function PartnersSlider(props) {
  const params = {
    breakpoints: {
      1090: {
        slidesPerView: 5.9,
        slidesPerGroup: 1,
      },
      768: {
        slidesPerView: 4,
        slidesPerGroup: 1,
      },
      640: {
        slidesPerView: 3,
        slidesPerGroup: 1,
      },
      320: {
        slidesPerView: 2,
        slidesPerGroup: 1,
      },
    },
    spaceBetween: 30,
    centeredSlides: true,
    grabCursor: true,
    loop: true,
    navigation: {
      nextEl: ".slider-button-next",
      prevEl: ".slider-button-prev",
    },
    containerClass: "swiper-container partners-slider py-10",
    renderPrevButton: () => (
      <span className="slider-button-prev absolute lg:p-2 p-2 text-white bg-teal-500 z-10 font-bold text-2xl">
        <SliderBack />
      </span>
    ),
    renderNextButton: () => (
      <span className="slider-button-next absolute lg:p-2 p-2 text-white bg-teal-500 z-10 font-bold text-2xl">
        <SliderFor />
      </span>
    ),
  }
  return (
    <div className="mt-3" style={{ height: 325 }}>
      <Swiper {...params} className="">
        <div className="text-center">
          <div className="py-3 px-8">
            <img className="mx-auto" alt="" src={Tehran} />
            <span className="hidden text-blue-1000 text-lg mt-3 font-bold leading-10">
              دانشگاه تهران
            </span>
          </div>
        </div>
        <div className="text-center">
          <div className="py-3 px-8">
            <img className="mx-auto" alt="" src={Sharif} />
            <span className="hidden text-blue-1000 text-lg mt-3 font-bold leading-10">
              دانشگاه شریف
            </span>
          </div>
        </div>
        <div className="text-center">
          <div className="py-3 px-8">
            <img className="mx-auto" alt="" src={Alame} />
            <span className="hidden text-blue-1000 text-lg mt-3 font-bold leading-10">
              دانشگاه علامه طباطبایی
            </span>
          </div>
        </div>
        <div className="text-center">
          <div className="py-3 px-8">
            <img className="mx-auto" alt="" src={AmirKabir} />
            <span className="hidden text-blue-1000 text-lg mt-3 font-bold leading-10">
              دانشگاه امیرکبیر
            </span>
          </div>
        </div>
        <div className="text-center">
          <div className="py-3 px-8">
            <img className="mx-auto" alt="" src={Beheshti} />
            <span className="hidden text-blue-1000 text-lg mt-3 font-bold leading-10">
              دانشگاه بهشتی
            </span>
          </div>
        </div>
        <div className="text-center">
          <div className="py-3 px-8">
            <img className="mx-auto" alt="" src={ElmoSanat} />
            <span className="hidden text-blue-1000 text-lg mt-3 font-bold leading-10">
              دانشگاه علم و صنعت
            </span>
          </div>
        </div>
        <div className="text-center">
          <div className="py-3 px-8">
            <img className="mx-auto" alt="" src={Esfahan} />
            <span className="hidden text-blue-1000 text-lg mt-3 font-bold leading-10">
              دانشگاه اصفهان
            </span>
          </div>
        </div>
        <div className="text-center">
          <div className="py-3 px-8">
            <img className="mx-auto" alt="" src={Ferdosi} />
            <span className="hidden text-blue-1000 text-lg mt-3 font-bold leading-10">
              دانشگاه فردوسی
            </span>
          </div>
        </div>
        <div className="text-center">
          <div className="py-3 px-8">
            <img className="mx-auto" alt="" src={Gilan} />
            <span className="hidden text-blue-1000 text-lg mt-3 font-bold leading-10">
              دانشگاه گیلان
            </span>
          </div>
        </div>
        <div className="text-center">
          <div className="py-3 px-8">
            <img className="mx-auto" alt="" src={Ilam} />
            <span className="hidden text-blue-1000 text-lg mt-3 font-bold leading-10">
              دانشگاه ایلام
            </span>
          </div>
        </div>
        <div className="text-center">
          <div className="py-3 px-8">
            <img className="mx-auto" alt="" src={ImamHosein} />
            <span className="hidden text-blue-1000 text-lg mt-3 font-bold leading-10">
              دانشگاه امام حسین(ع)
            </span>
          </div>
        </div>
        <div className="text-center">
          <div className="py-3 px-8">
            <img className="mx-auto" alt="" src={Mazandaran} />
            <span className="hidden text-blue-1000 text-lg mt-3 font-bold leading-10">
              دانشگاه مازندران
            </span>
          </div>
        </div>
        <div className="text-center">
          <div className="py-3 px-8">
            <img className="mx-auto" alt="" src={Oxford} />
            <span className="hidden text-blue-1000 text-lg mt-3 font-bold leading-10">
              دانشگاه آکسفورد
            </span>
          </div>
        </div>
        <div className="text-center">
          <div className="py-3 px-8">
            <img className="mx-auto" alt="" src={Payam} />
            <span className="hidden text-blue-1000 text-lg mt-3 font-bold leading-10">
              دانشگاه پیام‌نور
            </span>
          </div>
        </div>
        <div className="text-center">
          <div className="py-3 px-8">
            <img className="mx-auto" alt="" src={Semnan} />
            <span className="hidden text-blue-1000 text-lg mt-3 font-bold leading-10">
              دانشگاه سمنان
            </span>
          </div>
        </div>
        <div className="text-center">
          <div className="py-3 px-8">
            <img className="mx-auto" alt="" src={Shahed} />
            <span className="hidden text-blue-1000 text-lg mt-3 font-bold leading-10">
              دانشگاه شاهد
            </span>
          </div>
        </div>
        <div className="text-center">
          <div className="py-3 px-8">
            <img className="mx-auto" alt="" src={Shiraz} />
            <span className="hidden text-blue-1000 text-lg mt-3 font-bold leading-10">
              دانشگاه شیراز
            </span>
          </div>
        </div>
        <div className="text-center">
          <div className="py-3 px-8">
            <img className="mx-auto h-32" alt="" src={Yazd} />
            <span className="hidden text-blue-1000 text-lg mt-3 font-bold leading-10">
              دانشگاه یزد
            </span>
          </div>
        </div>
      </Swiper>
    </div>
  )
}

export default PartnersSlider
