import React from "react"
import Swiper from "react-id-swiper"

import "./hot-posts-slider.style.scss"

import { SliderBack, SliderFor } from "../icon/icon.component"
import BlogCard from "../blog-card/blog-card.component"

function HotPostsSlider({ posts }) {
  const params = {
    lazy: true,
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
      <span className="md:hidden slider-button-prev absolute lg:p-2 p-2 text-white bg-teal-500 z-10 font-bold text-2xl">
        <SliderBack />
      </span>
    ),
    renderNextButton: () => (
      <span className="md:hidden md:block slider-button-next absolute lg:p-2 p-2 text-white bg-teal-500 z-10 font-bold text-2xl">
        <SliderFor />
      </span>
    ),
  }
  return (
    <div className="mr-1 md:mr-5">
      <Swiper {...params}>
        {posts.map((item, index) => (
          <div className="" key={index}>
            <BlogCard key={index} post={item} lazy={false} />
          </div>
        ))}
      </Swiper>
    </div>
  )
}

export default HotPostsSlider
