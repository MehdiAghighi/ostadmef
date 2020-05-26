import React from "react";
import { Clock } from "../icon/icon.component";
import { Link } from "react-router-dom";

function CourseSection({ video, title, active }) {
   return (
      <div className="flex flex-row justify-between items-center py-2 px-2 border-b border-gray-400">
         <Link to={`/video/${video.id}`}>
            <span
               className={`text-lg font-bold cursor-pointer ${
                  active ? "text-orange-500" : ""
               } transition-all duration-100 hover:text-orange-500`}
            >
               {video.order}. {title}: {video.title}
            </span>
         </Link>
         <span className="text-gray-600 flex flex-row">
            {video.human_length}
            <Clock className="text-xs mr-3" />
         </span>
      </div>
   );
}

CourseSection.defaultProps = {
   active: false,
};

export default CourseSection;
