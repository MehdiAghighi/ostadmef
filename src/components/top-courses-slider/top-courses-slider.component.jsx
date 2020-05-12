import React from "react";
import Swiper from "react-id-swiper";

import "./top-courses-slider.style.scss";

import courseImage from "../../assets/images/course.png";

import {
   SliderBack,
   SliderFor,
   ArrowLeft,
   Clock,
} from "../icon/icon.component";
import Card from "../card/card.component";
import CardImage from "../card/card-image/card-image.component";
import CardTitle from "../card/card-title/card-title.component";
import CardBody from "../card/card-body/card-body.component";
import CardFooter from "../card/card-footer/card-footer.component";

function TopCoursesSlider() {
   const params = {
      // slidesPerView: 6.1,
      // slidesPerGroup: 1,
      breakpoints: {
         1120: {
            slidesPerView: 4.2,
            slidesPerGroup: 1,
            spaceBetween: 30,
         },
         820: {
            slidesPerView: 3.2,
            slidesPerGroup: 1,
            spaceBetween: 30,
         },
         640: {
            slidesPerView: 2.8,
            slidesPerGroup: 1,
            spaceBetween: 20,
         },
         320: {
            slidesPerView: 1.4,
            slidesPerGroup: 1,
            spaceBetween: 10,
         },
      },
      freeMode: true,
      // centeredSlides: true,
      grabCursor: true,
      loop: true,
      navigation: {
         nextEl: ".slider-button-next",
         prevEl: ".slider-button-prev",
      },
      containerClass: "swiper-container top-courses-slider py-10",
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
   const arr = [1, 2, 3, 4, 5, 6, 7];
   return (
      <div className="mr-1 md:mr-5">
         <Swiper {...params}>
            {arr.map((it) => (
               <div>
                  <Card>
                     <CardImage to="/">
                        <img src={courseImage} className="" />
                     </CardImage>
                     <CardTitle to="/">آموزش فتوشاپ مقدماتی</CardTitle>
                     <CardBody>
                        <div className="flex flex-row items-center mx-auto text-center justify-center">
                           <span>مهران احمدی</span>
                           <div
                              className="h-6 bg-gray-400 mx-3"
                              style={{
                                 width: 2,
                              }}
                           ></div>
                           <span className="text-gray-600">
                              ساعت 14 &nbsp;
                              <Clock className="text-gray-600 text-xs" />
                           </span>
                        </div>
                     </CardBody>
                     <CardFooter>
                        <div className="flex flex-row justify-between items-center">
                           <span className="text-xl text-green-500 leading-tight">
                              20,000 تومان
                           </span>
                           <ArrowLeft className="text-xs font-light text-orange-500" />
                        </div>
                     </CardFooter>
                  </Card>
               </div>
            ))}
         </Swiper>
      </div>
   );
}

export default TopCoursesSlider;
