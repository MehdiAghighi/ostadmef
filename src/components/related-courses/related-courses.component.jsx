import React, { useState, useEffect } from "react";

import Title from "../title/title.component";
import RelatedCoursesSlider from "../related-courses-slider/related-courses-slider.component";
import { request } from "../../helpers/api";
import CustomLoader from "../custom-loader/custom-loader.component";

function RelatedCourses({ course }) {
   const [relatedCourses, setRelatedCourses] = useState([]);
   const [isLoading, setIsLoading] = useState(true);

   useEffect(() => {
      request(`/course/related/${course.id}`, (resp) => {
         setRelatedCourses(resp.data.courses);
         setIsLoading(false);
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
