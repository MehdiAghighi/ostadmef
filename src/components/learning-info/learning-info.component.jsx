import React from "react"
import { useState } from "react"
import { useEffect } from "react"
import { request } from "../../helpers/api"

import CustomLoader from "../custom-loader/custom-loader.component"

function LearningInfo(props) {
  const [info, setInfo] = useState({})
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    setIsLoading(true)
    request(`/user/profile/learn-data`, (res) => {
      setInfo(res.data.info)
      setIsLoading(false)
    })
  }, [setIsLoading, setInfo])

  return (
    <div className="w-full">
      <span className="text-green-500 text-lg mb-4">اطلاعات آموزشی</span>
      <div className="w-full rounded border-2 border-green-500 px-2 py-2">
        {isLoading ? (
          <CustomLoader />
        ) : (
          <div className="flex sm:flex-row flex-col-reverse w-full">
            <div className="flex flex-col sm:w-8/12 w-full">
              <div className="flex flex-row border-b border-green-300 my-2">
                <div className="w-1/2">
                  <div className="flex flex-col leading-7">
                    <span className="text-gray-600 lg:text-base text-xsm">
                      آخرین دوره‌ی خریداری شده
                    </span>
                    <span className="text-green-500 lg:text-base text-xsm">
                      {info.last_course ? info.last_course.title : "..."}
                    </span>
                  </div>
                </div>
                <div className="w-1/2">
                  <div className="flex flex-col leading-7">
                    <span className="text-gray-600 lg:text-base text-xsm">
                      تاریخ آخرین خرید
                    </span>
                    <span className="text-green-500 lg:text-base text-xsm">
                      {info.last_course_date ? info.last_course_date : "..."}
                    </span>
                  </div>
                </div>
              </div>

              <div className="flex flex-row border-b border-green-300 my-2 w-full">
                <div className="w-1/2">
                  <div className="flex flex-col leading-7">
                    <span className="text-gray-600 lg:text-base text-xsm">
                      تعداد دوره‌های خریداری شده
                    </span>
                    <span className="text-green-500 lg:text-base text-xsm">
                      {info.courses_count} دوره
                    </span>
                  </div>
                </div>
                <div className="w-1/2">
                  <div className="flex flex-col leading-7">
                    <span className="text-gray-600 lg:text-base text-xsm">
                      تعداد دوره‌های تکمیل شده
                    </span>
                    <span className="text-green-500 lg:text-base text-xsm">
                      {info.courses_finished} دوره
                    </span>
                  </div>
                </div>
              </div>

              <div className="flex flex-row border-green-300 my-2 w-full">
                <div className="w-1/2">
                  <div className="flex flex-col leading-7">
                    <span className="text-gray-600 lg:text-base text-xsm">
                      میانگین نمرات کوییز
                    </span>
                    <span className="text-green-500 lg:text-base text-xsm">
                      {info.quiz_average}%
                    </span>
                  </div>
                </div>
                <div className="w-1/2">
                  <div className="flex flex-col leading-7">
                    <span className="text-gray-600 lg:text-base text-xsm">
                      تعداد پرسش‌های ثبت شده
                    </span>
                    <span className="text-green-500 lg:text-base text-xsm">
                      {info.questions_count} سوال
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <div className="xl:py-5 lg:py-3 lg:px-4 px-1 sm:w-4/12 w-full flex justify-center">
              <div className="rounded bg-green-100 py-4 lg:px-4 px-2 flex flex-col justify-between sm:w-auto w-full text-center">
                <div className="w-full font-bold flex justify-around text-green-900 text-3xl lg:mt-0 sm:mt-4 mt-0">
                  <div
                    className={`lg:h-32 lg:w-32 w-24 h-24 text-center mx-auto flex flex-col justify-center items-center my-2 ${
                      info.courses_progress >= 50 ? "circle-100" : "circle-50"
                    } border-8`}
                    style={{
                      "--v":
                        info.courses_progress >= 50
                          ? `${(18 / 5) * info.courses_progress - 270}deg`
                          : `${(18 / 5) * info.courses_progress - 90}deg`,
                    }}
                  >
                    <span className="text-gray-700 text-3xl">
                      {info.courses_progress}
                    </span>
                  </div>
                </div>
                <span className="text-gray-600 lg:text-lg text-base">
                  میزان تکمیل دوره‌ها
                </span>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default LearningInfo
