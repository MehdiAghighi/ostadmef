import React from "react"
import Loader from "react-loader-spinner"

function ImageLoader(props) {
  return (
    <div
      className="bg-gray-200 flex justify-center items-center rounded-lg"
      style={{ width: props.width, height: props.height }}
    >
      <Loader type="Circles" color="#b2f5ea" />
    </div>
  )
}

export default ImageLoader
