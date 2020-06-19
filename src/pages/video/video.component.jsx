import React, { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { Helmet } from "react-helmet"

import API, { request } from "../../helpers/api"
import CustomLoader from "../../components/custom-loader/custom-loader.component"
import CourseSections from "../../components/course-sections/course-sections.component"
import ShowVideo from "../../components/show-video/show-video.component"
import { toast } from "react-toastify"

function Video(props) {
  const { slug } = useParams()
  const [video, setVideo] = useState({})
  const [course, setCourse] = useState({})
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    API.get(`/video/admin/${slug}`)
      .then((resp) => {
        return resp.data
      })
      .then((video) => {
        setVideo(video)
        setIsLoading(false)
      })
      .catch((err) => {
        if (err.response) {
          toast.error(err.response.data.message)
          setIsLoading(false)
        } else {
          toast.error("مشکلی در ارتباط با سرور پیش آمده است")
        }
      })
  }, [slug])
  return isLoading ? (
    <CustomLoader />
  ) : video.player_url ? (
    video.video.course.id ? (
      <div className="">
        <Helmet>
          <title>لینوم | {video.video.title}</title>
        </Helmet>
        <div className="container mx-auto">
          {!video.video.video ? (
            <h2>شما این دوره را خریداری نکرده‌اید</h2>
          ) : (
            <ShowVideo video={video.player_url} />
          )}
        </div>
        <CourseSections course={video.video.course} activeId={video.video.id} />
      </div>
    ) : null
  ) : (
    <div className="flex flex-row justify-center">
      <span className="text-xl text-red-500">شما به این ویدیو دسترسی ندارید</span>
    </div>
  )
}

export default Video
