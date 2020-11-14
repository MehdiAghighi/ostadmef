import React, { useState } from "react"
import Title from "../title/title.component"
import { useEffect } from "react"
import { Checkmark } from "../icon/icon.component"

function CourseDescription({ data }) {
  const [isOpen, setIsOpen] = useState(false)
  return (
    <div className="w-full py-2 bg-site-orange relative mb-16 mt-10">
      <div className="container mx-auto relative">
        <div className="mb-6">
          <Title className="text-xl">آنچه در این دوره خواهید آموخت</Title>
        </div>
        <div
          className={`px-6 my-2 overflow-hidden`}
          style={{
            height: "auto",
            maxHeight: isOpen ? 1500 : 200,
            transition: "all ease-in-out .7s",
          }}
          dangerouslySetInnerHTML={{ __html: data }}
        ></div>
        <div
          className={`absolute w-full bg-site-orange h-16 z-10 ${
            isOpen ? "hidden" : ""
          }`}
          style={{
            bottom: 0,
            background: "rgb(251,248,246)",
            background:
              "linear-gradient(0deg, rgba(251,248,246,.9) 0%, rgba(251,248,246,.5) 100%)",
          }}
        ></div>
      </div>
      <div
        className={`z-20 bg-white rounded-full px-4 ${
          isOpen ? "pt-6 pb-2" : "pt-3 pb-5"
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
          className="border-orange-500 h-6 w-6 rounded-sm"
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
  )
}

export default CourseDescription
