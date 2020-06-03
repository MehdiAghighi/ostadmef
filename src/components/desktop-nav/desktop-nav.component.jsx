import React from "react";

import "./desktop-nav.style.scss";

import { NavLink, Link } from "react-router-dom";
import Button from "../button/button.component";
import DesktopNavLink from "../desktop-nav-link/desktop-nav-link.component";

import { useAuthDispatch, useAuthState } from "../../contexts/auth-context";

function DesktopNav(props) {
   const setAuthModalOpen = useAuthDispatch();
   const { isLoggedIn, user } = useAuthState();
   return (
      <div className="container mx-auto">
         <nav className="hidden md:flex md:flex-row justify-between items-center">
            <div>
               <NavLink to="/">
                  <h1 className="font-bold text-4xl leading-loose">
                     لــــینوم
                  </h1>
               </NavLink>
            </div>
            <div className="flex flex-row justify-center items-center">
               <DesktopNavLink to="/">خانه</DesktopNavLink>
               <DesktopNavLink to="/courses">دوره‌ها</DesktopNavLink>
               <DesktopNavLink to="/about-us">درباره‌ما</DesktopNavLink>
               <DesktopNavLink to="/blog">بلاگ</DesktopNavLink>
            </div>
            <div>
               {!isLoggedIn ? (
                  <Button
                     btnBgClass="bg-orange-500"
                     btnTextClass="text-white"
                     className="font-bold leading-loose px-6 py-1"
                     onClick={() => setAuthModalOpen({ type: "TOGGLE_MODAL" })}
                  >
                     ورود/ثبت‌نام
                  </Button>
               ) : (
                  <div className="relative dropdown">
                     <span className="text-blue-1000 dropdown-toggle">
                        سلام، <span className="font-bold">{user.phone}</span>
                        <ul className="absolute dropdown-menu bg-gray-100 border border-gray-300 rounded-lg w-full mr-8 z-50">
                           <Link to="/profile/courses">
                              <li className="hover:bg-gray-300 transition-all duration-150 py-2 px-2">
                                 دوره‌های من
                              </li>
                           </Link>
                           <Link to="/logout">
                              <li className="hover:bg-gray-300 transition-all duration-150 py-2 px-2">
                                 خروج
                              </li>
                           </Link>
                        </ul>
                     </span>
                  </div>
               )}
            </div>
         </nav>
      </div>
   );
}

export default DesktopNav;
