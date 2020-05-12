import React from "react";

import "./h-card-image.style.scss";
import { Link } from "react-router-dom";

function HCardImage(props) {
   return (
      <div className="h-card-image-wrapper">
         <Link to={props.to}>{props.children}</Link>
      </div>
   );
}

HCardImage.defaultProps = {
   to: "/",
};

export default HCardImage;
