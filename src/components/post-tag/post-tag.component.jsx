import React from "react"
import { Link } from "react-router-dom"

function PostTag({ category, className }) {
  return (
    <span className={`text-${category.color}-500 text-base leading-8 ${className}`}>
      <Link to={`/category/${category.slug}`} className="cursor-not-allowed">
        {category.title}
      </Link>
    </span>
  )
}

PostTag.defaultProps = {
  to: "/",
  className: "",
}

export default PostTag
