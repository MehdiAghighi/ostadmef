import React, { useState, useEffect } from "react"

import StarRatings from "react-star-ratings"

import UserImg from "../../assets/images/unnamed.png"
import { useRef } from "react"

function CourseRate({ rate }) {
  const [isOpen, setIsOpen] = useState(false)
  const [isCollapsable, setIsCollapsable] = useState(true)

  const box = useRef(null)

  useEffect(() => {
    const el = box.current
    const curOverf = el.style.overflow

    if (!curOverf || curOverf === "visible") el.style.overflow = "hidden"

    const isOverflowing =
      el.clientWidth < el.scrollWidth || el.clientHeight < el.scrollHeight

    el.style.overflow = curOverf
    setIsCollapsable(isOverflowing)
  }, [rate.description, box])

  return (
    <div className="relative">
      <div
        className="w-full rounded-lg py-4 px-2 my-12"
        style={{
          boxShadow: "1px 5px 24px rgba(0, 0, 0, 0.16)",
        }}
      >
        <div className="flef flex-row">
          <div className="w-full flex flex-row items-center">
            <div className="overflow-hidden rounded-full mx-1">
              <img
                src={rate.user.avatar ? rate.user.avatar : UserImg}
                style={{ borderRadius: "50%", width: 61, height: 61 }}
                alt={`${rate.user.first_name} ${rate.user.last_name}`}
              />
            </div>
            <div className="flex flex-col mx-1">
              <span className="font-bold text-blue-1000">
                {rate.user.first_name} {rate.user.last_name}
              </span>
              <StarRatings
                rating={parseFloat(rate.rating)}
                starRatedColor="4FD1C5"
                starHoverColor="4FD1C5"
                starDimension="15px"
                starSpacing="0"
                style={{
                  margin: "0 auto",
                }}
                numberOfStars={5}
                name="rating"
              />
            </div>
          </div>
        </div>
        <div
          className={`overflow-hidden my-4`}
          ref={box}
          style={{
            height: "auto",
            minHeight: isCollapsable ? 50 : "none",
            maxHeight: isOpen ? 1500 : 100,
            transition: "all ease-in-out .7s",
          }}
        >
          <p className="leading-loose">{rate.description}</p>
          <div
            className={`absolute w-full bg-white h-16 z-10 ${
              (isOpen || !isCollapsable) ? "hidden" : ""
            }`}
            style={{
              bottom: 0,
              background: "rgb(255,255,255)",
              background:
                "linear-gradient(0deg, rgba(255,255,255,.9) 0%, rgba(255,255,255,.5) 100%)",
            }}
          ></div>
        </div>
        <div
          className={`z-20 bg-white rounded-full px-4 ${
            isOpen ? "pt-6 pb-2" : "pt-3 pb-5"
          } ${
              !isCollapsable ? "hidden" : ""
          } absolute`}
          onClick={() => setIsOpen((state) => !state)}
          style={{
            bottom: -30,
            left: "50%",
            transform: "translate(-50%, 0)",
            boxShadow: "2px 4px 16px rgba(0, 0, 0, 0.2)",
          }}
        >
          <div
            className={`border-orange-500 h-6 w-6 rounded-sm`}
            style={{
              transform: "rotate(45deg)",
              borderBottomWidth: isOpen ? 0 : 3,
              borderRightWidth: isOpen ? 0 : 3,
              borderTopWidth: isOpen ? 3 : 0,
              borderLeftWidth: isOpen ? 3 : 0,
            }}
          ></div>
        </div>
      </div>
    </div>
  )
}

export default CourseRate
