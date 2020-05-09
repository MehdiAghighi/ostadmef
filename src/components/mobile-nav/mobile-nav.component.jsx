import React, { useState } from "react";

import { Hamburger, Cross } from "../icon/icon.component";
import { NavLink } from "react-router-dom";

import MobileSidebar from "../mobile-siderbar/mobile-siderbar.component";

function MobileNav() {
   const [sidebarOpen, setSidebarOpen] = useState(false);

   const toggleSidebar = () => {
      if (sidebarOpen) {
         document.body.style.overflow = "unset";
      } else {
         document.body.style.overflow = "hidden";
      }
      setSidebarOpen((prev) => !prev);
   };

   return (
      <div className="w-full block md:hidden">
         <div className="py-4 px-4 flex flex-row justify-between items-center">
            <NavLink to="/">
               <h1 className="font-bold text-4xl leading-tight">لــــینوم</h1>
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
         <div
            className={`${
               sidebarOpen ? "fixed" : "hidden"
            } w-full h-screen z-30`}
         >
            <div
               className={`h-screen w-full z-30`}
               style={{
                  backdropFilter: sidebarOpen ? "blur(20px)" : "blur(0)",
               }}
            />
         </div>
      </div>
   );
}

export default MobileNav;
