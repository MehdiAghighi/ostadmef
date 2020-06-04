import React from "react";
import "./show-video.style.scss";

function ShowVideo(props) {
   return (
      <div className="r1_iframe_embed">
         <iframe
            className="w-full h-full"
            src={props.video.video}
            title={props.video.title}
            frameborder="0"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen="true"
            webkitallowfullscreen="true"
            mozallowfullscreen="true"
         />
         {/* <div dangerouslySetInnerHTML={{ __html: props.video.video }} /> */}
      </div>
   );
}

export default ShowVideo;
