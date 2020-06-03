import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Helmet } from "react-helmet";

import API, { request } from "../../helpers/api";
import CustomLoader from "../../components/custom-loader/custom-loader.component";
import CourseSections from "../../components/course-sections/course-sections.component";
import ShowVideo from "../../components/show-video/show-video.component";
import { toast } from "react-toastify";

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
            return resp.data.course;
         })
         .then((course) => {
            setCourse(course);
            setIsLoading(false);
         })
         .catch((err) => {
            if (err.response) {
               toast.error(err.response.data.message);
            } else {
               toast.error("مشکلی در ارتباط با سرور پیش آمده است");
            }
         });
      // async function fetchData() {
      //    request(`/video/admin/${slug}`, async (resp) => {
      //       await setVideo(resp.data.video);
      //       request(`/course/${video.course_id}`, async (resp) => {
      //          setCourse(resp.data.course);
      //          setIsLoading(false);
      //       });
      //    });
      // }
      // fetchData();
   }, [slug]);
   return isLoading ? (
      <CustomLoader />
   ) : video.id ? (
      course.id ? (
         <div className="">
            <Helmet>
               <title>لینوم | {video.title}</title>
            </Helmet>
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
