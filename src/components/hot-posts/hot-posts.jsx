import React from "react";

import Title from "../title/title.component";

import HotPostsSlider from "../hot-posts-slider/hot-posts-slider.component";

function HotPosts(props) {
   return (
      <div className="container mx-auto mt-8">
         <div>
            <Title>جدیدترین پست‌ها</Title>
         </div>
         <div>
            <HotPostsSlider />
         </div>
      </div>
   );
}

export default HotPosts;
