import React from "react"

import "./desktop-nav.style.scss"
import LinomLogo from "../../assets/images/linomlogo.png"

import { NavLink, Link } from "react-router-dom"
import Button from "../button/button.component"
import DesktopNavLink from "../desktop-nav-link/desktop-nav-link.component"

import { useAuthDispatch, useAuthState } from "../../contexts/auth-context"
import { Student, User } from "../icon/icon.component"

function DesktopNav(props) {
  const setAuthModalOpen = useAuthDispatch()
  const { isLoggedIn, user } = useAuthState()
  return (
    <div className="container mx-auto">
      <nav className="hidden md:flex md:flex-row justify-between items-center">
        <div>
          <NavLink to="/">
            <img
              src={LinomLogo}
              className="h-16 mt-2"
              alt="لینوم - پلتفرم آموزشی میکرولرنینگ"
            />
          </NavLink>
        </div>
        <div className="flex flex-row justify-center items-center">
          <DesktopNavLink to="/">خانه</DesktopNavLink>
          <DesktopNavLink to="/courses">دوره‌ها</DesktopNavLink>
          <DesktopNavLink to="/work">همکاری با ما</DesktopNavLink>
          <DesktopNavLink to="/blog">بلاگ</DesktopNavLink>
        </div>
        <div>
          {!isLoggedIn ? (
            <Button
              btnBgClass="bg-indigo-500"
              btnTextClass="text-white"
              className="font-bold leading-loose px-6 py-1"
              onClick={() => setAuthModalOpen({ type: "TOGGLE_MODAL" })}
            >
              ورود/ثبت‌نام
            </Button>
          ) : (
            <div className="flex flex-row items-center">
              <Link to="/profile/courses">
                <div className="mx-2 rounded-lg bg-green-500 px-5 py-2 text-white border-2 border-green-500 font-bold">
                  دوره‌های من
                </div>
              </Link>
              <div className="relative dropdown w-32">
                <span className="text-blue-1000 dropdown-toggle">
                  <div className="cursor-pointer rounded-lg border-2 border-green-500 px-4 py-2 text-center font-bold text-green-500 flex flex-row justify-between items-center">
                    <User className="text-xs" />
                    پروفایل
                    <div className="arrow down border-green-500"></div>
                  </div>
                  <ul className="absolute dropdown-menu z-50 w-full">
                    <div className="bg-gray-100 mt-1 rounded shadow-md w-full">
                    <Link to="/profile">
                      <li className="hover:bg-gray-300 transition-all duration-150 py-2 px-2 text-gray-700 rounded-t">
                        حساب کاربری
                      </li>
                    </Link>
                    <div
                      className="bg-gray-300 mx-auto"
                      style={{ height: 1, width: "90%" }}
                    ></div>
                    <Link to="/profile/courses">
                      <li className="hover:bg-gray-300 transition-all duration-150 py-2 px-2 text-gray-700">
                        دوره‌های من
                      </li>
                    </Link>
                    <div
                      className="bg-gray-300 mx-auto"
                      style={{ height: 1, width: "90%" }}
                    ></div>
                    <Link to="/profile/wallet">
                      <li className="hover:bg-gray-300 transition-all duration-150 py-2 px-2 text-gray-700">
                        کیف پول
                      </li>
                    </Link>
                    <div
                      className="bg-gray-300 mx-auto"
                      style={{ height: 1, width: "90%" }}
                    ></div>
                    <Link to="/logout">
                      <li className="hover:bg-gray-300 transition-all duration-150 py-2 px-2 rounded-b text-red-500">
                        خروج
                      </li>
                    </Link>
                    </div>
                  </ul>
                </span>
              </div>
            </div>
          )}
        </div>
      </nav>
    </div>
  )
}

export default DesktopNav
