import React from "react"
import { Link } from "react-router-dom"

import LearningInfo from "../../../components/learning-info/learning-info.component"
import MyCourses from "../../../components/my-courses/my-courses.component"

function ProfileCourses() {
  return (
    <div>
      <div className="flex flex-col">
        <div className="">
          <div className="mb-3">
            <LearningInfo />
          </div>
          <div className="mb-3">
            <MyCourses />
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProfileCourses
