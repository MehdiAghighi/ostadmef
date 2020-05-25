import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import CourseIntro from "../../components/course-intro/course-intro.component";
// import CourseInfo from "../../components/course-info/course-info.component"
import CustomLoader from "../../components/custom-loader/custom-loader.component";
import CourseSections from "../../components/course-sections/course-sections.component";
import RelatedCourses from "../../components/related-courses/related-courses.component";
import API from "../../helpers/api";
import { toast } from "react-toastify";

function Course(props) {
   let { slug } = useParams();
   const [course, setCourse] = useState({});
   const [isLoading, setIsLoading] = useState(true);

   useEffect(() => {
      API.get(`/course/${slug}`)
         .then((response) => {
            return response.data.course;
         })
         .then((course) => {
            setCourse(course);
            setIsLoading(false);
         })
         .catch((err) => {
            if (err.response) {
               toast.error(err.response.data.message);
            } else {
               toast.error("دریافت اطلاعات دوره موفقیت‌آمیز نبود");
            }
         });
   }, [slug]);
   return (
      <div>
         {isLoading ? (
            <CustomLoader />
         ) : (
            <>
               <CourseIntro course={course} />
               {/* <CourseInfo course={course} /> */}
               <CourseSections
                  course={{ id: course.id, title: course.title }}
               />
               <RelatedCourses course={{ id: course.id }} />
            </>
         )}
      </div>
   );
}

export default Course;
