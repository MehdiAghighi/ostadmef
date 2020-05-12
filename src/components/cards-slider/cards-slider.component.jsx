import React from "react";
import Swiper from "react-id-swiper";

import "./cards-slider.style.scss";

import { SliderBack, SliderFor } from "../icon/icon.component";

function CardsSlider(props) {
   const params = {
      breakpoints: {
         1120: {
            slidesPerView: 3,
            slidesPerGroup: 1,
            spaceBetween: 30,
         },
         820: {
            slidesPerView: 3,
            slidesPerGroup: 1,
            spaceBetween: 30,
         },
         640: {
            slidesPerView: 2,
            slidesPerGroup: 1,
            spaceBetween: 20,
         },
         320: {
            slidesPerView: 1.4,
            slidesPerGroup: 1,
            spaceBetween: 10,
         },
      },
      freeMode: false,
      // centeredSlides: true,
      grabCursor: false,
      loop: false,
      navigation: {
         nextEl: ".slider-button-next",
         prevEl: ".slider-button-prev",
      },
      containerClass: `swiper-container cards-slider ${props.containerClass} py-10`,
      ...props.params,
   };
   return (
      <div className="mr-1 md:mr-5">
         <Swiper {...props.params}>{props.children}</Swiper>
      </div>
   );
}

export default CardsSlider;
