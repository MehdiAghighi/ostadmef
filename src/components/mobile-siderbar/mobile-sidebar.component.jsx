import React from "react"
import { NavLink, Link } from "react-router-dom"

import MobileNavLink from "../mobile-nav-link/mobile-nav-link.component"
import { useAuthState, useAuthDispatch } from "../../contexts/auth-context"
import Button from "../button/button.component"
import LinomLogo from "../../assets/images/linomlogo.png"

function MobileSidebar({ isOpen }) {
  const setAuthModalOpen = useAuthDispatch()
  const { isLoggedIn, user } = useAuthState()

  return (
    <div
      className="h-screen right-0 top-0 fixed w-1/2 bg-white z-50 transition-all duration-500"
      style={{
        transform: isOpen ? "translateX(0)" : "translateX(100%)",
      }}
    >
      <nav className="py-2 px-2 mx-auto">
        <div className="text-center mx-auto">
          <NavLink to="/">
            <img
              src={LinomLogo}
              className="h-12 mt-2"
              alt="لینوم - پلتفرم آموزشی میکرولرنینگ"
            />
          </NavLink>
        </div>
        <div className="flex flex-col">
          <MobileNavLink to="/" exact>
            خانه
          </MobileNavLink>
          <MobileNavLink to="/courses" exact>
            دوره‌ها
          </MobileNavLink>
          <MobileNavLink to="/work" exact>
            همکاری با ما
          </MobileNavLink>
          <MobileNavLink to="/blog" exact>
            بلاگ
          </MobileNavLink>
        </div>
        <div>
          {!isLoggedIn ? (
            <Button
              btnBgClass="bg-orange-500"
              btnTextClass="text-white"
              className="font-bold leading-loose px-6 mt-5 py-1 mx-auto"
              onClick={() => setAuthModalOpen({ type: "TOGGLE_MODAL" })}
            >
              ورود/ثبت‌نام
            </Button>
          ) : (
            <div className="mx-auto text-center flex flex-col z-50">
              <span className="text-blue-1000 mx-auto text-center z-50">
                سلام،{" "}
                <span className="font-bold">
                  {user.first_name ? user.first_name : "لینومی عزیز"}
                </span>
              </span>
              {/* <Link to="/profile" className="mt-4">
                                <span className="text-blue-1000 mx-auto text-center leading-7">
                                    پروفایل
                                </span>
                            </Link> */}
              <Link to="/profile/courses">
                <span className="text-blue-1000 mx-auto text-center leading-7">
                  دوره‌های خریداری شده
                </span>
              </Link>
              <Link to="/logout">
                <span className="text-blue-1000 mx-auto text-center leading-7">
                  خروج
                </span>
              </Link>
            </div>
          )}
        </div>
      </nav>
    </div>
  )
}

export default MobileSidebar
