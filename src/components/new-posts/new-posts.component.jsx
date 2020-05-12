import React from "react";

import Title from "../title/title.component";
import NewPostsSlider from "../new-posts-slider/new-posts-slider.component";

function NewPosts(props) {
   return (
      <div className="container mx-auto mt-8">
         <div>
            <Title>جدیدترین پست‌ها</Title>
         </div>
         <div>
            <NewPostsSlider />
         </div>
      </div>
   );
}

export default NewPosts;
