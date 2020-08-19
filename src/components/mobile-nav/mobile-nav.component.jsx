import React, { useState } from "react"

import LinomLogo from "../../assets/images/linomlogo.png"

import { Hamburger, Cross } from "../icon/icon.component"
import { NavLink } from "react-router-dom"

import MobileSidebar from "../mobile-siderbar/mobile-sidebar.component"
import { useSiteState, useSiteDispatch } from "../../contexts/site-context"

function MobileNav() {
  const { sidebarOpen } = useSiteState()
  const setSidebarOpen = useSiteDispatch()

  const toggleSidebar = () => {
    setSidebarOpen({ type: "TOGGLE_SIDEBAR" })
  }

  return (
    <div className="w-full block md:hidden">
      <div className="py-4 px-4 flex flex-row justify-between items-center">
        <NavLink to="/">
          <img src={LinomLogo} className="h-16 mt-2" alt="لینوم - پلتفرم آموزشی میکرولرنینگ" />
        </NavLink>
        {!sidebarOpen ? (
          <Hamburger className="text-blue-700" onClick={toggleSidebar} />
        ) : (
          <Cross
            className="text-blue-700 text-xs text-light"
            onClick={toggleSidebar}
          />
        )}
      </div>
      <MobileSidebar isOpen={sidebarOpen} />
      <div className={`${sidebarOpen ? "fixed" : "hidden"} w-full h-screen z-30`}>
        <div
          className={`h-screen w-full z-30`}
          style={{
            backdropFilter: sidebarOpen ? "blur(20px)" : "blur(0)",
          }}
        />
      </div>
    </div>
  )
}

export default MobileNav
