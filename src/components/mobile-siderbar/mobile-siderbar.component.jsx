import React from "react";
import { NavLink } from "react-router-dom";

function MobileSidebar({ isOpen }) {
   return (
      <div
         className="h-screen right-0 top-0 fixed w-1/2 bg-white z-50 transition-all duration-500"
         style={{
            transform: isOpen ? "translateX(0)" : "translateX(100%)",
         }}
      >
         <div className="py-2 px-2 mx-auto">
            <div className="text-center">
               <NavLink to="/">
                  <h1 className="font-bold text-4xl leading-loose">
                     لــــینوم
                  </h1>
               </NavLink>
            </div>
            <div className="flex flex-col">
               <NavLink
                  to="/"
                  activeClassName="text-xl text-blue-500 active-link"
                  className="px-8 nav-link hover:text-blue-500"
               >
                  <div className="relative">
                     <div
                        className="link-bottom-border bg-orange-500 absolute rounded-full hidden"
                        style={{
                           top: "26.5%",
                           right: -10,
                           height: "55%",
                           width: 3,
                        }}
                     ></div>
                     <h1 className="leading-loose relative m-1">خانه</h1>
                  </div>
               </NavLink>
               <NavLink
                  to="/course"
                  activeClassName="text-xl text-blue-500 active-link"
                  className="px-8 nav-link hover:text-blue-500"
               >
                  <div className="relative">
                     <div
                        className="link-bottom-border bg-orange-500 absolute rounded-full hidden"
                        style={{
                           top: "26.5%",
                           right: -10,
                           height: "55%",
                           width: 3,
                        }}
                     ></div>
                     <h1 className="leading-loose relative m-1">دوره‌ها</h1>
                  </div>
               </NavLink>
               <NavLink
                  to="/about"
                  activeClassName="text-xl text-blue-500 active-link"
                  className="px-8 nav-link hover:text-blue-500"
               >
                  <div className="relative">
                     <div
                        className="link-bottom-border bg-orange-500 absolute rounded-full hidden"
                        style={{
                           top: "26.5%",
                           right: -10,
                           height: "55%",
                           width: 3,
                        }}
                     ></div>
                     <h1 className="leading-loose relative m-1">درباره‌ما</h1>
                  </div>
               </NavLink>
               <NavLink
                  to="/blog"
                  activeClassName="text-xl text-blue-500 active-link"
                  className="px-8 nav-link hover:text-blue-500"
               >
                  <div className="relative">
                     <div
                        className="link-bottom-border bg-orange-500 absolute rounded-full hidden"
                        style={{
                           top: "26.5%",
                           right: -10,
                           height: "55%",
                           width: 3,
                        }}
                     ></div>
                     <h1 className="leading-loose relative m-1">بلاگ</h1>
                  </div>
               </NavLink>
            </div>
         </div>
      </div>
   );
}

export default MobileSidebar;
