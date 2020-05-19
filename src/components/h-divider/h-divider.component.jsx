import React from "react";

function HDivider(props) {
    return (
        <div
            className={`bg-white h-10 lg:mx-5 md:mx-2 sm:mx-4 sm:block hidden ${props.className}`}
            style={{ width: 2 }}
        ></div>
    );
}

export default HDivider;
