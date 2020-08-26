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
                      description: "لینوم - پلتفرم آموزشی میکرولرنینگ",
                    },
                  },
                  {
                    "@type": "ListItem",
                    position: 2,
                    item: {
                      "@id": `${process.env.REACT_APP_URL}/blog`,
                      name: "بلاگ",
                      description: "مقالات",
                    },
                  },
                ],
              })
            ),
          }}
        />
        <Helmet>
          <title>مجله‌ی آموزشی | لینوم</title>
          <link rel="canonical" href={`${process.env.REACT_APP_URL}/blog`} />
          <meta
            name="description"
            content="مجله‌ی آموزشی لینوم با تکیه بر متد میکرولرنینگ تهیه‌شده‌است."
          />
          <meta
            name="keywords"
            content="مجله آموزشی لینوم،آموزش های خرد،سامانه یادگیری لینوم،میکرولرنینگ به سبک متن و ویدئو،آموزش فشرده"
          />
          <meta name="twitter:card" content="summary" />
          <meta name="twitter:title" content="مجله‌ی آموزشی | لینوم" />
          <meta
            name="twitter:description"
            content="مجله‌ی آموزشی لینوم با تکیه بر متد میکرولرنینگ تهیه‌شده‌است."
          />
          <meta
            property="twitter:image"
            content={`${process.env.REACT_APP_API_DOMAIN}/logo.png`}
          />
          <meta
            property="og:image"
            content={`${process.env.REACT_APP_API_DOMAIN}/logo.png`}
          />

          <meta property="og:title" content="مجله‌ی آموزشی | لینوم" />
          <meta property="og:type" content="website" />
          <meta property="og:url" content={`${process.env.REACT_APP_URL}/blog`} />
          <meta
            property="og:description"
            content="مجله‌ی آموزشی لینوم با تکیه بر متد میکرولرنینگ تهیه‌شده‌است"
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
