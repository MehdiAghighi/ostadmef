import React from "react";

import "./card-image.style.scss";

function CardImage(props) {
   return <div className="mb-1 card-image-wrapper">{props.children}</div>;
}

export default CardImage;
