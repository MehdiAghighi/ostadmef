import React from "react"

import "./partners-slider.style.scss"

import { SliderBack, SliderFor } from "../icon/icon.component"
import Swiper from "react-id-swiper"

function PartnersSlider(props) {
  const params = {
    lazy: true,
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
            <img
              className="mx-auto swiper-lazy"
              alt=""
              src={`${process.env.REACT_APP_API_DOMAIN}/storage/static/universities/tehran.png`}
            />
            <span className="hidden text-blue-1000 text-lg mt-3 font-bold leading-10">
              دانشگاه تهران
            </span>
          </div>
        </div>
        <div className="text-center">
          <div className="py-3 px-8">
            <img
              className="mx-auto swiper-lazy"
              alt=""
              src={`${process.env.REACT_APP_API_DOMAIN}/storage/static/universities/sharif.png`}
            />
            <span className="hidden text-blue-1000 text-lg mt-3 font-bold leading-10">
              دانشگاه شریف
            </span>
          </div>
        </div>
        <div className="text-center">
          <div className="py-3 px-8">
            <img
              className="mx-auto swiper-lazy"
              alt=""
              src={`${process.env.REACT_APP_API_DOMAIN}/storage/static/universities/alame.png`}
            />
            <span className="hidden text-blue-1000 text-lg mt-3 font-bold leading-10">
              دانشگاه علامه طباطبایی
            </span>
          </div>
        </div>
        <div className="text-center">
          <div className="py-3 px-8">
            <img
              className="mx-auto swiper-lazy"
              alt=""
              src={`${process.env.REACT_APP_API_DOMAIN}/storage/static/universities/amirkabir.png`}
            />
            <span className="hidden text-blue-1000 text-lg mt-3 font-bold leading-10">
              دانشگاه امیرکبیر
            </span>
          </div>
        </div>
        <div className="text-center">
          <div className="py-3 px-8">
            <img
              className="mx-auto swiper-lazy"
              alt=""
              src={`${process.env.REACT_APP_API_DOMAIN}/storage/static/universities/beheshti.png`}
            />
            <span className="hidden text-blue-1000 text-lg mt-3 font-bold leading-10">
              دانشگاه بهشتی
            </span>
          </div>
        </div>
        <div className="text-center">
          <div className="py-3 px-8">
            <img
              className="mx-auto swiper-lazy"
              alt=""
              src={`${process.env.REACT_APP_API_DOMAIN}/storage/static/universities/elmosanat.png`}
            />
            <span className="hidden text-blue-1000 text-lg mt-3 font-bold leading-10">
              دانشگاه علم و صنعت
            </span>
          </div>
        </div>
        <div className="text-center">
          <div className="py-3 px-8">
            <img
              className="mx-auto swiper-lazy"
              alt=""
              src={`${process.env.REACT_APP_API_DOMAIN}/storage/static/universities/esfahan.png`}
            />
            <span className="hidden text-blue-1000 text-lg mt-3 font-bold leading-10">
              دانشگاه اصفهان
            </span>
          </div>
        </div>
        <div className="text-center">
          <div className="py-3 px-8">
            <img
              className="mx-auto swiper-lazy"
              alt=""
              src={`${process.env.REACT_APP_API_DOMAIN}/storage/static/universities/ferdosi.png`}
            />
            <span className="hidden text-blue-1000 text-lg mt-3 font-bold leading-10">
              دانشگاه فردوسی
            </span>
          </div>
        </div>
        <div className="text-center">
          <div className="py-3 px-8">
            <img
              className="mx-auto swiper-lazy"
              alt=""
              src={`${process.env.REACT_APP_API_DOMAIN}/storage/static/universities/gilan.png`}
            />
            <span className="hidden text-blue-1000 text-lg mt-3 font-bold leading-10">
              دانشگاه گیلان
            </span>
          </div>
        </div>
        <div className="text-center">
          <div className="py-3 px-8">
            <img
              className="mx-auto swiper-lazy"
              alt=""
              src={`${process.env.REACT_APP_API_DOMAIN}/storage/static/universities/ilam.png`}
            />
            <span className="hidden text-blue-1000 text-lg mt-3 font-bold leading-10">
              دانشگاه ایلام
            </span>
          </div>
        </div>
        <div className="text-center">
          <div className="py-3 px-8">
            <img
              className="mx-auto swiper-lazy"
              alt=""
              src={`${process.env.REACT_APP_API_DOMAIN}/storage/static/universities/imamhosein.png`}
            />
            <span className="hidden text-blue-1000 text-lg mt-3 font-bold leading-10">
              دانشگاه امام حسین(ع)
            </span>
          </div>
        </div>
        <div className="text-center">
          <div className="py-3 px-8">
            <img
              className="mx-auto swiper-lazy"
              alt=""
              src={`${process.env.REACT_APP_API_DOMAIN}/storage/static/universities/mazandaran.png`}
            />
            <span className="hidden text-blue-1000 text-lg mt-3 font-bold leading-10">
              دانشگاه مازندران
            </span>
          </div>
        </div>
        <div className="text-center">
          <div className="py-3 px-8">
            <img
              className="mx-auto swiper-lazy"
              alt=""
              src={`${process.env.REACT_APP_API_DOMAIN}/storage/static/universities/payam.png`}
            />
            <span className="hidden text-blue-1000 text-lg mt-3 font-bold leading-10">
              دانشگاه پیام‌نور
            </span>
          </div>
        </div>
        <div className="text-center">
          <div className="py-3 px-8">
            <img
              className="mx-auto swiper-lazy"
              alt=""
              src={`${process.env.REACT_APP_API_DOMAIN}/storage/static/universities/semnan.png`}
            />
            <span className="hidden text-blue-1000 text-lg mt-3 font-bold leading-10">
              دانشگاه سمنان
            </span>
          </div>
        </div>
        <div className="text-center">
          <div className="py-3 px-8">
            <img
              className="mx-auto swiper-lazy"
              alt=""
              src={`${process.env.REACT_APP_API_DOMAIN}/storage/static/universities/shahed.png`}
            />
            <span className="hidden text-blue-1000 text-lg mt-3 font-bold leading-10">
              دانشگاه شاهد
            </span>
          </div>
        </div>
        <div className="text-center">
          <div className="py-3 px-8">
            <img
              className="mx-auto swiper-lazy"
              alt=""
              src={`${process.env.REACT_APP_API_DOMAIN}/storage/static/universities/shiraz.png`}
            />
            <span className="hidden text-blue-1000 text-lg mt-3 font-bold leading-10">
              دانشگاه شیراز
            </span>
          </div>
        </div>
      </Swiper>
    </div>
  )
}

export default PartnersSlider
