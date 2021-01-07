import React from "react"
import { Link } from "react-router-dom"

function CondLink(props) {
  return props.isLink ? (
    <Link to={props.to} className={`${props.className} cursor-pointer`}>
      {props.children}
    </Link>
  ) : (
    <span className={`${props.className}`}>{props.children}</span>
  )
}

CondLink.defaultProps = {
  className: "",
  isLink: false,
  to: "",
}

export default CondLink
