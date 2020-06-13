import React from "react"

function Card(props) {
  return (
    <div {...props} className={`inline-flex ${props.full ? "w-full" : ""}`}>
      <div
        className={`py-2 px-2 rounded-lg bg-orange-100 ${props.full && "w-full"}`}
        style={props.full ? { width: 293 } : {}}
      >
        {props.children}
      </div>
    </div>
  )
}

Card.defaultProps = {
  full: false,
}

export default Card
