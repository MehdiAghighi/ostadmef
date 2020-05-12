import React from "react";

function HCardTitle(props) {
   return (
      <div>
         <h3 className="text-blue-1000 text-lg my-1 font-bold leading-10">
            {props.children}
         </h3>
      </div>
   );
}

export default HCardTitle;
