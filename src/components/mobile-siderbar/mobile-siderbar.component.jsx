import React from "react";
import { NavLink } from "react-router-dom";
import MobileNavLink from "../mobile-nav-link/mobile-nav-link.component";

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
                    <MobileNavLink to="/" exact>
                        خانه
                    </MobileNavLink>
                    <MobileNavLink to="/courses" exact>
                        دوره‌ها
                    </MobileNavLink>
                    <MobileNavLink to="/about-us" exact>
                        درباره‌ما
                    </MobileNavLink>
                    {/* <MobileNavLink to="/blog" exact>
                        بلاگ
                    </MobileNavLink> */}
                </div>
            </div>
        </div>
    );
}

export default MobileSidebar;
