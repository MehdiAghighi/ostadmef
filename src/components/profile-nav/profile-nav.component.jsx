import React from "react"
import { MoneyBag, User, CoursesIcon, Wallet, CommentsIcon, Student, Exit, AlertIcon } from "../icon/icon.component"
import { NavLink } from "react-router-dom"
import { formatNumberWithCommas } from "../../helpers/functions"
import { useEffect } from "react"
import { request } from "../../helpers/api"
import { useState } from "react"

function ProfileNav({ user }) {

  const [balance, setBalance] = useState(0)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    setIsLoading(true)
    request(`/user/profile/wallet-balance`, (res) => {
      setBalance(res.data.balance)
      setIsLoading(false)
    })
  }, [setIsLoading, setBalance])

  return (
    <div className="border border-gray-400 rounded bg-site-orange py-2 px-2 md:w-4/12 w-full">
      <div className="flex flex-col">
        <div className="flex flex-row items-center">
          <img src={user.avatar} />
          <div className="flex flex-col justify-between mr-2">
            <span className="text-blue-1000 text-lg font-bold">
              {user.first_name} {user.last_name}
            </span>
            <span className="text-gray-600 text-sm">{user.phone}</span>
          </div>
        </div>
        <div className="my-3">
          <div className="border-2 border-orange-500 py-3 lg:px-4 px-2 flex flex-row justify-between text-orange-500 items-center rounded-lg">
            <div className="flex flex-row items-center lg:text-xl text-smx">
              <MoneyBag className="ml-1" />
              <span>اعتبار کیف پول:</span>
            </div>
            <div>
              <span className="lg:text-xl text-smx">
                {(!isLoading && balance) ? formatNumberWithCommas(balance) : "..."} تومان
              </span>
            </div>
          </div>
        </div>
        <div className="my-3">
          <div className="flex flex-col">
            <NavLink
              to="/profile"
              className="flex flex-row items-center py-3 border-b-2 border-gray-400 text-gray-700 hover:border-green-500 hover:text-green-500 cursor-pointer my-1"
              exact
              activeClassName="border-green-500 text-green-500"
            >
              <User className="text-xs" />
              <span className="mr-2 lg:text-lg text-sm">حساب کاربری</span>
            </NavLink>
            <NavLink
              to="/profile/courses"
              className="flex flex-row items-center py-3 border-b-2 border-gray-400 text-gray-700 hover:border-green-500 hover:text-green-500 cursor-pointer my-1"
              exact
              activeClassName="border-green-500 text-green-500"
            >
              <CoursesIcon className="text-xs" />
              <span className="mr-2 lg:text-lg text-sm">دوره‌های خریداری شده</span>
            </NavLink>
            <NavLink
              to="/profile/wallet"
              className="flex flex-row items-center py-3 border-b-2 border-gray-400 text-gray-700 hover:border-green-500 hover:text-green-500 cursor-pointer my-1"
              exact
              activeClassName="border-green-500 text-green-500"
            >
              <Wallet className="text-xs" />
              <span className="mr-2 lg:text-lg text-sm">کیف پول</span>
            </NavLink>
            {/* <NavLink
              to="/profile/questions"
              className="flex flex-row items-center py-3 border-b-2 border-gray-400 text-gray-700 hover:border-green-500 hover:text-green-500 cursor-pointer my-1"
              exact
              activeClassName="border-green-500 text-green-500"
            >
              <CommentsIcon className="text-xs" />
              <span className="mr-2 lg:text-lg text-sm">پرسش و پاسخ</span>
            </NavLink> */}
            <NavLink
              to="/profile/campaign"
              className="flex flex-row items-center py-3 border-b-2 border-gray-400 text-gray-700 hover:border-red-500 hover:text-red-500 cursor-pointer my-1"
              exact
              activeClassName="border-red-500 text-red-500"
            >
              <AlertIcon className="text-xs" />
              <span className="mr-2 lg:text-lg text-sm">جشنواره</span>
            </NavLink>
            <NavLink
              to="/profile/invite"
              className="flex flex-row items-center py-3 border-b-2 border-gray-400 text-gray-700 hover:border-green-500 hover:text-green-500 cursor-pointer my-1"
              exact
              activeClassName="border-green-500 text-green-500"
            >
              <Student className="text-xs" />
              <span className="mr-2 lg:text-lg text-sm">دعوت از دوستان</span>
            </NavLink>
            <NavLink
              to="/logout"
              className="flex flex-row items-center py-3 border-b-2 border-gray-400 text-gray-700 hover:border-green-500 hover:text-green-500 cursor-pointer my-1"
            >
              <Exit className="text-xs" />
              <span className="mr-2 lg:text-lg text-sm">خروج از حساب</span>
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProfileNav
