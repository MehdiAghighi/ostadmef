import React, { useEffect, useState } from "react"
import "./show-video.style.scss"
import API from "../../helpers/api"
import ReactJWPlayer from "react-jw-player"
import CustomLoader from "../custom-loader/custom-loader.component"

function ShowVideo(props) {
  useEffect(() => {
    setPlaylist({
      file: props.video,
    })
    if (props.progress.length >= 1) {
      setProgress(props.progress[0])
    }
  }, [props.video, props.progress])

  // useEffect(() => {
  //   if (duration) {

  //   }
  // }, [duration])

  const [playlist, setPlaylist] = useState({})
  const [duration, setDuration] = useState(0)
  const [lastSave, setLastSave] = useState(0)
  const [newSave, setNewSave] = useState(0)
  const [progress, setProgress] = useState(0)
  const [ready, setReady] = useState(false)

  const onPlay = (e) => {
    if (progress.percentage) {
      const seekTo = (props.length / 100) * progress.percentage
      setLastSave(progress.percentage)
      window.jwplayer(props.video).seek(seekTo)
    }
  }
  const onOneHundredPercent = (e) => {
    API.post(`/progress/admin/save/video/${props.id}`, {
      is_finished: true,
      percentage: 100,
    })
  }
  const onNinetyFivePercent = (e) => {
    API.post(`/progress/admin/save/video/${props.id}`, {
      is_finished: true,
      percentage: 95,
    })
  }
  const onTime = (e) => {
    if ((e.position / props.length) * 100 - lastSave >= 10) {
      if ((e.position / props.length) * 100 < 95) {
        setNewSave((e.position / props.length) * 100)
      }
    }
  }

  useEffect(() => {
    if (newSave != 0) {
      API.post(`/progress/admin/save/video/${props.id}`, {
        is_finished: false,
        percentage: parseInt(newSave),
      })
      setLastSave(parseInt(newSave))
    }
  }, [newSave])

  return (
    <div className="">
      <ReactJWPlayer
        playerId={props.video}
        playerScript="https://cdn.jwplayer.com/libraries/xaT3zPgu.js"
        playlist={playlist}
        onOneHundredPercent={onOneHundredPercent}
        onNinetyFivePercent={onNinetyFivePercent}
        onTime={onTime}
        onPlay={onPlay}
        onReady={() => setReady(true)}
      />
      {!ready ? <CustomLoader /> : null}
      <div id="myplayer" />
    </div>
  )
}

export default ShowVideo
