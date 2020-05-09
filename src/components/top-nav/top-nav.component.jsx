import React from "react";

import DesktopNav from "../desktop-nav/desktop-nav.component";
import MobileNav from "../mobile-nav/mobile-nav.component";

function TopNav() {
   return (
      <div className="">
         <DesktopNav />
         <MobileNav />
      </div>
   );
}

export default TopNav;
