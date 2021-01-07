import React, { useState, useRef } from "react"
import Collapse from "@kunukn/react-collapse"

import "./video-topic.style.scss"
import {
  Lock,
  Unlock,
  KeyboardArrowDown,
  KeyboardArrowUp,
  Clock,
  Checkmark,
  EmojiFlirt,
  EmojiSad,
  EmojiHappy,
} from "../icon/icon.component"
import VideoLockStatus from "../video-lock-status/video-lock-status.component"
import CondLink from "../cond-link/cond-link.component"
import { useEffect } from "react"

function VideoTopic({ topic, lock, active, bought, admin }) {
  const [topicBased, setTopicBased] = useState(false)
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    if (topic.order == 1) {
      setIsOpen(true)
    }
    topic.videos.map((video, index) => {
      if (active === video.id) {
        setIsOpen(true)
      }
    })
    // setIsOpen(active === topic.)
  }, [topic.id, topic.videos, topic.order])

  return (
    <>
      <div
        className={`w-full bg-white rounded-lg py-2 px-4 text-xl my-1 border cursor-pointer ${
          lock ? "border-red-600" : "border-green-600"
        }`}
        onClick={() => setIsOpen((state) => !isOpen)}
      >
        <div className="w-full flex flex-row justify-between items-center">
          <div className="flex flex-row items-center">
            <VideoLockStatus lock={lock} />
            <span className="sm:text-xl text-lg">
              <span className="font-bold">{topic.prefix}:</span> {topic.title}{" "}
              {topic.is_free ? (
                <span className="text-teal-500 text-sm font-bold mx-1">
                  (رایگان)
                </span>
              ) : null}
            </span>
          </div>
          <div>
            {!isOpen ? (
              <KeyboardArrowDown
                className={`text-xl font-light ${
                  lock ? "text-red-600" : "text-green-600"
                }`}
              />
            ) : (
              <KeyboardArrowUp
                className={`text-xl font-light ${
                  lock ? "text-red-600" : "text-green-600"
                }`}
                onClick={() => setIsOpen((state) => !isOpen)}
              />
            )}
          </div>
        </div>
      </div>
      <Collapse isOpen={isOpen}>
        <div className="sm:pr-8 pr-4 my-2 flex flex-row w-full">
          <div className="flex flex-col border-r-2 border-gray-400 sm:pr-4 pr-3 w-full">
            {topic.videos.map((video, index) => (
              <div className="py-2 px-1 flex flex-row items-center justify-between topic-section w-full">
                <div className="flex flex-row items-center">
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
                        !bought && topic.is_free == false && !admin
                          ? "border-red-600"
                          : "border-green-600"
                      } flex justify-center items-center rounded-full font-bold`}
                      style={{
                        width: 45,
                        height: 45,
                        fontSize: "1.1em",
                        paddingTop: 3,
                      }}
                    >
                      {!video.is_finished ? (
                        video.order
                      ) : (
                        <Checkmark className="text-green-500 text-xs" />
                      )}
                      {/* {video.order} */}
                    </div>
                  </div>
                  <CondLink
                    isLink={bought || topic.is_free == true || admin}
                    to={`/video/${video.id}`}
                    className="sm:mr-4 mr-1"
                  >
                    <span
                      className={`text-base sm:text-lg ${
                        !lock ? "hover:mr-6 hover:text-teal-700 " : ""
                      } ${
                        active === video.id ? "text-teal-700 " : ""
                      }transition-all duration-150`}
                    >
                      {video.title}
                    </span>
                  </CondLink>
                </div>
                <div className="mr-1 flex flex-row items-center">
                  <div className="flex sm:flex-row flex-col-reverse items-end sm:items-center ml-6">
                    {video.quiz ? (
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
                                className="w-6 bg-gray-500 rounded mx-2 inline-block"
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
            ))}
          </div>
        </div>
      </Collapse>
    </>
  )
}

export default VideoTopic
