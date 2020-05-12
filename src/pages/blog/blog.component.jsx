import React from "react";
import BlogIntro from "../../components/blog-intro/blog-intro.component";
import NewPosts from "../../components/new-posts/new-posts.component";
import HotPosts from "../../components/hot-posts/hot-posts";

function Blog() {
   return (
      <div>
         <BlogIntro />
         <NewPosts />
         <HotPosts />
      </div>
   );
}

export default Blog;
