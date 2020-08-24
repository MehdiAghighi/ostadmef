import React, { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import { Helmet } from "react-helmet"

import CourseIntro from "../../components/course-intro/course-intro.component"
// import CourseInfo from "../../components/course-info/course-info.component"
import CustomLoader from "../../components/custom-loader/custom-loader.component"
import CourseSections from "../../components/course-sections/course-sections.component"
import RelatedCourses from "../../components/related-courses/related-courses.component"
import NotFound from "../not-found/not-found.component"
import API from "../../helpers/api"
import { toast } from "react-toastify"
import { objectToSchema, stripHtml, nl2br } from "../../helpers/functions"

function Course(props) {
  let { slug } = useParams()
  const [course, setCourse] = useState({})
  const [bought, setBought] = useState(false)
  const [description, setDescription] = useState("")
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState(0)
  const [keywords, setKeyWords] = useState([])

  useEffect(() => {
    setIsLoading(true)
    API.get(`/course/${slug}`)
      .then((resp) => {
        return resp.data.course
      })
      .then((course) => {
        setCourse(course)
        setDescription(course.description)
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
          console.log(err.response)
          if (err.response.status == 404) {
            setError(404)
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
      ) : !error ? (
        <>
          <script
            key={`courseJSON-${course.title}`}
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify(
                objectToSchema({
                  "@context": "http://schema.org",
                  "@type": "BreadcrumbList",
                  itemListElement: [
                    {
                      "@type": "ListItem",
                      position: 1,
                      item: {
                        "@id": `${process.env.REACT_APP_URL}/`,
                        name: "لینوم",
                        description: "لینوم - پلتفرم آموزشی میکرولرنینگ",
                      },
                    },
                    {
                      "@type": "ListItem",
                      position: 2,
                      item: {
                        "@id": `${process.env.REACT_APP_URL}/courses`,
                        name: "دوره‌های آموزشی",
                        description: "دوره‌های آموزشی کپسولی شده",
                      },
                    },
                    {
                      "@type": "ListItem",
                      position: 3,
                      item: {
                        "@id": `${process.env.REACT_APP_URL}/course/${course.slug}`,
                        name: `${course.title}`,
                        description: `${description}`,
                      },
                    },
                  ],
                })
              ),
            }}
          />
          <script
            key={`courseJSONcourse`}
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify(
                objectToSchema({
                  "@context": "https://schema.org",
                  "@type": "Course",
                  name: course.title,
                  description: description,
                  provider: {
                    "@type": "Organization",
                    name: "لینوم - پلتفرم آموزشی میکرولرنینگ",
                    sameAs: process.env.REACT_APP_URL,
                  },
                })
              ),
            }}
          />
          <Helmet>
            <title>{course.title} - دوره‌های آموزشی | لینوم</title>
            <link
              rel="canonical"
              href={`${process.env.REACT_APP_URL}/course/${course.slug}`}
            />
            <meta name="keywords" value={keywords.toString()} />
            <meta name="description" value={description} />
            <meta name="twitter:card" content="summary" />
            <meta
              name="twitter:title"
              content={`${course.title} - دوره‌های آموزشی | لینوم`}
            />
            <meta
              name="twitter:description"
              content="مجله‌ی آموزشی لینوم با تکیه بر متد میکرولرنینگ تهیه‌شده‌است."
            />
            <meta name="twitter:image" content={`${course.pic.url}`} />

            <meta
              property="og:title"
              content={`${course.title} - دوره‌های آموزشی | لینوم`}
            />
            <meta property="og:type" content="course" />
            <meta
              property="og:url"
              content={`${process.env.REACT_APP_URL}/course/${course.slug}`}
            />
            <meta property="og:image" content={`${course.pic.url}`} />
            <meta property="og:description" content={description} />
          </Helmet>
          <CourseIntro course={course} bought={bought} />
          {/* <CourseInfo course={course} /> */}
          <CourseSections
            course={{ id: course.id, title: course.title }}
            bought={bought}
          />
          <RelatedCourses course={{ id: course.id }} />
        </>
      ) : (
        <NotFound />
      )}
    </div>
  )
}

export default Course
