import React from "react";
import Swiper from "react-id-swiper";

import "./related-courses-slider.style.scss";

import { SliderBack, SliderFor } from "../icon/icon.component";
import CourseCard from "../course-card/course-card.component";

function RelatedCoursesSlider({ courses }) {
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
        containerClass: "swiper-container related-courses-slider py-10",
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
        <div className="mr-1 md:mr-5">
            <Swiper {...params}>
                {courses.map((course) => (
                    <div>
                        <CourseCard course={course} />
                    </div>
                ))}
            </Swiper>
        </div>
    );
}

export default RelatedCoursesSlider;
