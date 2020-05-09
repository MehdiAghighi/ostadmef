import React from "react";

function CardTitle(props) {
   return (
      <div className="my-1">
         <h3 className="text-lg font-bold text-blue-1000">{props.children}</h3>
      </div>
   );
}

export default CardTitle;
