import React, { useEffect, useState } from "react";
import {
   useQueryParams,
   NumberParam,
   StringParam,
   withDefault,
} from "use-query-params";

import "./courses.style.scss";

import CourseCard from "../../components/course-card/course-card.component";

import API, { request } from "../../helpers/api";

import { Link } from "react-router-dom";
import Loader from "react-loader-spinner";
import { toast } from "react-toastify";

function Courses(props) {
   const [courses, setCourses] = useState([]);
   const [isLoading, setIsLoading] = useState(true);

   const [query, setQuery] = useQueryParams({
      page: withDefault(NumberParam, 1),
   });
   const { page } = query;

   useEffect(() => {
      request(`/course?page=${page}`, (resp) => {
         setCourses(resp.data.courses);
         setIsLoading(false);
      });
   }, [query]);
   return (
      <div className="container mx-auto">
         {!isLoading ? (
            <div>
               <div className="flex flex-row flex-wrap mt-5 justify-center">
                  {courses.data.map((course) => (
                     <div className="mx-4 mt-4">
                        <CourseCard course={course} />
                     </div>
                  ))}
               </div>
               <ul className="pagination mx-auto flex flex-row justify-center">
                  {courses.prev_page_url && (
                     <li className="py-2 px-4 bg-white border border-orange-500 mx-1 rounded">
                        <Link to={`?page=${courses.current_page - 1}`}>
                           قبلی
                        </Link>
                     </li>
                  )}
                  {}
                  <li className="py-2 px-4 bg-white border-2 border-orange-500 bg-orange-500 font-bold text-white mx-1 rounded">
                     {courses.current_page}
                  </li>
                  {courses.next_page_url && (
                     <li className="py-2 px-4 bg-white border border-orange-500 mx-1 rounded">
                        <Link to={`?page=${courses.current_page + 1}`}>
                           بعدی
                        </Link>
                     </li>
                  )}
               </ul>
            </div>
         ) : (
            <div className="mx-auto w-full flex justify-center">
               <Loader
                  type="Triangle"
                  className="inline-block mb-10"
                  color="#ed8936"
               />
            </div>
         )}
      </div>
   );
}

export default Courses;
