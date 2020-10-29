import React, { useState } from "react"
import Collapse from "@kunukn/react-collapse"

import "./video-topic.style.scss"
import {
  Lock,
  Unlock,
  KeyboardArrowDown,
  KeyboardArrowUp,
  Clock,
} from "../icon/icon.component"
import VideoLockStatus from "../video-lock-status/video-lock-status.component"
import CondLink from "../cond-link/cond-link.component"
import { useEffect } from "react"

function VideoTopic({ topic, lock, active }) {
  const [topicBased, setTopicBased] = useState(false)
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    topic.videos.map((video ,index) => {
      if (active === video.id) {
        setIsOpen(true)
      }
    })
    // setIsOpen(active === topic.)
  }, [ topic.id, topic.videos ])

  return (
    <>
      <div
        className={`w-full bg-white rounded-lg py-2 px-4 text-xl my-1 border ${
          lock ? "border-red-600" : "border-green-600"
        }`}
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
                onClick={() => setIsOpen((state) => !isOpen)}
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
                    className={`border-2 ${
                      lock ? "border-red-600" : "border-green-600"
                    } flex justify-center items-center rounded-full font-bold`}
                    style={{
                      width: 45,
                      height: 45,
                      boxPack: "center",
                      fontSize: "1.1em",
                      paddingTop: 3,
                    }}
                  >
                    {video.order}
                  </div>
                  <CondLink
                    isLink={!lock}
                    to={`/video/${video.id}`}
                    className="sm:mr-4 mr-2"
                  >
                    <span
                      className={`text-base sm:text-lg ${
                        !lock ? "hover:mr-6 hover:text-teal-700 " : ""
                      } ${active === video.id ? "text-teal-700 " : ""}transition-all duration-150`}
                    >
                      {video.title}
                    </span>
                  </CondLink>
                </div>
                <div className="mr-1 flex flex-row items-center">
                  <span className="text-gray-600 sm:text-lg">{video.human_length}</span>
                  <span className="text-xs sm:text-sm text-gray-600 mr-1 sm:mr-2">
                    <Clock />
                  </span>{" "}
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
