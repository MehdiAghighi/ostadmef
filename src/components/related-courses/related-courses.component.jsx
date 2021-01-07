import React, { useState, useEffect } from "react"

import Title from "../title/title.component"
import RelatedCoursesSlider from "../related-courses-slider/related-courses-slider.component"
import { request } from "../../helpers/api"
import CustomLoader from "../custom-loader/custom-loader.component"
import CourseCard from "../course-card/course-card.component"

function RelatedCourses({ course }) {
  const [relatedCourses, setRelatedCourses] = useState([])
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    request(`/course/related/${course.id}`, (resp) => {
      setRelatedCourses(resp.data.courses)
      setIsLoading(false)
    })
  }, [course.id])
  return (
    <div>
      <div className="container mx-auto">
        <div className="">
          <div className="flex flex-row justify-between items-center mt-5">
            <Title>دوره‌های مرتبط</Title>
          </div>
        </div>
        <div className="my-4 mt-8">
          {isLoading ? (
            <CustomLoader />
          ) : (
            <div className="flex lg:flex-row flex-col lg:justify-around justify-center items-center">
              {relatedCourses.map((course, index) => (
                <div key={index} className="my-2">
                  <CourseCard course={course} lazy={false} />
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default RelatedCourses
