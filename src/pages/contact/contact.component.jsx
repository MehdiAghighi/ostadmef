import React from "react"
import ContactImg from "../../assets/images/contact-f.webp"
import { Helmet } from "react-helmet"
import Title from "../../components/title/title.component"
import { objectToSchema } from "../../helpers/functions"

function Contact(props) {
  return (
    <div className="container mx-auto">
      <script
        key={`contactJSON`}
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
                    "@id": `${process.env.REACT_APP_URL}/contact`,
                    name: "تماس با ما",
                    description: "تماس با ما",
                  },
                },
              ],
            })
          ),
        }}
      />
      <Helmet>
        <title>تماس با ما | لینوم</title>
        <link rel="canonical" href={`${process.env.REACT_APP_URL}/contact`} />
        <meta name="description" content="راه‌های برقراری ارتباط با لینوم" />
        <meta name="twitter:card" content="summary" />
        <meta
          name="twitter:title"
          content="تماس با ما | لینوم"
        />
        <meta name="twitter:description" content="راه‌های برقراری ارتباط با لینوم" />
        <meta
          property="twitter:image"
          content={`${process.env.REACT_APP_API_DOMAIN}/logo.png`}
        />

        <meta property="og:title" content="تماس با ما | لینوم" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={`${process.env.REACT_APP_URL}/contact`} />
        <meta
          property="og:image"
          content={`${process.env.REACT_APP_API_DOMAIN}/logo.png`}
        />
        <meta property="og:description" content="راه‌های برقراری ارتباط با لینوم" />
        <meta property="og:site_name" content="لینوم" />
      </Helmet>
      <div className="mx-auto text-center my-2">
        <Title mainTitle={true}>تماس با ما</Title>
      </div>
      <div className="bg-orange-100 py-3 px-3 my-2 rounded-lg">
        <img src={ContactImg} className="rounded-lg mb-4" alt="تماس با ما" />
        <p className="leading-10 text-justify text-xl">
          دفتر لینوم به نشانی زیر است، اما امکان پذیرایی از مراجعین عزیز بدون هماهنگی
          قبلی وجود نخواهد داشت.
          <br />
          <span className="text-teal-700">
            خیابان مطهری، نرسیده به خیابان سهروردی، جنب بانک پاسارگاد، پلاک 94 ، طبقه
            اول، شتابدهنده تریگ‌آپ
          </span>
          <br />
          شماره‌ی تماس: 021 41087181
          <br />
          <a
            className="text-blue-500 hover:text-purple-700 transition-all duration-150"
            href="mailto:linominfo@yahoo.com"
          >
            ایمیل : linominfo@yahoo.com
          </a>
        </p>
      </div>
    </div>
  )
}

export default Contact
