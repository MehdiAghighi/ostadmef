import React, { useState, useEffect } from "react";

import Title from "../title/title.component";
import RelatedCoursesSlider from "../related-courses-slider/related-courses-slider.component";
import API from "../../helpers/api";
import CustomLoader from "../custom-loader/custom-loader.component";
import { toast } from "react-toastify";

function RelatedCourses({ course }) {
    const [relatedCourses, setRelatedCourses] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        API.get(`/course/related/${course.id}`)
            .then((resp) => {
                return resp.data.courses;
            })
            .then((courses) => {
                setRelatedCourses(courses);
                setIsLoading(false);
            })
            .catch((err) => {
                if (err.response.data) {
                    toast.error(err.response.data.message);
                } else {
                    toast.error("مشکلی در ارتباط با سرور پیش آمده است");
                }
            });
    }, [course]);
    return (
        <div>
            <div className="container mx-auto">
                <div className="">
                    <div className="flex flex-row justify-between items-center mt-5">
                        <Title>دوره‌های مشابه</Title>
                    </div>
                </div>
            </div>
            <div className="my-2">
                {isLoading ? (
                    <CustomLoader />
                ) : (
                    <RelatedCoursesSlider courses={relatedCourses} />
                )}
            </div>
        </div>
    );
}

export default RelatedCourses;
