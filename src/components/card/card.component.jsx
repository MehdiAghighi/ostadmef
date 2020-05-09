import React from "react";

function Card(props) {
   return (
      <div className="inline-flex">
         <div className="py-2 px-2 rounded-lg bg-orange-100 w-auto">
            {props.children}
         </div>
      </div>
   );
}

export default Card;
