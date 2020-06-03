import React from "react";

function ShowVideo(props) {
   return (
      <div>
         {/* <iframe
            className="w-full h-full"
            src={props.video.video}
            title={props.video.title}
         /> */}
         <div dangerouslySetInnerHTML={{ __html: props.video.video }} />
      </div>
   );
}

export default ShowVideo;
