import React from "react"
import { Link } from "react-router-dom"

function CardTitle(props) {
  return (
    <div className="my-1">
      <h3
        className={`text-base text-blue-1000 font-bold leading-10 ${props.className}`}
      >
        <Link to={props.to}>{props.children}</Link>
      </h3>
    </div>
  )
}

CardTitle.defaultProps = {
  to: "/",
}

export default CardTitle
