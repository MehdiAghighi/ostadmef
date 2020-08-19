import React from "react"

import "./course-title.style.scss"

function CourseTitle(props) {
  return (
    <div className="title-wrapper relative inline-flex">
      <div className="z-10 text-blue-800 relative">
        <h1
          className={`title text-blue-1000 text-2xl sm:text-2xl ${props.className}`}
        >
          {props.children}
        </h1>
      </div>
      <div
        className="title-through-line absolute h-6 w-full"
        style={{
          bottom: 5,
        }}
      ></div>
    </div>
  )
}

export default CourseTitle
