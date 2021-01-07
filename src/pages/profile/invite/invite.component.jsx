import React from "react"

import RefferalImage from "../../../assets/images/refferal-link-img.png"

import { CopyToClipboard } from "react-copy-to-clipboard"

import { useState } from "react"
import { useRef } from "react"
import { useAuthState } from "../../../contexts/auth-context"
import { useEffect } from "react"

function ProfileInvite() {
  const [link, setLink] = useState("")
  
  const { user } = useAuthState()

  useEffect(() => {
    if (user.id) {
      setLink(`https://linom.ir?referral=${user.id}`)
    }
  }, [ user ])

  return (
    <div className="w-full">
      <div className="w-full">
        <div className="w-full flex flex-col">
          <div className="rounded bg-red-200 text-blue-600 font-bold px-3 py-2">
            <div className="flex flex-row sm:items-start items-center relative">
              <div className="h-full flex flex-col ml-4">
                <span className="leading-8 lg:text-lg text-sm">
                  با اشتراک گذاشتن لینک زیر برای دوستات ، هر جفتتون برای خریدتون 15
                  درصد هدیه دریافت می‌کنید.
                </span>
              </div>
              <div className="rounded px-3 py-3">
                <img src={RefferalImage} />
              </div>
            </div>
          </div>
          <div className="w-full my-2">
            <div className="border border-green-400 px-3 py-2 rounded-lg">
              <div className="w-full flex xl:flex-row flex-col justify-between items-center">
                <span className="text-green-600 lg:text-lg text-base xl:mb-0 mb-3 font-bold">
                  با این لینک می‌تونی دوستاتو دعوت کنی!
                </span>
                <div className="flex flex-row">
                  <div className="rounded-lg text-blue-500 px-3 py-2 bg-gray-300 ml-2">
                    <span className="hover:text-blue-600 cursor-pointer border-b border-blue-500 ">
                      {link}
                    </span>
                  </div>
                  <CopyToClipboard text={link}>
                    <button className="rounded-lg px-3 py-2 text-green-500 font-bold border-2 border-green-500 transition-all duration-75 hover:bg-green-500 hover:text-white focus:outline-none">
                      کپی کن!
                    </button>
                  </CopyToClipboard>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProfileInvite
