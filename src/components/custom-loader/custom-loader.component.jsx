import React from "react";
import Loader from "react-loader-spinner";

function CustomLoader(props) {
    return (
        <div className="flex justify-center">
            <Loader
                type="Triangle"
                className="inline-block mb-10"
                color="#ed8936"
            />
        </div>
    );
}

export default CustomLoader;
