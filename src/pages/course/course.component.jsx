import React from "react";

import CourseIntro from "../../components/course-intro/course-intro.component";
import CourseInfo from "../../components/course-info/course-info.component";
import CourseSections from "../../components/course-sections/course-sections.component";
import RelatedCourses from "../../components/related-courses/related-courses.component";

function Course(props) {
    return (
        <div>
            <CourseIntro />
            <CourseInfo />
            <CourseSections />
            <RelatedCourses />
        </div>
    );
}

export default Course;
