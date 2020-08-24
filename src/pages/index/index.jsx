import React from "react"
import { Helmet } from "react-helmet"

import "./index.style.scss"

import IndexIntro from "../../components/index-intro/index-intro.component"
import TopCourses from "../../components/top-courses/top-courses.component"
import WhyLinom from "../../components/why-linom/why-linom.component"
import { objectToSchema } from "../../helpers/functions"

function Index(props) {
  return (
    <div>
      <script
        key={`indexJSON`}
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
              ],
            })
          ),
        }}
      />
      <script
        key={`indexJSONorg`}
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            objectToSchema({
              "@context": "http://schema.org",
              "@type": "Organization",
              name: "لینوم - اولین پلتفرم آموزشی میکرولرنینگ",
              url: `${process.env.REACT_APP_URL}`,
              logo: {
                "@type": "ImageObject",
                url: `${process.env.REACT_APP_API_DOMAIN}/logo.png`,
              },
              contactPoint: [
                {
                  "@type": "ContactPoint",
                  telephone: "+98 21 4108 7182",
                  contactType: "پشتیبانی تلفنی",
                },
              ],
              sameAs: [
                // "https://twitter.com/roocketir",
                // "https://www.facebook.com/roocketi",
                "https://linkedin.com/company/linom",
                "https://www.instagram.com/1linom",
                "https://t.me/linomsupport",
              ],
            })
          ),
        }}
      />
      <Helmet>
        <title>
          لینوم - پلتفرم آموزشی میکرولرنینگ با تکیه بر ویدیو‌های کپسولی شده
        </title>
        <link rel="canonical" href={`${process.env.REACT_APP_URL}`} />
        <meta
          name="description"
          content="لینوم اولین پلتفرم آموزشی میکرولرنینگ است که با تکیه بر ویدئو‌های کپسولی و فشرده، یادگیری دروس دانشگاهی و نرم‌افزارهای کاربردی را در سریع‌ترین زمان ممکن به ارمغان می‌آورد."
        />
        <meta
          name="keywords"
          value="،سامانه یادگیری لینوم،پلتفرم آموزشی میکرولرنینگ لینوم،همراه شما در یادگیری،میکرولرنینگ،آموزش به سبک میکرولرنینگ،آموزش گام به گام،جدیدترین متد آموزشی،سامانه یادگیری خرد،اولین پلتفرم میکرولرنینگ، لینوم پیشرو در میکرولرنینگ"
        />

        <meta name="twitter:card" content="summary" />
        <meta
          name="twitter:title"
          content="لینوم - پلتفرم آموزشی میکرولرنینگ با تکیه بر ویدیو‌های کپسولی شده"
        />
        <meta
          name="twitter:description"
          content="لینوم اولین پلتفرم آموزشی میکرولرنینگ است که با تکیه بر ویدئو‌های کپسولی و فشرده، یادگیری دروس دانشگاهی و نرم‌افزارهای کاربردی را در سریع‌ترین زمان ممکن به ارمغان می‌آورد."
        />
        <meta
          property="twitter:image"
          content={`${process.env.REACT_APP_API_DOMAIN}/logo.png`}
        />

        <meta
          property="og:title"
          content="لینوم - پلتفرم آموزشی میکرولرنینگ با تکیه بر ویدیو‌های کپسولی شده"
        />
        <meta property="og:type" content="article" />
        <meta property="og:url" content={`${process.env.REACT_APP_URL}/`} />
        <meta
          property="og:image"
          content={`${process.env.REACT_APP_API_DOMAIN}/logo.png`}
        />
        <meta
          property="og:description"
          content={
            "لینوم اولین پلتفرم آموزشی میکرولرنینگ است که با تکیه بر ویدئو‌های کپسولی و فشرده، یادگیری دروس دانشگاهی و نرم‌افزارهای کاربردی را در سریع‌ترین زمان ممکن به ارمغان می‌آورد."
          }
        />
        <meta property="og:site_name" content="لینوم" />
      </Helmet>
      <IndexIntro />
      <TopCourses />
      <WhyLinom />
    </div>
  )
}

export default Index
