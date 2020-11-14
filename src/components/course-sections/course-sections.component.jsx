import React, { useState, useEffect } from "react"
import Collapse from "@kunukn/react-collapse"

import Title from "../title/title.component"
import CourseSection from "../course-section/course-section.component"
import { request } from "../../helpers/api"
import CustomLoader from "../custom-loader/custom-loader.component"
import { useAuthState } from "../../contexts/auth-context"

import VideoTopic from "../video-topic/video-topic.component"

function CourseSections({ course, bought, activeId }) {
  const [videos, setVideos] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const [topicBased, setTopicBased] = useState(false)
  const { user } = useAuthState()

  const value = false
  useEffect(() => {
    request(`/course/videos/${course.id}`, (resp) => {
      setTopicBased(resp.data.topicBased)
      setVideos(resp.data.videos)
      setIsLoading(false)
    })
  }, [course])
  return (
    <div className="mt-8">
      <div className="container mx-auto bg-gray-200 rounded-lg px-6 py-2">
        <Title>سرفصل‌های دوره</Title>
        <div className="my-4">
          {isLoading ? (
            <CustomLoader />
          ) : (
            <>
              {!topicBased ? (
                <div className="flex flex-col">
                  {videos.map((video, index) => (
                    <CourseSection
                      key={index}
                      active={activeId === video.id}
                      video={video}
                      title={course.title}
                      lock={video.order != 1 && !bought && user.role != 0}
                    />
                  ))}
                </div>
              ) : (
                <div className="flex flex-col">
                  {videos.map((topic, index) => (
                    <VideoTopic
                      active={activeId}
                      topic={topic}
                      key={index}
                      bought={bought}
                      lock={topic.is_free != true && !bought && user.role != 0}
                      admin={user.role == 0}
                    />
                  ))}
                </div>
              )}
            </>
          )}
        </div>
      </div>
    </div>
  )
}

CourseSections.defaultProps = {
  activeId: null,
}

export default CourseSections
