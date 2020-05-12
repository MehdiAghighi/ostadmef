import React from "react";

import "./h-card-image.style.scss";

function HCardImage(props) {
   return <div className="h-card-image-wrapper">{props.children}</div>;
}

export default HCardImage;
