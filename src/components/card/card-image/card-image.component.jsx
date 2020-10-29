import React from "react"

import "./card-image.style.scss"
import { Link } from "react-router-dom"

function CardImage(props) {
  return (
    <div className="mb-1 card-image-wrapper overflow-hidden">
      <Link to={props.to}>{props.children}</Link>
    </div>
  )
}

CardImage.defaultProps = {
  to: "/",
}

export default CardImage
