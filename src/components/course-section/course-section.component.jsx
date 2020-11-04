import React from "react"
import { Clock, Lock, Unlock, Checkmark } from "../icon/icon.component"
import { Link } from "react-router-dom"
import CondLink from "../cond-link/cond-link.component"
import VideoLockStatus from "../video-lock-status/video-lock-status.component"

function CourseSection({ video, title, active, lock }) {
  return (
    <div className="flex flex-row justify-between items-center py-2 px-2 border-b border-gray-400">
      <CondLink
        isLink={!lock}
        to={`/video/${video.id}`}
        className="flex flex-row items-center"
      >
        <div
          className={`${
            video.is_finished
              ? "circle-100"
              : video.progresses.length > 0
              ? video.progresses[0].percentage >= 50
                ? "circle-100"
                : "circle-50"
              : "circle-none"
          } ml-3`}
          style={{
            "--v": `${
              video.is_finished
                ? "90deg"
                : video.progresses.length > 0
                ? video.progresses[0].percentage >= 50
                  ? `${(18 / 5) * video.progresses[0].percentage - 90}deg`
                  : `${(18 / 5) * video.progresses[0].percentage - 270}deg`
                : ""
            }`,
          }}
        >
          <div
            className={`border-2 ${
              lock ? "bg-red-700" : video.is_finished ? "border-green-700" : "bg-green-700" 
            } py-3 px-3 rounded-full text-white text-xs border border-gray-400`}
          >
            {lock ? (
              <Lock />
            ) : video.is_finished ? (
              <Checkmark className="text-green-700 text-xs" />
            ) : (
              <Unlock />
            )}
          </div>
        </div>
        <span
          className={`text-lg font-bold ${!lock && "cursor-pointer"} ${
            active ? "text-orange-500" : ""
          } transition-all duration-100 ${!lock && "hover:text-orange-500"} ${
            lock && "text-gray-600"
          }`}
        >
          {video.order}. کپسول {video.title}{" "}
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
