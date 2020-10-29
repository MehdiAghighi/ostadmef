import React, { useEffect, useState } from "react"

import Ratings from "react-ratings-declarative"

import Title from "../title/title.component"
import API from "../../helpers/api"
import CustomLoader from "../custom-loader/custom-loader.component"

function CourseRatingsStars({ course }) {
  const [ratings, setRatings] = useState({})
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    API.get(`/course/ratings/${course.id}`)
      .then((resp) => {
        return resp.data
      })
      .then((ratings) => {
        setRatings(ratings)
        setIsLoading(false)
      })
      .catch((err) => console.log(err))
  }, [course.id])
  return (
    <div className="w-full py-2 bg-yellow-100 relative mb-16 mt-10">
      <div className="container mx-auto relative">
        <Title>بازخورد خریداران</Title>
        {isLoading ? (
          <CustomLoader />
        ) : (
          <div className="w-full mb-4 mt-8 grid grid-cols-4">
            <div>
              <div className="flex flex-row items-center mx-2 my-1">
                <span className="text-xl mx-1 pt-1 w-10">
                  {parseFloat(ratings.percentages[5]).toFixed(0)}%
                </span>
                <div
                  style={{
                    direction: "ltr",
                  }}
                >
                  <Ratings
                    rating={5}
                    widgetDimensions="30px"
                    widgetSpacings="0px"
                    style={{ direction: "ltr" }}
                  >
                    <Ratings.Widget widgetRatedColor="4FD1C5" />
                    <Ratings.Widget widgetRatedColor="4FD1C5" />
                    <Ratings.Widget widgetRatedColor="4FD1C5" />
                    <Ratings.Widget widgetRatedColor="4FD1C5" />
                    <Ratings.Widget widgetRatedColor="4FD1C5" />
                  </Ratings>
                </div>
              </div>
              <div className="flex flex-row items-center mx-2 my-1">
                <span className="text-xl mx-1 pt-1 w-10">
                  {parseFloat(ratings.percentages[4]).toFixed(0)}%
                </span>
                <div
                  style={{
                    direction: "ltr",
                  }}
                >
                  <Ratings
                    rating={4}
                    widgetDimensions="30px"
                    widgetSpacings="0px"
                    style={{ direction: "ltr" }}
                  >
                    <Ratings.Widget widgetRatedColor="4FD1C5" />
                    <Ratings.Widget widgetRatedColor="4FD1C5" />
                    <Ratings.Widget widgetRatedColor="4FD1C5" />
                    <Ratings.Widget widgetRatedColor="4FD1C5" />
                    <Ratings.Widget widgetRatedColor="4FD1C5" />
                  </Ratings>
                </div>
              </div>
              <div className="flex flex-row items-center mx-2 my-1">
                <span className="text-xl mx-1 pt-1 w-10">
                  {parseFloat(ratings.percentages[3]).toFixed(0)}%
                </span>
                <div
                  style={{
                    direction: "ltr",
                  }}
                >
                  <Ratings
                    rating={3}
                    widgetDimensions="30px"
                    widgetSpacings="0px"
                    style={{ direction: "ltr" }}
                  >
                    <Ratings.Widget widgetRatedColor="4FD1C5" />
                    <Ratings.Widget widgetRatedColor="4FD1C5" />
                    <Ratings.Widget widgetRatedColor="4FD1C5" />
                    <Ratings.Widget widgetRatedColor="4FD1C5" />
                    <Ratings.Widget widgetRatedColor="4FD1C5" />
                  </Ratings>
                </div>
              </div>
              <div className="flex flex-row items-center mx-2 my-1">
                <span className="text-xl mx-1 pt-1 w-10">
                  {parseFloat(ratings.percentages[2]).toFixed(0)}%
                </span>
                <div
                  style={{
                    direction: "ltr",
                  }}
                >
                  <Ratings
                    rating={2}
                    widgetDimensions="30px"
                    widgetSpacings="0px"
                    style={{ direction: "ltr" }}
                  >
                    <Ratings.Widget widgetRatedColor="4FD1C5" />
                    <Ratings.Widget widgetRatedColor="4FD1C5" />
                    <Ratings.Widget widgetRatedColor="4FD1C5" />
                    <Ratings.Widget widgetRatedColor="4FD1C5" />
                    <Ratings.Widget widgetRatedColor="4FD1C5" />
                  </Ratings>
                </div>
              </div>
              <div className="flex flex-row items-center mx-2 my-1">
                <span className="text-xl mx-1 pt-1 w-10">
                  {parseFloat(ratings.percentages[1]).toFixed(0)}%
                </span>
                <div
                  style={{
                    direction: "ltr",
                  }}
                >
                  <Ratings
                    rating={1}
                    widgetDimensions="30px"
                    widgetSpacings="0px"
                    style={{ direction: "ltr" }}
                  >
                    <Ratings.Widget widgetRatedColor="4FD1C5" />
                    <Ratings.Widget widgetRatedColor="4FD1C5" />
                    <Ratings.Widget widgetRatedColor="4FD1C5" />
                    <Ratings.Widget widgetRatedColor="4FD1C5" />
                    <Ratings.Widget widgetRatedColor="4FD1C5" />
                  </Ratings>
                </div>
              </div>
            </div>
            <div
              className="col-span-2"
              style={{
                direction: "ltr",
              }}
            >
              <div className="w-full shadow bg-gray-400 h-4 mt-3">
                <div
                  className="bg-blue-700 h-full"
                  style={{
                    width: `${parseInt(ratings.percentages[5])}%`,
                  }}
                ></div>
              </div>
              <div className="w-full shadow bg-gray-400 h-4 mt-6">
                <div
                  className="bg-blue-700 h-full"
                  style={{
                    width: `${parseInt(ratings.percentages[4])}%`,
                  }}
                ></div>
              </div>
              <div className="w-full shadow bg-gray-400 h-4 mt-5">
                <div
                  className="bg-blue-700 h-full"
                  style={{
                    width: `${parseInt(ratings.percentages[3])}%`,
                  }}
                ></div>
              </div>
              <div className="w-full shadow bg-gray-400 h-4 mt-6">
                <div
                  className="bg-blue-700 h-full"
                  style={{
                    width: `${parseInt(ratings.percentages[2])}%`,
                  }}
                ></div>
              </div>
              <div className="w-full shadow bg-gray-400 h-4 mt-6">
                <div
                  className="bg-blue-700 h-full"
                  style={{
                    width: `${parseInt(ratings.percentages[1])}%`,
                  }}
                ></div>
              </div>
            </div>
            <div className="text-center text-teal-600 flex flex-col py-2">
              <span className="text-6xl font-bold">
                {
                  ratings.average 
                  ?
                  parseFloat(ratings.average).toFixed(1)
                  :
                  <>--</>
                }
              </span>
              <div
                style={{
                  direction: "ltr",
                }}
              >
                <Ratings
                  rating={ratings.average ? parseFloat(ratings.average) : 5}
                  widgetDimensions="30px"
                  widgetSpacings="0px"
                >
                  <Ratings.Widget widgetRatedColor="4FD1C5" />
                  <Ratings.Widget widgetRatedColor="4FD1C5" />
                  <Ratings.Widget widgetRatedColor="4FD1C5" />
                  <Ratings.Widget widgetRatedColor="4FD1C5" />
                  <Ratings.Widget widgetRatedColor="4FD1C5" />
                </Ratings>
              </div>
              <span className="text-xl font-bold mt-2 text-blue-800">
                امتیاز دوره
              </span>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default CourseRatingsStars
