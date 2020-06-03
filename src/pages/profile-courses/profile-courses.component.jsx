import React, { useEffect, useState } from "react";

import { toast } from "react-toastify";

import API, { request } from "../../helpers/api";
import CustomLoader from "../../components/custom-loader/custom-loader.component";
import Title from "../../components/title/title.component";
import CourseCard from "../../components/course-card/course-card.component";

function ProfileCourses(props) {
   const [courses, setCourses] = useState([]);
   const [isLoading, setIsLoading] = useState(true);

   useEffect(() => {
      request("/course/admin/bought", (resp) => {
         setCourses(resp.data.courses);
         setIsLoading(false);
      });
   }, []);
   return (
      <div className="container mx-auto">
         {isLoading ? (
            <CustomLoader />
         ) : (
            <div className="mt-6">
               <Title>دوره‌های خریداری شده</Title>
               <div className="flex flex-row flex-wrap mt-5 justify-center">
                  {courses.length > 0 ? (
                     courses.map((course) => (
                        <div className="mx-4 mt-4">
                           <CourseCard course={course} />
                        </div>
                     ))
                  ) : (
                     <span className="text-xl text-red-500 font-bold">
                        شما هیچ دوره‌ای را خریداری نکرده‌اید.
                     </span>
                  )}
               </div>
            </div>
         )}
      </div>
   );
}

export default ProfileCourses;
