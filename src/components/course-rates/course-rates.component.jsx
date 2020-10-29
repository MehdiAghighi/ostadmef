import React, { useEffect, useState } from "react"
import API from "../../helpers/api"
import CustomLoader from "../custom-loader/custom-loader.component"

import CourseRate from "../course-rate/course-rate.component"

function CourseRates({ course }) {
  const [rates, setRates] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState(false)

  useEffect(() => {
    API.get(`/rate/course/${course.id}`)
      .then((resp) => {
        return resp.data.rates.data
      })
      .then((data) => {
        setRates(data)
        setIsLoading(false)
      })
      .catch((err) => {
        setError(true)
        setIsLoading(false)
      })
  }, course.id)

  return (
    <div className="container mx-auto">
      {isLoading ? (
        <CustomLoader />
      ) : error ? (
        <span></span>
      ) : (
        rates.map((rate, index) => (
          <CourseRate rate={rate} />
        ))
      )}
    </div>
  )
}

export default CourseRates
