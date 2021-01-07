import React, { useEffect, useState } from "react"
import { useQueryParams, NumberParam, withDefault } from "use-query-params"
import { Helmet } from "react-helmet"

import "./courses.style.scss"

import CourseCard from "../../components/course-card/course-card.component"

import API, { request } from "../../helpers/api"

import { Link, useParams } from "react-router-dom"
import CustomLoader from "../../components/custom-loader/custom-loader.component"
import Title from "../../components/title/title.component"
import { objectToSchema } from "../../helpers/functions"
import CourseCategoryButton from "../../components/course-category-button/course-category-button.component"
import { toast } from "react-toastify"

function Courses(props) {
  let { category } = useParams()
  const [courses, setCourses] = useState([])
  const [categories, setCategories] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const [categoryLoading, setCategoryLoading] = useState(true)
  const [categoryObject, setCategoryObject] = useState(false)

  const [query, setQuery] = useQueryParams({
    page: withDefault(NumberParam, 1),
  })
  const { page } = query

  useEffect(() => {
    API.get("/category/course_main")
      .then((resp) => {
        setCategories(resp.data.categories)
        setCategoryLoading(false)
        setIsLoading(true)
        if (category) {
          return API.get(`/course/category/${category}?page=${page}`)
        } else {
          return API.get(`/course?page=${page}`)
        }
      })
      .then((resp) => {
        setCourses(resp.data.courses)
        setCategoryObject(resp.data.category)
        setIsLoading(false)
      })
      .catch((err) => {
        if (err.response) {
          toast.error(err.response.data.message)
        } else {
          toast.error("مشکلی در ارتباط با سرور پیش آمده است")
        }
      })
    // request(`/course?page=${page}`, (resp) => {
    //     setCourses(resp.data.courses);
    //    setIsLoading(false);
    // });
  }, [query, page, category])
  return (
    <div className="container mx-auto">
      {!category ? (
        <div className="mx-auto text-center my-4">
          <Title mainTitle={true}>دوره‌های کپسولی لینوم</Title>
        </div>
      ) : null}
      {!categoryLoading ? (
        <>
          {!categoryObject ? (
            <script
              key={`coursesJSON`}
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
                    ],
                  })
                ),
              }}
            />
          ) : (
            <>
              <div className="mx-auto text-center my-4">
                <Title mainTitle={true}>
                  دوره‌های کپسولی {categoryObject.title}
                </Title>
              </div>
              <script
                key={`coursesJSON`}
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
                            "@id": `${process.env.REACT_APP_URL}/courses/${categoryObject.slug}`,
                            name: categoryObject.title,
                            description: `دوره‌های آموزشی کپسولی شده در دسته‌ی ${categoryObject.title}`,
                          },
                        },
                      ],
                    })
                  ),
                }}
              />
            </>
          )}
          <Helmet>
            {!categoryObject ? (
              <title>دوره‌های آموزشی فشرده و کپسولی | لینوم</title>
            ) : (
              <title>{categoryObject.title} - دوره‌های آموزشی فشرده | لینوم</title>
            )}
            <link
              rel="canonical"
              href={
                !categoryObject
                  ? `${process.env.REACT_APP_URL}/courses`
                  : `${process.env.REACT_APP_URL}/courses/${categoryObject.slug}`
              }
            />
            <meta
              name="description"
              content="یادگیری دروس دانشگاهی و مهارت‌های کاربردی با متد آموزشی میکرولرنینگ، در سریع‌ترین زمان ممکن"
            />
            <meta
              name="keywords"
              content="اولین پلتفرم آموزشی میکرولرنینگ,سامانه یادگیری لینوم,آموزش فشرده به سبک میکرولرنینگ,یادگیری خرد,آموزش های شب امتحانی لینوم,کپسول های آموزشی لینوم,شب امتحان لینوم,دوره های آموزشی میکرو,آموزش‌‌های فنی,دوره‌های فنی و مهندسی,دوره‌های علوم وپزشکی,دوره‌های نرم‌افزاری7دوره‌های فشرده آموزشی,دوره‌های فشرده نرم‌افزاری"
            />
            <meta name="twitter:card" content="summary" />
            <meta
              name="twitter:title"
              content={
                !categoryObject
                  ? `دوره‌های آموزشی فشرده و کپسولی | لینوم`
                  : `${categoryObject.title} - دوره‌های آموزشی فشرده | لینوم`
              }
            />
            <meta
              name="twitter:description"
              content="یادگیری دروس دانشگاهی و مهارت‌های کاربردی با متد آموزشی میکرولرنینگ، در سریع‌ترین زمان ممکن"
            />
            <meta
              property="twitter:image"
              content={
                !categoryObject
                  ? `${process.env.REACT_APP_API_DOMAIN}/logo.png`
                  : `${process.env.REACT_APP_API_DOMAIN}/assets/img/${category.icon}`
              }
            />

            <meta
              property="og:title"
              content={
                !categoryObject
                  ? `دوره‌های آموزشی فشرده و کپسولی | لینوم`
                  : `${categoryObject.title} - دوره‌های آموزشی فشرده | لینوم`
              }
            />
            <meta property="og:type" content="website" />
            <meta
              property="og:url"
              content={
                !categoryObject
                  ? `${process.env.REACT_APP_URL}/courses`
                  : `${process.env.REACT_APP_URL}/courses/${categoryObject.slug}`
              }
            />
            <meta
              property="og:image"
              content={
                !categoryObject
                  ? `${process.env.REACT_APP_API_DOMAIN}/logo.png`
                  : `${process.env.REACT_APP_API_DOMAIN}/assets/img/${category.icon}`
              }
            />
            <meta
              property="og:description"
              content="یادگیری دروس دانشگاهی و مهارت‌های کاربردی با متد آموزشی میکرولرنینگ، در سریع‌ترین زمان ممکن"
            />
            <meta property="og:site_name" content="لینوم" />
          </Helmet>
          {!category ? (
            <div className="my-10 flex lg:flex-row flex-col justify-center flex-wrap items-center">
              {categories.map((category) => (
                <CourseCategoryButton category={category} />
              ))}
            </div>
          ) : null}
        </>
      ) : null}
      {!isLoading ? (
        <div>
          <div className="flex flex-row flex-wrap mt-5 justify-center">
            {courses.data.map((course, index) => (
              <div className="mx-4 mt-4" key={index}>
                <CourseCard course={course} />
              </div>
            ))}
          </div>
          {courses.prev_page_url || courses.next_page_url ? (
            <ul className="pagination mx-auto flex flex-row justify-center mt-6">
              {courses.prev_page_url && (
                <li className="py-2 px-4 bg-white border border-orange-500 mx-1 rounded">
                  <Link to={`?page=${courses.current_page - 1}`}>قبلی</Link>
                </li>
              )}
              {}
              <li className="py-2 px-4 border-2 border-orange-500 bg-orange-500 font-bold text-white mx-1 rounded">
                {courses.current_page}
              </li>
              {courses.next_page_url && (
                <li className="py-2 px-4 bg-white border border-orange-500 mx-1 rounded">
                  <Link to={`?page=${courses.current_page + 1}`}>بعدی</Link>
                </li>
              )}
            </ul>
          ) : null}
        </div>
      ) : (
        <CustomLoader />
      )}
    </div>
  )
}

export default Courses
