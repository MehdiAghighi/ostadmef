import React from "react"
import Card from "../card/card.component"
import CardImage from "../card/card-image/card-image.component"
import CardTitle from "../card/card-title/card-title.component"
import CardBody from "../card/card-body/card-body.component"
import CardFooter from "../card/card-footer/card-footer.component"
import { ArrowLeft, Clock } from "../icon/icon.component"

function CourseCard({ course }) {
  return (
    <div className="card">
      <Card>
        <CardImage to={`/course/${course.slug}`}>
          <img src={`${course.pic.card_url}`} alt={course.title} className="" />
        </CardImage>
        <CardTitle to={`/course/${course.slug}`}>{course.title}</CardTitle>
        <CardBody>
          <div className="flex flex-row items-center mx-auto text-center justify-center">
            <span>
              {course.user.first_name} {course.user.last_name}
            </span>
            <div
              className="h-6 bg-gray-400 mx-3"
              style={{
                width: 2,
              }}
            ></div>
            <span className="text-gray-600">
              {course.hour_length} ساعت &nbsp;
              <Clock className="text-gray-600 text-xs" />
            </span>
          </div>
        </CardBody>
        <CardFooter>
          <div className="flex flex-row justify-between items-center">
            <span className="text-xl text-green-500 leading-tight">
              {course.price} تومان
            </span>
            <ArrowLeft
              to={`/course/${course.slug}`}
              className="text-xs font-light text-orange-500"
            />
          </div>
        </CardFooter>
      </Card>
    </div>
  )
}

export default CourseCard
