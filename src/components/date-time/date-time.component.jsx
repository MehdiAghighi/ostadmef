import React from "react";
import { Clock } from "../icon/icon.component";

function DateTime(props) {
   return (
      <div
         className={`flex flex-row justify-between items-center ${props.className}`}
      >
         <span></span>
         <div className="flex flex-row">
            <span className="text-gray-600">
               9 روز پیش &nbsp;
               <Clock className="text-gray-600 text-xs" />
            </span>
            <div
               className="h-6 bg-gray-400 mx-3"
               style={{
                  width: 2,
               }}
            ></div>
            <span className="text-gray-600">
               ساعت 14 &nbsp;
               <Clock className="text-gray-600 text-xs" />
            </span>
         </div>
      </div>
   );
}

export default DateTime;
