import React from "react";
import { Clock } from "../icon/icon.component";

function DateTime({ timeAgo, readTime, className }) {
   return (
      <div
         className={`flex flex-row justify-between items-center ${className}`}
      >
         <span></span>
         <div className="flex flex-row">
            <span className="text-gray-600">
               {timeAgo} &nbsp;
               <Clock className="text-gray-600 text-xs" />
            </span>
            <div
               className="h-6 bg-gray-400 mx-3"
               style={{
                  width: 2,
               }}
            ></div>
            <span className="text-gray-600">
               {readTime} دقیقه &nbsp;
               <Clock className="text-gray-600 text-xs" />
            </span>
         </div>
      </div>
   );
}

export default DateTime;
