import React from "react"
import { Clock } from "../icon/icon.component"
import Button from "../button/button.component"
import HDivider from "../h-divider/h-divider.component"

function CourseInfo({ course }) {
  return (
    <div className="container mx-auto">
      <div className="bg-gray-200 rounded-lg lg:px-8 px-4 py-3 flex md:flex-row flex-col justify-between items-center">
        <div className="flex sm:flex-row flex-col flex-wrap justify-start items-center h-full justify-center items-center">
          <span className="text-lg leading-10">{course.title}</span>
          <HDivider />
          <span className="font-bold leading-10">
            {course.user.first_name} {course.user.last_name}
          </span>
          <HDivider />
          <span className="font-bold leading-10">
            <Clock className="text-xs ml-1" />
            {course.hour_length} ساعت
          </span>
          <HDivider />
          <span className="font-bold text-lg leading-10 text-green-500">
            {course.price} تومان
          </span>
        </div>
        <Button
          btnBgClass="bg-teal-500"
          bgnTextClass="text-white"
          className="leading-8 py-2 px-5 lg:mx-0 mx-auto"
          arrow
          // onClick={() => setBuyModalOpen(true)}
        >
          شرکت در دوره
        </Button>
      </div>
    </div>
  )
}

export default CourseInfo
