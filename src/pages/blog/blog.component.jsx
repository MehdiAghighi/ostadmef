import React from "react";
import { Helmet } from "react-helmet";

import BlogIntro from "../../components/blog-intro/blog-intro.component";
import NewPosts from "../../components/new-posts/new-posts.component";
import HotPosts from "../../components/hot-posts/hot-posts";
import BlogArchive from "../../components/blog-archive/blog-archive.component";
import { objectToSchema } from "../../helpers/functions";

function Blog() {
    return (
      <div>
        <script
          key={`blogJSON`}
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(
              objectToSchema({
                "@context": "http://schema.org",
                "@type": "BreadcrumbList",
                itemListElement: [
                  {
                    "@type": "ListItem",
                    position: 1,
                    item: {
                      "@id": `${process.env.REACT_APP_URL}/`,
                      name: "لینوم",
                      description: "لینوم - پلتفرم آموزشی میکرولرنینگ"
                    },
                  },
                  {
                    "@type": "ListItem",
                    position: 2,
                    item: {
                      "@id": `${process.env.REACT_APP_URL}/blog`,
                      name: "بلاگ",
                      description: "مقالات"
                    },
                  },
                ],
              })
            ),
          }}
        />
        <Helmet>
          <title>مقالات آموزشی | لینوم</title>
          <link rel="canonical" href={`${process.env.REACT_APP_URL}/blog`} />
          <meta
            name="description"
            content="لینوم یک پلتفرم آموزشی میکرولرنینگ است که با تکیه بر ویدئو های کپسولی و فشرده ، یادگیری دروس دانشگاهی را در سریع ترین زمان ممکن به ارمغان می آورد."
          />
        </Helmet>
        <main>
          <BlogIntro />
          <BlogArchive />
        </main>
        {/* <NewPosts /> */}
        {/* <HotPosts /> */}
      </div>
    )
}

export default Blog;
