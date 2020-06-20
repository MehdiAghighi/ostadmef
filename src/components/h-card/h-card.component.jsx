import React from "react"

import "./h-card.style.scss"

function HCard(props) {
  return (
    <div
      className={`h-card py-2 px-2 flex flex-row items-center justify-between bg-orange-100 rounded-lg ${props.className}`}
    >
      {props.children}
    </div>
  )
}

export default HCard
