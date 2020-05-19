import React from "react";
import { Clock } from "../icon/icon.component";

function CourseSection(props) {
    return (
        <div className="flex flex-row justify-between items-center py-2 px-2 border-b border-gray-400">
            <span className="text-lg font-bold cursor-pointer transition-all duration-100 hover:text-orange-500">
                دوره آشنایی با پایتون: انواع متغیر‌ها در پایتون
            </span>
            <span className="text-gray-600 flex flex-row">
                1:07:36
                <Clock className="text-xs mr-1" />
            </span>
        </div>
    );
}

export default CourseSection;
