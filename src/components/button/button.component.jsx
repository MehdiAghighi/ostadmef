import React from "react";

import { ArrowLeft } from "../icon/icon.component";

function Button(props) {
   return (
      <button
         className={`rounded-lg ${props.btnBgClass} ${props.btnTextClass} flex flex-row justify-between items-center ${props.className}`}
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

Button.defaultProps = {
   btnBgClass: "bg-purple-800",
   btnTextClass: "text-white",
   arrowBgClass: "bg-white",
   arrowTextClass: "text-orange-700",
   className: "",
   arrow: false,
};

export default Button;
