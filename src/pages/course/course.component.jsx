import React, { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import { Helmet } from "react-helmet"

import CourseIntro from "../../components/course-intro/course-intro.component"
// import CourseInfo from "../../components/course-info/course-info.component"
import CustomLoader from "../../components/custom-loader/custom-loader.component"
import CourseSections from "../../components/course-sections/course-sections.component"
import RelatedCourses from "../../components/related-courses/related-courses.component"
import request from "../../helpers/api"
import API from "../../helpers/api"
import { toast } from "react-toastify"

function Course(props) {
  let { slug } = useParams()
  const [course, setCourse] = useState({})
  const [bought, setBought] = useState(false)
  const [isLoading, setIsLoading] = useState(true)
  const [keywords, setKeyWords] = useState([])

  useEffect(() => {
    setIsLoading(true)
    API.get(`/course/${slug}`)
      .then((resp) => {
        return resp.data.course
      })
      .then((course) => {
        setCourse(course)
        if (course.keywords) {
          const keywordsArr = course.keywords
          const arr = []
          keywordsArr.map((item, index) => arr.push(item["title"]))
          setKeyWords(arr)
        }
        return API.get(`/course/admin/invoice/check/${course.id}`)
      })
      .then((resp) => {
        return resp.data.invoice
      })
      .then((invoice) => {
        setBought(invoice)
        setIsLoading(false)
      })
      .catch((err) => {
        if (err.response) {
          if (err.response.status == 401) {
            // toast.error("لطفا ابتدا وارد سایت شوید")
          } else {
            toast.error(err.response.data.message)
          }
          setIsLoading(false)
        } else {
          toast.error("مشکلی در ارتباط با سرور پیش آمده است")
        }
      })
  }, [slug])
  return (
    <div>
      {isLoading ? (
        <CustomLoader />
      ) : (
        <>
          <Helmet>
            <title>لینوم | {course.title}</title>
            <meta name="keywords" value={keywords.toString()} />
            <meta name="description" value={course.description.replace(/(<([^>]+)>)/ig," ").substr(0, 160)} />
          </Helmet>
          <CourseIntro course={course} bought={bought} />
          {/* <CourseInfo course={course} /> */}
          <CourseSections
            course={{ id: course.id, title: course.title }}
            bought={bought}
          />
          <RelatedCourses course={{ id: course.id }} />
        </>
      )}
    </div>
  )
}

export default Course
