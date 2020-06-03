import React, { useEffect, useState } from "react";

import Title from "../title/title.component";

import HotPostsSlider from "../hot-posts-slider/hot-posts-slider.component";
import { request } from "../../helpers/api";
import CustomLoader from "../custom-loader/custom-loader.component";

function HotPosts(props) {
   const [hotPosts, setHotPosts] = useState([]);
   const [isLoading, setIsLoading] = useState(true);

   useEffect(() => {
      let doit = true;
      if (doit) {
         request(`/blogpost/hot`, (resp) => {
            setHotPosts(resp.data.posts);
            setIsLoading(false);
         });
      }

      return () => {
         doit = false;
      };
   }, []);
   return (
      <div className="container mx-auto mt-8">
         <div>
            <Title>محبوب‌ترین پست‌ها</Title>
         </div>
         <div>
            {isLoading ? <CustomLoader /> : <HotPostsSlider posts={hotPosts} />}
         </div>
      </div>
   );
}

export default HotPosts;
