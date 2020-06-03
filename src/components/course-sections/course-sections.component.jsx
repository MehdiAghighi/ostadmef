import React, { useState, useEffect } from "react";
import Title from "../title/title.component";
import CourseSection from "../course-section/course-section.component";
import { request } from "../../helpers/api";
import CustomLoader from "../custom-loader/custom-loader.component";

function CourseSections({ course, activeId }) {
   const [videos, setVideos] = useState([]);
   const [isLoading, setIsLoading] = useState(true);

   useEffect(() => {
      request(`/course/videos/${course.id}`, (resp) => {
         setVideos(resp.data.videos);
         setIsLoading(false);
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
                     {videos.map((video, index) => (
                        <CourseSection
                           key={index}
                           active={activeId === video.id}
                           video={video}
                           title={course.title}
                        />
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
