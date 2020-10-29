import React, { useEffect, useState } from "react"
import "./show-video.style.scss"
// import jwplayer from "jwplayer"
import ReactJWPlayer from "react-jw-player"

function ShowVideo(props) {

  useEffect(() => {
    setPlaylist({
      file:
        props.video,
      // image: "https://link-to-my-poster.jpg",
    })
  }, [props.video])

  const [ playlist, setPlaylist ] = useState()
  return (
    <div className="">
      {/* <iframe
        className="w-full h-full"
        src={props.video}
        // title={props.video.title}
        frameborder="0"
        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen="true"
        webkitallowfullscreen="true"
        mozallowfullscreen="true"
      /> */}
      <ReactJWPlayer
        playerId="myplayer"
        playerScript="https://cdn.jwplayer.com/libraries/xaT3zPgu.js"
        playlist={playlist}
      />
      <div id="myplayer" />
    </div>
  )
}

export default ShowVideo
