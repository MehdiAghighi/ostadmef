import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import API from "../../helpers/api";
import CustomLoader from "../../components/custom-loader/custom-loader.component";
import { toast } from "react-toastify";
import CourseSections from "../../components/course-sections/course-sections.component";
import ShowVideo from "../../components/show-video/show-video.component";

function Video(props) {
   const { slug } = useParams();
   const [video, setVideo] = useState({});
   const [course, setCourse] = useState({});
   const [isLoading, setIsLoading] = useState(true);

   useEffect(() => {
      API.get(`/video/admin/${slug}`)
         .then((resp) => {
            return resp.data.video;
         })
         .then((video) => {
            setVideo(video);
            return API.get(`/course/${video.course_id}`);
         })
         .then((resp) => {
            setCourse(resp.data.course);
            setIsLoading(false);
         })
         .catch((err) => {
            if (err.response.data) {
                toast.error(err.response.data.message);
            } else {
                toast.error("دریافت اطلاعات ویدیو موفقیت آمیز نبود");
            }
            setIsLoading(false);
         });
   }, [slug]);
   return isLoading ? (
      <CustomLoader />
   ) : video.id ? (
      course.id ? (
         <div className="">
            <div className="container mx-auto">
               <ShowVideo video={video} />
            </div>
            <CourseSections course={course} activeId={video.id} />
         </div>
      ) : null
   ) : (
      <div className="flex flex-row justify-center">
         <span className="text-xl text-red-500">
            شما به این ویدیو دسترسی ندارید
         </span>
      </div>
   );
}

export default Video;
