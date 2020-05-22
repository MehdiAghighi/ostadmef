import React from "react";

function NotFound(props) {
    return (
        <div className="h-screen">
            <div
                class="mx-5 mt-10 bg-red-100 border-t-4 border-red-500 rounded-b text-red-900 px-4 py-3 shadow-md"
                role="alert"
            >
                <div className="text-center">
                    <span>صفحه مورد نظر پیدا نشد</span>
                </div>
            </div>
        </div>
    );
}

export default NotFound;
