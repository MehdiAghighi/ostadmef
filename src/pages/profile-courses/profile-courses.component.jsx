import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet";

import { request } from "../../helpers/api";
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
               <Helmet>
                  <title>لینوم | دوره‌های خریداری شده</title>
               </Helmet>
               <Title>دوره‌های خریداری شده</Title>
               <div className="flex flex-row flex-wrap mt-5 justify-center">
                  {courses.length > 0 ? (
                     courses.map((course, index) => (
                        <div className="mx-4 mt-4" key={index}>
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
