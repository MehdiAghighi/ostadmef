import React from "react"
import { Link } from "react-router-dom"

function ProfileCampaign() {
  return (
    <div className="w-full">
      <div className="w-full">
        <div className="flex flex-col">
          <div className="rounded bg-red-200 text-blue-600 font-bold px-3 py-2 mb-3">
            <div className="flex flex-row md:items-start items-center relative">
              <div className="h-full flex flex-col ml-4">
                <span className="leading-8 lg:text-lg text-sm">
                  با اشتراک گذاشتن لینک زیر برای دوستات ، هر جفتتون برای خریدتون 15
                  درصد هدیه دریافت می‌کنید.
                </span>
                <Link to={`/profile/invite`}>
                  <button className="bg-red-500 text-white px-8 py-1 rounded md:absolute sm:bottom-0 md:text-lg text-sm">
                    دعوت از دوستان
                  </button>
                </Link>
              </div>
              <div className="rounded bg-white px-12 py-5 lg:text-6xl md:text-4xl sm:text-3xl text-2xl text-red-400">
                15%
              </div>
            </div>
          </div>

          <div className="rounded bg-green-200 text-blue-600 font-bold px-3 py-2 mb-3">
            <div className="flex flex-row md:items-start items-center relative">
              <div className="h-full flex flex-col ml-4">
                <span className="leading-8 lg:text-lg text-sm">
                  اگر بتونی بخش خوبی از هر دوره رو تموم کنی، 8 درصد مبلغ دوره به کیف
                  پولت برمی‌گرده.
                </span>
                <Link to={`/profile/courses`}>
                  <button className="bg-green-500 text-white px-8 py-1 rounded md:absolute sm:bottom-0 md:text-lg text-sm">
                    مشاهده پیشرفت دوره‌ها
                  </button>
                </Link>
              </div>
              <div className="rounded bg-white px-12 py-5 lg:text-6xl md:text-4xl sm:text-3xl text-2xl text-green-400">
                8%
                <span className="invisible lg:text-5xl md:text-3xl sm:text-2xl text-xl">
                  0
                </span>
              </div>
            </div>
          </div>

          <div className="rounded bg-orange-200 text-blue-600 font-bold px-3 py-2 mb-3">
            <div className="flex flex-row md:items-start items-center relative">
              <div className="h-full flex flex-col ml-4">
                <span className="leading-8 lg:text-lg text-sm">
                  به محض این که شروع به دیدن دوره‌ی جدیدی بکنی، برای این که انگیزه
                  بگیری 21 درصد مبلغ دوره به کیف پولت برمی‌گرده.
                </span>
                <Link to={`/courses`}>
                  <button className="bg-orange-500 text-white px-8 py-1 rounded md:absolute sm:bottom-0 md:text-lg text-sm">
                    دوره‌های آموزشی
                  </button>
                </Link>
              </div>
              <div className="rounded bg-white px-12 py-5 lg:text-6xl md:text-4xl sm:text-3xl text-2xl text-orange-400">
                21%
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProfileCampaign
