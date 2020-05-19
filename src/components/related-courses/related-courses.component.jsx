import React from "react";
import Title from "../title/title.component";
// import { SliderFor } from "../icon/icon.component";
// import { Link } from "react-router-dom";
import RelatedCoursesSlider from "../related-courses-slider/related-courses-slider.component";

function RelatedCourses() {
    return (
        <div>
            <div className="container mx-auto">
                <div className="">
                    <div className="flex flex-row justify-between items-center mt-5">
                        <Title>دوره‌های مشابه</Title>
                        {/* <div className="flex flex-row items-center">
                            <Link to="/courses">
                                <span className="text-blue-1000">
                                    مشاهده همه
                                </span>
                                <SliderFor className="text-blue-1000 pt-1" />
                            </Link>
                        </div> */}
                    </div>
                </div>
            </div>
            <div className="my-2">
                <RelatedCoursesSlider />
            </div>
        </div>
    );
}

export default RelatedCourses;
