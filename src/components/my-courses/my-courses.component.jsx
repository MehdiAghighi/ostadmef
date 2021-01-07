import React from "react"
import { useState } from "react"
import { useEffect } from "react"
import CustomLoader from "../custom-loader/custom-loader.component"
import { request } from "../../helpers/api"
import { ArrowLeft } from "../icon/icon.component"
import { Link } from "react-router-dom"

function MyCourses() {
  const [courses, setCourses] = useState([])
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    request("/course/admin/bought", (resp) => {
      setCourses(resp.data.courses)
      setIsLoading(false)
    })
  }, [])

  return (
    <div className="w-full">
      <div className="w-full">
        <span className="text-lg mb-4">دوره‌های من</span>
        {isLoading ? (
          <CustomLoader />
        ) : (
          <div className="w-full my-3 flex flex-col">
            {courses.map((course, index) => (
              <div className="border border-gray-500 my-2 py-2 px-3 rounded">
                <div className="grid grid-cols-5 gap-x-3">
                  <div>
                    <img src={course.pic.thumb_url} className="rounded" />
                  </div>
                  <div className="flex flex-col h-full justify-center ">
                    <span className="text-gray-600 lg:text-base text-xsm leading-8">تاریخ خرید</span>
                    <span className="text-gray-700 lg:text-lg text-xsm">25 آذر 99</span>
                  </div>
                  <div className="flex flex-col h-full justify-center col-span-2">
                    <span className="text-gray-600 lg:text-base text-xsm leading-8">
                      پیشرفت شما در دوره
                    </span>
                    <div className="w-full h-3 bg-gray-200">
                      <div
                        style={{ width: `${course.user_progress}%` }}
                        className="bg-green-400 h-full"
                      ></div>
                    </div>
                  </div>
                  <div className="flex flex-col h-full justify-center justify-self-end">
                    <div className="h-full xl:py-6 py-1 px-2 flex justify-center items-center">
                      <Link to={`/course/${course.slug}`}>
                        <div className="bg-gray-200 text-orange-500 lg:py-6 lg:px-6 py-3 px-3 rounded-lg">
                          <ArrowLeft className="lg:text-xl sm:text-lg text-base" />
                        </div>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}

export default MyCourses
