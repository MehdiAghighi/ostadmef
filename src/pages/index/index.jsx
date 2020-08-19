import React from "react"
import { Helmet } from "react-helmet"

import "./index.style.scss"

import IndexIntro from "../../components/index-intro/index-intro.component"
import Partners from "../../components/partners/partners.component"
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
              contactPoint: [
                {
                  "@type": "ContactPoint",
                  telephone: "+98 21 4108 7182",
                  contactType: "پشتیبانی تلفنی",
                },
              ],
              sameAs: [
               //  "https://twitter.com/roocketir",
               //  "https://www.facebook.com/roocketi",
               //  "https://www.linkedin.com/company/roocketir",
               //  "https://www.instagram.com/roocketir",
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
          content="لینوم یک پلتفرم آموزشی میکرولرنینگ است که با تکیه بر ویدئو های کپسولی و فشرده ، یادگیری دروس دانشگاهی را در سریع ترین زمان ممکن به ارمغان می آورد."
        />
      </Helmet>
      <IndexIntro />
      <Partners />
      <TopCourses />
      <WhyLinom />
    </div>
  )
}

export default Index
