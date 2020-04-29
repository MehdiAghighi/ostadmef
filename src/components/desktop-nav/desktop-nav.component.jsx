import React from "react";

import "./desktop-nav.style.scss";

import { NavLink } from "react-router-dom";
import Button from "../button/button.component";

function DesktopNav(props) {
   return (
      <nav className="flex flex-row justify-between items-center">
         <div>
            <NavLink to="/">
               <h1 className="font-bold text-4xl leading-loose">لــــینوم</h1>
            </NavLink>
         </div>
         <div className="flex flex-row justify-center items-center">
            <NavLink
               to="/"
               activeClassName="text-xl text-blue-500 active-link"
               className="px-8 nav-link hover:text-blue-500"
            >
               <div className="relative">
                  <h1 className="leading-loose relative m-1">خانه</h1>
                  <div
                     className="link-bottom-border bg-blue-500 absolute w-full rounded-full hidden"
                     style={{ bottom: "4px", height: "3px" }}
                  ></div>
               </div>
            </NavLink>
            <NavLink
               to="/course"
               activeClassName="text-xl text-blue-500 active-link"
               className="px-8 nav-link hover:text-blue-500"
            >
               <div className="relative">
                  <h1 className="leading-loose relative m-1">دوره‌ها</h1>
                  <div
                     className="link-bottom-border bg-blue-500 absolute w-full rounded-full hidden"
                     style={{ bottom: "4px", height: "3px" }}
                  ></div>
               </div>
            </NavLink>
            <NavLink
               to="/about"
               activeClassName="text-xl text-blue-500 active-link"
               className="px-8 nav-link hover:text-blue-500"
            >
               <div className="relative">
                  <h1 className="leading-loose relative m-1">درباره‌ما</h1>
                  <div
                     className="link-bottom-border bg-blue-500 absolute w-full rounded-full hidden"
                     style={{ bottom: "4px", height: "3px" }}
                  ></div>
               </div>
            </NavLink>
            <NavLink
               to="/blog"
               activeClassName="text-xl text-blue-500 active-link"
               className="px-8 nav-link hover:text-blue-500"
            >
               <div className="relative">
                  <h1 className="leading-loose relative m-1">بلاگ</h1>
                  <div
                     className="link-bottom-border bg-blue-500 absolute w-full rounded-full hidden"
                     style={{ bottom: "4px", height: "3px" }}
                  ></div>
               </div>
            </NavLink>
         </div>
         <div>
            {/* <button className="px-6 py-1 text-white bg-orange-500 rounded-lg font-blod leading-loose">
               ورود/ثبت‌نام
            </button> */}
            <Button
               btnBgClass="bg-orange-500"
               btnTextClass="text-white"
               className="font-blod leading-loose px-6 py-1"
            >
               ورود/ثبت‌نام
            </Button>
         </div>
      </nav>
   );
}

export default DesktopNav;
