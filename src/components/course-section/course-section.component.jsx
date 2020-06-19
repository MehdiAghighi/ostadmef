import React from "react"
import { Clock } from "../icon/icon.component"
import { Link } from "react-router-dom"
import CondLink from "../cond-link/cond-link.component"

function CourseSection({ video, title, active, lock }) {
  return (
    <div className="flex flex-row justify-between items-center py-2 px-2 border-b border-gray-400">
      <CondLink isLink={!lock} to={`/video/${video.id}`}>
        <span
          className={`text-lg font-bold ${!lock && "cursor-pointer"} ${
            active ? "text-orange-500" : ""
          } transition-all duration-100 ${!lock && "hover:text-orange-500"}`}
        >
          {video.order}. {title}: {video.title}{" "}
          {video.order == 1 && (
            <span className="font-bold text-xs text-teal-600">(رایگان)</span>
          )}
        </span>
      </CondLink>
      <span className="text-gray-600 flex flex-row">
        {video.human_length}
        <Clock className="text-xs mr-3" />
      </span>
    </div>
  )
}

CourseSection.defaultProps = {
  active: false,
}

export default CourseSection
