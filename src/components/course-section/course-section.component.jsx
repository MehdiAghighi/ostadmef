import React from "react"
import {
  Clock,
  Lock,
  Unlock,
  Checkmark,
  EmojiSad,
  EmojiFlirt,
  EmojiHappy,
} from "../icon/icon.component"
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
              : video.last_progress
              ? video.last_progress.percentage >= 50
                ? "circle-100"
                : "circle-50"
              : "circle-none"
          }`}
          style={{
            "--v": `${
              video.is_finished
                ? "90deg"
                : video.last_progress
                ? video.last_progress.percentage >= 50
                  ? `${(18 / 5) * video.last_progress.percentage - 270}deg`
                  : `${(18 / 5) * video.last_progress.percentage - 90}deg`
                : ""
            }`,
          }}
        >
          <div
            className={`border-2 ${
              lock ? "border-red-500" : video.is_finished ? "" : "border-green-500"
            } py-3 px-3 rounded-full text-gray-600 text-xs border-2`}
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
          className={`text-lg font-bold mr-3 ${!lock && "cursor-pointer"} ${
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
      <div className="mr-1 flex flex-row items-center">
        <div className="flex sm:flex-row flex-col-reverse items-end sm:items-center">
          {video.quiz ? (
            <>
              <div className="flex flex-row items-center">
                <span className="sm:font-bold sm:text-base text-sm flex flex-row items-center sm:my-0 my-2">
                  آزمونک:{" "}
                  {video.quiz ? (
                    video.quiz.results.length > 0 ? (
                      video.quiz.results[0].result.percentage < 50 ? (
                        <EmojiSad className="text-xs text-red-600 mx-1" />
                      ) : video.quiz.results[0].result.percentage >= 50 &&
                        video.quiz.results[0].result.percentage != 100 ? (
                        <EmojiFlirt className="text-xs text-blue-600 mx-1" />
                      ) : video.quiz.results[0].result.percentage == 100 ? (
                        <EmojiHappy className="text-xs text-green-600 mx-1" />
                      ) : null
                    ) : (
                      <div
                        className="w-6 bg-gray-500 rounded mx-1 inline-block"
                        style={{
                          height: 5,
                        }}
                      ></div>
                    )
                  ) : null}
                </span>
                <div
                  className="h-10 rounded mx-2 bg-gray-500 sm:block hidden"
                  style={{
                    width: 2,
                  }}
                ></div>
              </div>
            </>
          ) : null}
          <div className="flex flex-row items-center">
            <span
              className="text-gray-600 text-sm sm:text-base"
              style={{
                minWidth: "4rem",
              }}
            >
              {video.human_length}
            </span>
          </div>
          <span className="text-xs sm:text-sm text-gray-600 mr-1 sm:mr-2 sm:block hidden">
            <Clock />
          </span>{" "}
        </div>
      </div>
    </div>
  )
}

CourseSection.defaultProps = {
  active: false,
}

export default CourseSection
