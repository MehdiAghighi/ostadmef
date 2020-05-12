import React from "react";

function HCardData(props) {
   return (
      <div className="flex flex-col justify-between pb-3 sm:ml-16 xs:ml-4">
         {props.children}
      </div>
   );
}

export default HCardData;
