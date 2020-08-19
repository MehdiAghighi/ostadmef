import React from "react";
import { NavLink } from "react-router-dom";

function DesktopNavLink(props) {
    return (
        <NavLink
            {...props}
            exact
            to={props.to ? props.to : ""}
            activeClassName={`${
                !props.disabled ? "text-xl text-blue-500 active-link" : ""
            }`}
            className={`px-8 nav-link ${
                !props.disabled ? "hover:text-blue-500" : "cursor-not-allowed"
            }`}
        >
            <div className="relative">
                <span className="leading-loose relative m-1">{props.children}</span>
                <div
                    className="link-bottom-border bg-blue-500 absolute w-full rounded-full hidden"
                    style={{ bottom: "4px", height: "3px" }}
                ></div>
            </div>
        </NavLink>
    );
}

export default DesktopNavLink;
