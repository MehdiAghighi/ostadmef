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
      {/* <ReactJWPlayer
        playerId={props.video}
        playerScript="https://cdn.jwplayer.com/libraries/khFxmJ8O.js"
        playlist={playlist}
        onOneHundredPercent={onOneHundredPercent}
        onNinetyFivePercent={onNinetyFivePercent}
        onTime={onTime}
        onPlay={onPlay}
        onReady={() => setReady(true)}
      /> */}
      <div
        dangerouslySetInnerHTML={{
          __html:
            `<style> .r1_iframe_embed { position: relative; overflow: hidden; width: 100%; height: auto; padding-top: 56.25%; } .r1_iframe_embed iframe { position: absolute; top: 0; left: 0; width: 100%; height: 100%; border: 0; } </style> <div class="r1_iframe_embed"> <iframe src="${props.video}" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen="true" webkitallowfullscreen="true" mozallowfullscreen="true"></iframe> </div>`,
        }}
      ></div>
      {!ready ? <CustomLoader /> : null}
      {/* <div id="myplayer" /> */}
    </div>
  )
}

export default ShowVideo
