import React from "react";

function PostTag(props) {
   return (
      <span
         className={`text-orange-500 text-base leading-10 ${props.className}`}
      >
         {props.children}
      </span>
   );
}

export default PostTag;
