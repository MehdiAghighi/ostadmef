import React from "react";

// import "react-id-swiper/lib/styles/scss/swiper.css";

import "./partners-slider.style.scss";

import { SliderBack, SliderFor } from "../icon/icon.component";

import Kabir from "../../assets/images/Kabir.png";
import Sharif from "../../assets/images/Sharif.png";
import Tehran from "../../assets/images/Tehran.png";

import Swiper from "react-id-swiper";

function PartnersSlider(props) {
   const params = {
      // slidesPerView: 6.1,
      // slidesPerGroup: 1,
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
         <span className="slider-button-prev absolute lg:p-2 p-2 text-white bg-purple-800 z-10 font-bold text-2xl">
            <SliderBack />
         </span>
      ),
      renderNextButton: () => (
         <span className="slider-button-next absolute lg:p-2 p-2 text-white bg-purple-800 z-10 font-bold text-2xl">
            <SliderFor />
         </span>
      ),
   };
   return (
      <div className="mt-3">
         <Swiper {...params} className="">
            <div className="text-center">
               <div className="py-3 px-8">
                  <img className="mx-auto" src={Tehran} />
                  <span className="hidden text-blue-1000 text-lg mt-3 font-bold leading-10">
                     دانشگاه تهران
                  </span>
               </div>
            </div>
            <div className="text-center">
               <div className="py-3 px-8">
                  <img className="mx-auto" src={Sharif} />
                  <span className="hidden text-blue-1000 text-lg mt-3 font-bold leading-10">
                     دانشگاه تهران
                  </span>
               </div>
            </div>
            <div className="text-center">
               <div className="py-3 px-8">
                  <img className="mx-auto" src={Sharif} />
                  <span className="hidden text-blue-1000 text-lg mt-3 font-bold leading-10">
                     دانشگاه تهران
                  </span>
               </div>
            </div>
            <div className="text-center">
               <div className="py-3 px-8">
                  <img className="mx-auto" src={Sharif} />
                  <span className="hidden text-blue-1000 text-lg mt-3 font-bold leading-10">
                     دانشگاه تهران
                  </span>
               </div>
            </div>
            <div className="text-center">
               <div className="py-3 px-8">
                  <img className="mx-auto" src={Sharif} />
                  <span className="hidden text-blue-1000 text-lg mt-3 font-bold leading-10">
                     دانشگاه تهران
                  </span>
               </div>
            </div>
         </Swiper>
      </div>
   );
}

export default PartnersSlider;
