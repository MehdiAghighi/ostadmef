import React, { useState, useEffect } from "react";
import Title from "../title/title.component";
import { SliderFor } from "../icon/icon.component";
import { Link } from "react-router-dom";
import TopCoursesSlider from "../top-courses-slider/top-courses-slider.component";

import { request } from "../../helpers/api";
import CustomLoader from "../custom-loader/custom-loader.component";
// import { toast } from "react-toastify";

function TopCourses() {
   const [topCourses, setTopCourses] = useState([]);
   const [isLoading, setIsLoading] = useState(true);

   useEffect(() => {
      request("/course/top", (resp) => {
         setTopCourses(resp.data.courses);
         setIsLoading(false);
      });
   }, []);
   return (
      <div>
         <div className="container mx-auto">
            <span className="text-blue-700 text-xl">انتخاب بر اساس</span>
            <div className="">
               <div className="flex flex-row justify-between items-center">
                  <Title>پرطرفدار‌ترین دوره‌ها</Title>
                  <div className="flex flex-row items-center">
                     <Link to="/courses">
                        <span className="text-blue-1000">مشاهده همه</span>
                        <SliderFor className="text-blue-1000 pt-1" />
                     </Link>
                  </div>
               </div>
            </div>
         </div>
         <div className="my-5">
            {isLoading ? (
               <CustomLoader />
            ) : (
               <TopCoursesSlider isLoading={isLoading} courses={topCourses} />
            )}
         </div>
      </div>
   );
}

export default TopCourses;
