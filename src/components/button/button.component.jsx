import React from "react";

import { ArrowLeft } from "../icon/icon.component";
import { Link } from "react-router-dom";

function Button(props) {
   return (
      <Link to={props.to}>
         <button
            className={`rounded-lg ${props.btnBgClass} ${props.btnTextClass} flex flex-row justify-between items-center ${props.className}`}
            style={props.style}
         >
            {props.children}
            {props.arrow && (
               <div
                  className={`py-1 px-3 ${props.arrowBgClass} rounded-lg ${props.arrowTextClass} mr-4`}
               >
                  <ArrowLeft className="text-orange-500 font-light text-xs" />
               </div>
            )}
         </button>
      </Link>
   );
}

Button.defaultProps = {
   btnBgClass: "bg-purple-800",
   btnTextClass: "text-white",
   arrowBgClass: "bg-white",
   arrowTextClass: "text-orange-700",
   style: {},
   className: "",
   arrow: false,
   to: "/",
};

export default Button;
