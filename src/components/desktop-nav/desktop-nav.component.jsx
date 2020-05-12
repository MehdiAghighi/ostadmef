import React from "react";

import "./desktop-nav.style.scss";

import { NavLink } from "react-router-dom";
import Button from "../button/button.component";
import DesktopNavLink from "../desktop-nav-link/desktop-nav-link.component";

function DesktopNav(props) {
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
               <Button
                  btnBgClass="bg-orange-500"
                  btnTextClass="text-white"
                  className="font-blod leading-loose px-6 py-1"
               >
                  ورود/ثبت‌نام
               </Button>
            </div>
         </nav>
      </div>
   );
}

export default DesktopNav;
