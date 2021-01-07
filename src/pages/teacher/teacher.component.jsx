import React, { useState } from "react"
import { useParams } from "react-router-dom"
import { useEffect } from "react"
import API from "../../helpers/api"
import CustomLoader from "../../components/custom-loader/custom-loader.component"
import TeacherImg from "../../assets/images/teacher.jpg"
import { Checkmark } from "../../components/icon/icon.component"
import Title from "../../components/title/title.component"
import CourseCard from "../../components/course-card/course-card.component"
import { nl2br } from "../../helpers/functions"

function Teacher(props) {
  const { slug } = useParams()

  const [isLoading, setIsLoading] = useState(true)
  const [teacher, setTeacher] = useState({})
  const [data, setData] = useState({})

  useEffect(() => {
    setIsLoading(true)
    API.get(`/teacher/page/${slug}`).then((resp) => {
      setTeacher(resp.data.teacher)
      setData(resp.data)
      setIsLoading(false)
    })
  }, [slug])

  return (
    <div>
      {isLoading ? (
        <CustomLoader />
      ) : (
        <div className="flex flex-col">
          <div className="container mx-auto mt-16">
            <div className="flex lg:flex-row flex-col-reverse items-center">
              <div className="lg:w-7/12 w-full mt-12 lg:mt-0">
                <div className="flex flex-col">
                  <h2 className="xs:text-3xl text-xl font-bold text-blue-800 px-2">
                    {teacher.first_name} {teacher.last_name}
                  </h2>
                  <div>
                    <p className="leading-10 my-4 text-justify px-2">
                      {data.metas.teacher_about ? (
                        nl2br(data.metas.teacher_about.value)
                      ) : (
                        <span className="text-red-600">
                          متاسفانه اطلاعاتی موجود نیست
                        </span>
                      )}
                    </p>
                  </div>
                </div>
              </div>
              <div className="lg:w-5/12 w-full">
                <div className="px-4 w-full text-center">
                  <img
                    src={data.picture_url ? data.picture_url : TeacherImg}
                    className="mx-auto rounded-lg"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="bg-site-brown mt-12">
            <div className="container mx-auto">
              <div className="my-2">
                <Title>خلاصه فعالیت‌ها و تجربیات آکادمیک</Title>
              </div>
              <div className="flex flex-col px-3 py-2">
                {teacher.features ? (
                  teacher.features.map((feature, index) => (
                    <div className="my-4 text-lg text-blue-900">
                      <span className="text-green-500 text-xl ml-4">
                        <Checkmark />
                      </span>{" "}
                      <span
                        dangerouslySetInnerHTML={{ __html: nl2br(feature.content) }}
                      >
                      </span>
                    </div>
                  ))
                ) : (
                  <span>اطلاعاتی در دسترس نیست</span>
                )}
              </div>
            </div>
          </div>
          <div className="my-4">
            <div className="container mx-auto">
              <div className="">
                <div className="flex flex-row justify-between items-center mt-5">
                  <Title>دوره‌های این مدرس</Title>
                </div>
              </div>
              <div className="my-4 mt-8">
                <div className="flex lg:flex-row flex-col lg:justify-around justify-center items-center">
                  {teacher.courses.map((course, index) => (
                    <div key={index}>
                      <CourseCard course={course} lazy={false} />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default Teacher
