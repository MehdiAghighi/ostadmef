import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import CourseIntro from "../../components/course-intro/course-intro.component";
import CourseInfo from "../../components/course-info/course-info.component";
import CourseSections from "../../components/course-sections/course-sections.component";
import RelatedCourses from "../../components/related-courses/related-courses.component";
import API from "../../helpers/api";

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
            .catch((err) => console.log(err));
    }, [slug]);
    return (
        <div>
            {isLoading ? null : (
                <>
                    <CourseIntro course={course} />
                    <CourseInfo course={course} />
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
