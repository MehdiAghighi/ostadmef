import React from "react"
import Card from "../card/card.component"
import CardImage from "../card/card-image/card-image.component"
import CardTitle from "../card/card-title/card-title.component"
import CardBody from "../card/card-body/card-body.component"
import CardFooter from "../card/card-footer/card-footer.component"
import { ArrowLeft, Clock } from "../icon/icon.component"
import { LazyLoadImage } from "react-lazy-load-image-component"
import Loader from "react-loader-spinner"
import ImageLoader from "../image-loader/image-loader.component"
import { formatNumberWithCommas } from "../../helpers/functions"
import { useHistory } from "react-router-dom"

function CourseCard({ course, full, lazy }) {
  let history = useHistory();
  const handleGoToCoursePage = () => {
    window.dataLayer = window.dataLayer || [];  
    window.dataLayer.push({ ecommerce: null });
    window.dataLayer.push({
      'event': 'productClick',
      'ecommerce': {
        'click': {
          'products': [{
            'name': course.title,
            'id': course.id,
            'price': course.price,
            'brand': "Linom"
          }]
          }
        }
    });
    window.dataLayer.push({ ecommerce: null });
    window.dataLayer.push({
      'event': 'checkout',
      'ecommerce': {
        'checkout': {
          'actionField': {'step': 1},
          'products': [{
            'name': course.title,
            'id': course.id,
            'price': course.price,
            'brand': "Linom"
          }]
        }
      }
    });
    if(window.location.pathname !== `/course/${course.slug}`)
      history.push(`/course/${course.slug}`)
  };

  return (
    <div className="card" onClick={handleGoToCoursePage}>
      <Card>
        <CardImage to={`/course/${course.slug}`}>
          {lazy ? (
            <LazyLoadImage
              threshold={30}
              placeholder={
                <ImageLoader width={full ? 585 : 278} height={full ? 400 : 278} />
              }
              src={`${course.pic.card_url}`}
              alt={course.title}
              style={full ? { width: 600, height: 400, objectFit: "cover" } : {}}
              className="transform hover:scale-110 transition-all duration-100"
            />
          ) : (
            <img
              src={`${course.pic.card_url}`}
              alt={course.title}
              style={full ? { width: 600, height: 400, objectFit: "cover" } : {}}
              className="transform hover:scale-110 transition-all duration-100"
            />
          )}
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
              {formatNumberWithCommas(course.price)} تومان
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

CourseCard.defaultProps = {
  full: false,
  lazy: false,
}

export default CourseCard
