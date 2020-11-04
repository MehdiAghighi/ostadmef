import React, { useEffect, useState } from "react"
import "./show-video.style.scss"
import API from "../../helpers/api"
import ReactJWPlayer from "react-jw-player"

function ShowVideo(props) {

  useEffect(() => {
    setPlaylist({
      file:
        props.video,
    })
  }, [props.video])

  // useEffect(() => {
  //   if (duration) {

  //   }
  // }, [duration])

  const [ playlist, setPlaylist ] = useState({})
  const [ duration, setDuration ] = useState(0)

  const onPlay = (e) => {
    console.log(window.jwplayer(props.video).getDuration())
  }
  const onOneHundredPercent = (e) => {
    API.post(`/progress/admin/save/video/${props.id}`, {
      is_finished: true,
      percentage: 100
    })
  }
  const onNinetyFivePercent = (e) => {
    API.post(`/progress/admin/save/video/${props.id}`, {
      is_finished: true,
      percentage: 95,
    })
  }

  return (
    <div className="">
      <ReactJWPlayer
        playerId={props.video}
        playerScript="https://cdn.jwplayer.com/libraries/xaT3zPgu.js"
        playlist={playlist}
        onOneHundredPercent={onOneHundredPercent}
        onNinetyFivePercent={onNinetyFivePercent}
      />
      <div id="myplayer" />
    </div>
  )
}

export default ShowVideo
