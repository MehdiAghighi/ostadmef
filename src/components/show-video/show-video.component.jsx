import React from "react";

function ShowVideo(props) {
   return (
      <div>
         <iframe className="w-full h-full" src={props.video.video} />
      </div>
   );
}

export default ShowVideo;
