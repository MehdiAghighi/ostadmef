import React from "react"

import "./title.style.scss"

function Title(props) {
  return (
    <div className="title-wrapper relative inline-flex">
      <div className="z-10 text-blue-800 relative">
        {props.mainTitle ? (
          <h1
            className={`title text-blue-800 text-2xl sm:text-4xl ${props.className}`}
          >
            {props.children}
          </h1>
        ) : (
          <span
            className={`title text-blue-800 text-2xl sm:text-4xl ${props.className}`}
          >
            {props.children}
          </span>
        )}
      </div>
      <div
        className="title-through-line absolute h-6 w-full"
        style={{
          bottom: 5,
        }}
      ></div>
    </div>
  )
}
Title.defaultProps = {
  mainTitle: false,
}

export default Title
