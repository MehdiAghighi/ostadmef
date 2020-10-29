import React from "react"
import { Lock, Unlock } from "../icon/icon.component"

function VideoLockStatus({ lock }) {
    return (
      <div
        className={`${
          lock ? "bg-red-700" : "bg-teal-700"
        } py-3 px-3 rounded-full text-white ml-3 text-xs border-2 border-gray-400`}
      >
        {lock ? <Lock /> : <Unlock />}
      </div>
    )
}

export default VideoLockStatus