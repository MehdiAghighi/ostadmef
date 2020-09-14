import React from "react"
import { ArrowLeft, Code } from "../icon/icon.component"

import "./course-category-button.style.scss"
import { Link } from "react-router-dom"

function CourseCategoryButton({ category }) {
  return (
    <Link to={`/courses/${category.slug}`}>
      <div className="course-category-button mx-1 my-1">
        <div
          className={`flex rounded-lg border-2 border-${category.color}-200 flex-row justify-around items-center parent overflow-hidden`}
          style={{ width: 350, height: 160 }}
        >
          <div class="bg-white text-center border rounded-full relative">
            <div className="absolute w-full h-full text-center rounded-full py-2 px-2">
              <div
                className={`rounded-full bg-${category.color}-400 w-full h-full overlay`}
              ></div>
            </div>
            <div
              className={`relative z-10 rounded-full px-1 py-1 border-2 border-${category.color}-400 border-change`}
            >
              <div
                className={`bg-${category.color}-400 text-center py-6 px-6 rounded-full bg-change-${category.color}`}
              >
                <img
                  width="60"
                  height="60"
                  src={`${process.env.REACT_APP_API_DOMAIN}/assets/img/${category.icon}`}
                  class="attachment-71x76 size-71x76"
                  alt=""
                  loading="lazy"
                  sizes="(max-width: 71px) 100vw, 71px"
                />
              </div>
            </div>
          </div>
          <div class="sc_studi_cats_info text-center relative z-10">
            <p className="my-2" style={{ fontSIze: 20 }}>
              {category.title}
            </p>
            <p style={{ fontSIze: 14 }}>[{category.main_course_count} دوره]</p>
          </div>
        </div>
      </div>
    </Link>
  )
}

export default CourseCategoryButton
