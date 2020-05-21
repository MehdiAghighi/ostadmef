import React from "react";
import { NavLink } from "react-router-dom";

function MobileNavLink(props) {
    return (
        <NavLink
            {...props}
            to={props.to}
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
                <h1 className="leading-loose relative m-1">{props.children}</h1>
            </div>
        </NavLink>
    );
}

export default MobileNavLink;
