import React from "react";

import { ArrowLeft } from "../icon/icon.component";
import { Link } from "react-router-dom";

function Button(props) {
   const classes = `${props.btnBgClass} ${props.btnTextClass} ${props.className}`;
   if (props.to) {
      return (
         <Link to={props.to}>
            <button
               {...props}
               className={`rounded-lg flex flex-row justify-between items-center ${classes}`}
               style={props.style}
               onClick={props.onClick}
               disabled={props.disabled}
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
   } else {
      return (
         <button
            {...props}
            className={`rounded-lg flex flex-row justify-between items-center ${classes}`}
            style={props.style}
            onClick={props.onClick}
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
      );
   }
}

Button.defaultProps = {
   btnBgClass: "bg-purple-800",
   btnTextClass: "text-white",
   arrowBgClass: "bg-white",
   arrowTextClass: "text-orange-700",
   style: {},
   className: "",
   arrow: false,
   to: null,
   onClick: null,
};

export default Button;
