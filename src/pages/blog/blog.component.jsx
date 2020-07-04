import React from "react";
import { Helmet } from "react-helmet";

import BlogIntro from "../../components/blog-intro/blog-intro.component";
import NewPosts from "../../components/new-posts/new-posts.component";
import HotPosts from "../../components/hot-posts/hot-posts";

function Blog() {
    return (
        <div>
            <Helmet>
                <title>لینوم | بلاگ</title>
                <meta
                    name="description"
                    content="لینوم یک پلتفرم آموزشی میکرولرنینگ است که با تکیه بر ویدئو های کپسولی و فشرده ، یادگیری دروس دانشگاهی را در سریع ترین زمان ممکن به ارمغان می آورد."
                />
            </Helmet>
            <BlogIntro />
            <NewPosts />
            <HotPosts />
        </div>
    );
}

export default Blog;
