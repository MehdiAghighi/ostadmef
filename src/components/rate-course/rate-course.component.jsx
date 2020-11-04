import React, { useEffect, useState } from "react"

import StarRatings from "react-star-ratings"

import API from "../../helpers/api"
import { toast } from "react-toastify"
import CustomLoader from "../custom-loader/custom-loader.component"

function RateCourse({ course }) {
  const [rating, setRating] = useState(0)
  const [description, setDescription] = useState("")
  const [editMode, setEditMode] = useState(false)
  const [isLoading, setIsLoading] = useState(true)
  const [userRate, setUserRate] = useState({})

  useEffect(() => {
    API.get(`/rate/admin/course/${course.id}`)
      .then((resp) => {
        return resp.data.rate
      })
      .then((data) => {
        setUserRate(data)
        setRating(data.rating)
        setDescription(data.description)
        setEditMode(true)
        setIsLoading(false)
      })
      .catch((err) => {
        if (err.response) {
          if (err.response.status === 404) {
            setIsLoading(false)
            setEditMode(false)
          }
        }
      })
  }, [course.id])

  const changeRating = (newRating, name) => {
    setRating(newRating)
  }

  const handleChange = (event) => {
    setDescription(event.target.value)
  }

  const submitRate = () => {
    toast.info("در حال ثبت بازخورد")
    API.post(`/course/admin/rate/${course.id}`, {
      rate: rating,
      description: description,
    })
      .then((resp) => {
        return resp.data
      })
      .then((data) => {
        toast.success("بازخورد با موفقیت ثبت شد")
      })
      .catch((err) => {
        toast.error("ثبت بازخورد موفقیت آمیز نبود")
      })
  }

  return (
    <div className="container mx-auto">
      <div className="text-blue-800 text-xl sm:text-3xl font-bold mb-8">
        <span>شما هم می‌توانید در مورد این دوره نظر دهید: </span>
      </div>
      <div className="bg-site-gray rounded-lg py-3 px-4 shadow">
        {isLoading ? (
          <CustomLoader />
        ) : (
          <div className="w-full grid grid-cols-7">
            <div className="col-span-5 py-2 my-4 px-4 border-l border-gray-700">
              <div className="">
                <span className="text-xl">متن نظر: </span>
                <textarea
                  maxLength={5000}
                  rows={7}
                  className="w-full mt-4 rounded-lg border border-purple-600 py-2 px-3"
                  value={description}
                  onChange={handleChange}
                ></textarea>
              </div>
            </div>
            <div className="col-span-2">
              <div className="px-4 py-4 my-4 flex flex-col justify-around h-full">
                <div className="text-xl">امتیاز شما: </div>
                <div className="my-4 mx-auto flex justify-center">
                  <StarRatings
                    rating={parseFloat(rating)}
                    starRatedColor="4FD1C5"
                    starHoverColor="4FD1C5"
                    starDimension="40px"
                    starSpacing="0"
                    style={{
                      margin: "0 auto",
                    }}
                    changeRating={changeRating}
                    numberOfStars={5}
                    name="rating"
                  />
                </div>
                <button
                  id="buyButton"
                  className="py-4 w-full bg-teal-600 rounded-lg text-white text-xl hover:bg-teal-700 transition-all duration-100"
                  onClick={submitRate}
                >
                  {editMode ? "ویرایش بازخورد" : "ثبت بازخورد"}
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default RateCourse
