import React from "react"
import { Helmet } from "react-helmet"
import RightsImg from "../../assets/images/rights.png"
import Title from "../../components/title/title.component"
import { objectToSchema } from "../../helpers/functions"

function Rights(props) {
  return (
    <div className="container mx-auto">
      <script
        key={`rightsJSON`}
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
                  position: 1,
                  item: {
                    "@id": `${process.env.REACT_APP_URL}/rights`,
                    name: "منشور اخلاقی",
                    description: "منشور اخلاقی، باید‌ها و نباید‌های کاربران و لینوم",
                  },
                },
              ],
            })
          ),
        }}
      />
      <Helmet>
        <title>منشور اخلاقی | لینوم</title>
        <link rel="canonical" href={`${process.env.REACT_APP_URL}/rights`} />
        <meta
          name="description"
          content="لینوم یک پلتفرم آموزشی میکرولرنینگ است که با تکیه بر ویدئو های کپسولی و فشرده ، یادگیری دروس دانشگاهی را در سریع ترین زمان ممکن به ارمغان می آورد."
        />
      </Helmet>
      <div className="mx-auto text-center my-2">
        <Title mainTitle={true}>منشور اخلاقی</Title>
      </div>
      <div className="bg-orange-100 mx-auto py-3 px-3 my-2 rounded-lg">
        <img src={RightsImg} className="rounded-lg mb-4" alt="منشور اخلاقی" />
        <p className="leading-10 text-justify">
          اخلاق در لینوم اولویت است.
          <br /> اخلاق یک کلمه‌ی 5 حرفیست که در هر کدام از 5 حرف آن دنیایی نفهته است.
          در تهیه‌ی دوره‌ها و هزینه‌های آن، شفافیت حرف اول را میزند. اینجا خبری از
          گم‌شدن درصدهای درآمدی نیست. خبری از جواب ندادن‌ها و پشتیبانی بد نیست. ما به
          شما، کاربران سایت لینوم، متعد می‌شویم، یک بار از نظر قانونی و بار دیگر از
          نظر اخلاقی.
          <ul className="list-inside my-4 list-disc">
            <li>
              هزینه‌ی پرداختی شما در کم‌ترین و پایین‌ترین حالت ممکن خود قرار دارد و
              ما تمام سعیمان را می‌کنیم تا آموزش‌ها را در دسترس همگان قرار دهیم‌.
            </li>
            <li>به ارزش­هاي فرهنگي و اجتماعي و اصول اخلاقی پايبند باشيم.</li>
            <li>
              در هر حالتی منافع مشتریان را در اولویت قرار دهیم و تمام سعیمان را برای
              ارائه خدمات به بهترین نحو انجام دهیم.
            </li>
            <li>
              نسبت به توسعه و پشتیبانی از محصولات توجه کنیم و از هیچ تلاشی دریغ
              نکنیم.
            </li>
            <li>
              نسبت به مشکلات احتمالی بی‌تفاوت نبوده و به رشد و بهسازی در کم‌ترین زمان
              ممکن توجه ‌نمائیم.
            </li>
            <li>
              باور داريم که عزت، احترام و تکریم کاربران از مهم‌ترین مسئولیت‌های ماست
              و تمام تلاش خود را معطوف به حفظ شخصیت و جایگاه مراجعين در فرآیند
              ارتباطات متقابل نمایيم.
            </li>
            <li>
              به صحبت­ها و خواسته­های کاربران گوش فراداده و با انعطاف­پذیری معقول،
              خوش­روئی و احترام با آن‌ها رفتار کنیم.
            </li>
            <li>
              نجام امور کاربران را به شکل مؤثر و کارآمد در کوتاه‌ترین زمان ممکن ضروری
              دانسته و کوشش خواهيم کرد تا از اتلاف وقت آنان جلوگیری نمایيم.
            </li>
          </ul>
          از شما کاربران سایت لینوم و مصرف‌کنندگان این سرویس خواهشمندیم که از ما
          حمایت کنید و در صورت استفاده از دوره‌ها قبل از هر چیز اخلاقیات را رعایت
          فرمائید. دوره‌ها را با کسی به اشتراک نگذارید، زیرا که با همین به اشتراک
          گذاشتن‌ها ممکن است یک گروه کوچک با کلی انگیزه، زمین خورده و از ادامه‌ی
          خدمت‌رسانی به شما عزیزان بازماند. هوای هم‌دیگر را داشته باشید :)
        </p>
      </div>
    </div>
  )
}

export default Rights
