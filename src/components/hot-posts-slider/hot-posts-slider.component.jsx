import React from "react";
import Swiper from "react-id-swiper";

import "./hot-posts-slider.style.scss";

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
import PostTag from "../post-tag/post-tag.component";

function HotPostsSlider() {
   const params = {
      // slidesPerView: 6.1,
      // slidesPerGroup: 1,
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
      centeredSlides: false,
      grabCursor: false,
      loop: false,
      navigation: {
         nextEl: ".slider-button-next",
         prevEl: ".slider-button-prev",
      },
      containerClass: "swiper-container container hot-posts-slider py-10",
      renderPrevButton: () => (
         <span className="md:hidden slider-button-prev absolute lg:p-2 p-2 text-white bg-purple-800 z-10 font-bold text-2xl">
            <SliderBack />
         </span>
      ),
      renderNextButton: () => (
         <span className="md:hidden md:block slider-button-next absolute lg:p-2 p-2 text-white bg-purple-800 z-10 font-bold text-2xl">
            <SliderFor />
         </span>
      ),
   };
   const arr = [1, 2, 3];
   return (
      <div className="mr-1 md:mr-5">
         <Swiper {...params}>
            {arr.map((item, index) => (
               <div className="">
                  <Card>
                     <CardImage to="/">
                        <img src={courseImage} className="" />
                     </CardImage>
                     <CardTitle to="/">دانستنی‌های هک با پایتون</CardTitle>
                     <CardBody>
                        <PostTag to="/">آموزشی</PostTag>
                     </CardBody>
                     <CardFooter>
                        <div className="flex flex-row justify-between items-center">
                           <span></span>
                           <div className="flex flex-row">
                              <span className="text-gray-600">
                                 9 روز پیش &nbsp;
                                 <Clock className="text-gray-600 text-xs" />
                              </span>
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
                        </div>
                     </CardFooter>
                  </Card>
               </div>
            ))}
         </Swiper>
      </div>
   );
}

export default HotPostsSlider;
