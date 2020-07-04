import React, { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { Helmet } from "react-helmet"
import { toast } from "react-toastify"

import API from "../../helpers/api"
import CustomLoader from "../../components/custom-loader/custom-loader.component"
import CourseSections from "../../components/course-sections/course-sections.component"
import ShowVideo from "../../components/show-video/show-video.component"
import UserDataForm from "../../components/user-data-form/user-data-form.component"

function Video(props) {
  const { slug } = useParams()
  const [video, setVideo] = useState({})
  const [bought, setBought] = useState(false)
  const [shouldGetData, setShouldGetData] = useState(false)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    API.get(`/video/admin/${slug}`)
      .then((resp) => {
        return resp.data
      })
      .then((video) => {
        setVideo(video)
        const gotEmail = localStorage.getItem("GetEmail")
        if (!gotEmail && video.get_email) {
          setShouldGetData(true)
        }
        if (video.get_data) {
          setShouldGetData(true)
        }
        if (video.video.order != 1) {
          return API.get(`/course/admin/invoice/check/${video.video.course.id}`)
        } else {
          setIsLoading(false)
          return null
        }
      })
      .then((resp) => {
        if (resp) {
          setBought(resp.data.invoice)
          setIsLoading(false)
        }
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
  ) : !shouldGetData ? (
    video.player_url ? (
      video.video.course.id ? (
        <div className="">
          <Helmet>
            <title>لینوم | {video.video.title}</title>
            <meta
              name="description"
              content="لینوم یک پلتفرم آموزشی میکرولرنینگ است که با تکیه بر ویدئو های کپسولی و فشرده ، یادگیری دروس دانشگاهی را در سریع ترین زمان ممکن به ارمغان می آورد."
            />  
          </Helmet>
          <div className="container mx-auto">
            {!video.video.video ? (
              <h2>شما این دوره را خریداری نکرده‌اید</h2>
            ) : (
              <ShowVideo video={video.player_url} />
            )}
          </div>
          <CourseSections
            course={video.video.course}
            activeId={video.video.id}
            bought={bought}
          />
        </div>
      ) : null
    ) : (
      <div className="flex flex-row justify-center">
        <span className="text-xl text-red-500">شما به این ویدیو دسترسی ندارید</span>
      </div>
    )
  ) : (
    <UserDataForm justEmail={video.get_email} afterSubmit={setShouldGetData} />
  )
}

export default Video
