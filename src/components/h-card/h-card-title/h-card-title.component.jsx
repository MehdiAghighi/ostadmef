import React from "react";
import { Link } from "react-router-dom";

function HCardTitle(props) {
   return (
      <div>
         <h3 className="text-blue-1000 text-lg my-1 font-bold leading-10">
            <Link to={props.to}>{props.children}</Link>
         </h3>
      </div>
   );
}

HCardTitle.defaultProps = {
   to: "/",
};

export default HCardTitle;
