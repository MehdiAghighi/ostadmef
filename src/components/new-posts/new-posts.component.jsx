import React, { useEffect, useState } from "react";

import Title from "../title/title.component";
import NewPostsSlider from "../new-posts-slider/new-posts-slider.component";
import { request } from "../../helpers/api";
import CustomLoader from "../custom-loader/custom-loader.component";

function NewPosts(props) {
   const [newPosts, setNewPosts] = useState([]);
   const [isLoading, setIsLoading] = useState(true);

   useEffect(() => {
      let doit = true;
      if (doit) {
         request(`/blogpost/new`, (resp) => {
            setNewPosts(resp.data.posts);
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
            <Title>جدیدترین پست‌ها</Title>
         </div>
         <div>
            {isLoading ? <CustomLoader /> : <NewPostsSlider posts={newPosts} />}
         </div>
      </div>
   );
}

export default NewPosts;
