import React, { useState, useEffect } from "react";
import Title from "../title/title.component";
import CourseSection from "../course-section/course-section.component";
import Loader from "react-loader-spinner";
import API from "../../helpers/api";
import { toast } from "react-toastify";
import CustomLoader from "../custom-loader/custom-loader.component";

function CourseSections({ course, activeId }) {
    const [videos, setVideos] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        API.get(`/course/videos/${course.id}`)
            .then((resp) => {
                return resp.data.videos;
            })
            .then((data) => {
                setVideos(data);
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
        <div className="mt-8 bg-gray-200">
            <div className="container mx-auto py-5">
                <Title>سرفصل‌های دوره</Title>
                <div className="my-4">
                    {isLoading ? (
                        <CustomLoader />
                    ) : (
                        <div className="flex flex-col">
                            {videos.map((video) => (
                                <>
                                    <CourseSection
                                        active={activeId == video.id}
                                        video={video}
                                        title={course.title}
                                    />
                                </>
                            ))}
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}

CourseSections.defaultProps = {
    activeId: null,
};

export default CourseSections;
