import React from "react";
import Title from "../title/title.component";
import CourseSection from "../course-section/course-section.component";

function CourseSections(props) {
    return (
        <div className="mt-8 bg-gray-200">
            <div className="container mx-auto py-5">
                <Title>سرفصل‌های دوره</Title>
                <div className="my-4">
                    <div className="flex flex-col">
                        <CourseSection />
                        <CourseSection />
                        <CourseSection />
                        <CourseSection />
                        <CourseSection />
                        <CourseSection />
                        <CourseSection />
                        <CourseSection />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CourseSections;
