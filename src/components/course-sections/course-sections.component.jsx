import React, { useState, useEffect } from "react";
import Title from "../title/title.component";
import CourseSection from "../course-section/course-section.component";
import Loader from "react-loader-spinner";
import API from "../../helpers/api";
function CourseSections({ course }) {
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
            .catch((err) => console.log(err));
    }, [course]);
    return (
        <div className="mt-8 bg-gray-200">
            <div className="container mx-auto py-5">
                <Title>سرفصل‌های دوره</Title>
                <div className="my-4">
                    {isLoading ? (
                        <div className="mx-auto flex justify-center">
                            <Loader
                                type="Triangle"
                                className="inline-block mb-10"
                                color="#ed8936"
                            />
                        </div>
                    ) : (
                        <div className="flex flex-col">
                            {videos.map((video) => (
                                <>
                                    <CourseSection
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

export default CourseSections;
