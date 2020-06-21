import React from "react"

import Blueprint from "../../assets/images/Blueprint.svg"
import OrRec from "../../assets/images/or-rec.svg"
import PurpRec from "../../assets/images/purp-rec.svg"

function DecoratedImage(props) {
  return (
    <div className="relative mx-auto w-full">
      <img
        src={Blueprint}
        className="absolute w-24 xl:w-auto sm:w-32 blueprint"
        alt=""
      />
      <img
        src={props.mainImg}
        className="inset-0 relative w-11/12 mx-auto z-10"
        alt="Linom Courses"
        style={props.imgStyle}
      />
      <img src={OrRec} className="absolute w-32 xl:w-56 sm:w-48 or-rec" alt="" />
      <img src={PurpRec} className="absolute w-32 xl:w-56 sm:w-48 purp-rec" alt="" />
    </div>
  )
}

export default DecoratedImage
