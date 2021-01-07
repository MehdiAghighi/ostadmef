import React from "react"
import { Link } from "react-router-dom"

import RefferalImage from "../../../assets/images/refferal-link-img.png"
import LearningInfo from "../../../components/learning-info/learning-info.component"
import WalletData from "../../../components/wallet-data/wallet-data.component"
import ProfileUserInfo from "../../../components/profile-user-info/profile-user-info.component"

function ProfileAccount() {
  return (
    <div>
      <div className="flex flex-col">
        <div className="rounded bg-red-200 text-blue-600 font-bold px-3 py-2">
          <div className="flex flex-row sm:items-start items-center relative">
            <div className="h-full flex flex-col ml-4">
              <span className="leading-8 lg:text-lg text-sm">
                با اشتراک گذاشتن لینک زیر برای دوستات ، هر جفتتون برای خریدتون 15
                درصد هدیه دریافت می‌کنید.
              </span>
              <Link to={`/profile/invite`}>
                <button className="bg-red-500 text-white px-8 py-1 rounded sm:absolute sm:bottom-0 text-lg">
                  دعوت از دوستان
                </button>
              </Link>
            </div>
            <div className="rounded bg-white px-3 py-3">
              <img src={RefferalImage} />
            </div>
          </div>
        </div>

        <div className="mt-4 w-full">
          <div className="my-2">
            <LearningInfo />
          </div>
          <div className="my-2">
            <WalletData />
          </div>
          <div className="my-2">
            <ProfileUserInfo />
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProfileAccount
