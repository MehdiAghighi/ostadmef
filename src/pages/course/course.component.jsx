import React, { useState, useEffect } from "react"
import { useParams, useHistory } from "react-router-dom"
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
import RelatedPosts from "../../components/related-posts/related-posts.component"
import CourseRatingsStars from "../../components/course-ratings-stars/course-ratings-stars.component"
import RateCourse from "../../components/rate-course/rate-course.component"
import CourseRates from "../../components/course-rates/course-rates.component"

import SupportImg from "../../assets/images/support.jpg"
import CashbackImg from "../../assets/images/cashback.jpg"
import { useAuthState } from "../../contexts/auth-context"

function Course(props) {
  let { slug } = useParams()
  const [course, setCourse] = useState({})
  const [bought, setBought] = useState(false)
  const [description, setDescription] = useState("")
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState(0)
  const [keywords, setKeyWords] = useState([])

  const { isLoggedIn } = useAuthState()
  const history = useHistory()

  const goToInvite = () => {
    if (isLoggedIn) {
      history.push("/profile/campaign")
    } else {
      toast.error("شما وارد نشده‌اید.")
    }
  }

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
        window.dataLayer = window.dataLayer || [];  
        window.dataLayer.push({ ecommerce: null });
        window.dataLayer.push({
          'ecommerce': {
            'impressions': [{
              'name': course.title,
              'id': course.id,
              'price': course.price,
              'brand': "Linom",
              'category': course.main_category.title
            }]
          }
        });
        window.dataLayer.push({event: 'productImpression'});
        window.dataLayer.push({ ecommerce: null });
        window.dataLayer.push({
          'ecommerce': {
            'detail': {
              'products': [{
                'name': course.title,
                'id': course.id,
                'price': course.price,
                'brand': "Linom",
                'category': course.main_category.title
              }]
            }
           }
        });
        window.dataLayer.push({event: 'productDetailView'});
        window.dataLayer.push({ ecommerce: null });
        window.dataLayer.push({
          'event': 'checkout',
          'ecommerce': {
            'checkout': {
              'actionField': {'step': 2},
              'products': [{
                'name': course.title,
                'id': course.id,
                'price': course.price,
                'brand': "Linom",
                'category': course.main_category.title
              }]
            }
          }
        });
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
            <meta name="description" value={course.short_description} />
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
          {/* Ratings */}
          <RelatedCourses course={{ id: course.slug }} />
          <div className="container mx-auto">
            <div className="my-2 flex md:flex-row flex-col justify-center items-center">
              <img
                src={SupportImg}
                className="sm:w-1/2 w-full xl:mx-3 mx-1 md:my-0 my-1 rounded-lg shadow-md cursor-pointer"
                onClick={() => window.Raychat ? window.Raychat.open() : null}
              />
              <img
                src={CashbackImg}
                className="sm:w-1/2 w-full xl:mx-3 mx-1 md:my-0 my-1 rounded-lg shadow-md cursor-pointer"
                onClick={goToInvite}
              />
            </div>
          </div>
          <CourseRatingsStars course={{ id: course.slug }} />
          {bought ? <RateCourse course={{ id: course.slug }} /> : null}
          <CourseRates course={{ id: course.slug }} />

          {/* <RelatedPosts course={{ id: course.slug }} /> */}
        </>
      ) : (
        <NotFound />
      )}
    </div>
  )
}

export default Course
