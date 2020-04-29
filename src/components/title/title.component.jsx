import React from "react";

import "./title.style.scss";

function Title({ children }) {
   return (
      <div className="title-wrapper relative inline-flex">
         <div className="z-10 text-blue-800 relative">
            <h2 className="title text-blue-1000">{children}</h2>
         </div>
         <div
            className="title-through-line absolute h-6 w-full"
            style={{
               bottom: 5,
            }}
         ></div>
      </div>
   );
}

export default Title;
