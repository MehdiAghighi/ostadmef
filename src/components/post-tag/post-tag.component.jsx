import React from "react";
import { Link } from "react-router-dom";

function PostTag(props) {
   return (
      <span
         className={`text-orange-500 text-base leading-10 ${props.className}`}
      >
         <Link to={props.to}>{props.children}</Link>
      </span>
   );
}

PostTag.defaultProps = {
   to: "/",
};

export default PostTag;
