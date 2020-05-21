import React from "react";
import { Clock } from "../icon/icon.component";

function CourseSection({ video, title }) {
    return (
        <div className="flex flex-row justify-between items-center py-2 px-2 border-b border-gray-400">
            <span className="text-lg font-bold cursor-pointer transition-all duration-100 hover:text-orange-500">
                {video.order}. {title}: {video.title}
            </span>
            <span className="text-gray-600 flex flex-row">
                {video.human_length}
                <Clock className="text-xs mr-3" />
            </span>
        </div>
    );
}

export default CourseSection;
