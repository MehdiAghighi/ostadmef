import React from "react";

function HCardData(props) {
   return (
      <div className="flex flex-col justify-between pb-3">{props.children}</div>
   );
}

export default HCardData;
