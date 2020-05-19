import React from "react";
import Title from "../title/title.component";
import { SliderFor } from "../icon/icon.component";
import { Link } from "react-router-dom";
import TopCoursesSlider from "../top-courses-slider/top-courses-slider.component";

function TopCourses() {
    return (
        <div>
            <div className="container mx-auto">
                <span className="text-blue-700 text-xl">انتخاب بر اساس</span>
                <div className="">
                    <div className="flex flex-row justify-between items-center">
                        <Title>پرطرفدار‌ترین دوره‌ها</Title>
                        <div className="flex flex-row items-center">
                            <Link to="/courses">
                                <span className="text-blue-1000">
                                    مشاهده همه
                                </span>
                                <SliderFor className="text-blue-1000 pt-1" />
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
            <div className="my-5">
                <TopCoursesSlider />
            </div>
        </div>
    );
}

export default TopCourses;
