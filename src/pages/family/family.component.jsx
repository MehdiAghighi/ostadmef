import React from "react"
import { Helmet } from "react-helmet"

import Amir from "../../assets/images/amir.jpg"
import Nima from "../../assets/images/nima.jpg"
import Mohamadreza from "../../assets/images/mohamadreza.jpg"
import Eghbal from "../../assets/images/eghbal.jpg"
import Mahdis from "../../assets/images/mahdis.jpg"
import Faeze from "../../assets/images/faeze.jpg"
import Shayan from "../../assets/images/shayan.jpg"
import Orange from "../../assets/images/orange.jpg"
import Zahra from "../../assets/images/zahra.jpg"
import Alireza from "../../assets/images/alireza.jpeg"

import Title from "../../components/title/title.component"
import { objectToSchema } from "../../helpers/functions"

function Family(props) {
  return (
    <div className="container mx-auto">
      <script
        key={`familyJSON`}
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
                    "@id": `${process.env.REACT_APP_URL}/family`,
                    name: "خانواده‌ی ما",
                    description: "تیم لینوم",
                  },
                },
              ],
            })
          ),
        }}
      />
      <Helmet>
        <title>خانواده‌ی ما | لینوم</title>
        <link rel="canonical" href={`${process.env.REACT_APP_URL}/family`} />
        <meta
          name="description"
          content="در لینوم همه یک خانواده‌ هستیم که با تمام توان دورهم جمع شدیم تا با کیفیت‌ترین محتوا رو به شما ارائه دهیم!"
        />
        <meta
          name="keywords"
          content="اقبال شیراسب،محمدرضا مشهدی،نیما گوران، امیرمحمد عقیقی،فائزه محتهدی،استراتژیست محتوا،گرافیست،مارکتینگ،طراح رابط کاربری،کدنویس بک اند،سئوکار،تدوینگر،طراح هویت بصری،مدیر اجرایی"
        />
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:title" content="خانواده‌ی ما | لینوم" />
        <meta
          name="twitter:description"
          content="در لینوم همه یک خانواده‌ هستیم که با تمام توان دورهم جمع شدیم تا با کیفیت‌ترین محتوا رو به شما ارائه دهیم!"
        />
        <meta
          property="twitter:image"
          content={`${process.env.REACT_APP_API_DOMAIN}/logo.png`}
        />

        <meta property="og:title" content="خانواده‌ی ما | لینوم" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={`${process.env.REACT_APP_URL}/family`} />
        <meta
          property="og:image"
          content={`${process.env.REACT_APP_API_DOMAIN}/logo.png`}
        />
        <meta
          property="og:description"
          content="در لینوم همه یک خانواده‌ هستیم که با تمام توان دورهم جمع شدیم تا با کیفیت‌ترین محتوا رو به شما ارائه دهیم!"
        />
        <meta property="og:site_name" content="لینوم" />
      </Helmet>
      <div className="mx-auto text-center my-2">
        <Title mainTitle={true}>خانواده‌ی لینوم</Title>
      </div>
      <div className="bg-orange-100 mx-auto rounded-lg py-3 px-3 sm:w-2/3 w-full">
        <div className="flex flex-col">
          <p className="leading-10 text-justify text-lg my-2">
            در لینوم همه یه خانواده‌ایم و فارغ از این که هر کدوم از ما، کدوم بخش از
            کار رو به عهده داره، از بودن در کنار هم لذت می‌بریم. هیچ کدوم از ما از
            اون دست از آدم‌ها نیستیم که ادعامون گوش فلک رو کر کنه و ماها همیشه سعی
            می‌کنیم توی هر زمینه‌ای که وارد می‌شیم رو به رشد باشیم و در هر موقعیتی
            پیشرفت کنیم.
          </p>
          <h4 className="text-5xl font-bold text-blue-1000 mt-3">تیم لینوم</h4>
          <div className="flex flex-col items-center justify-center">
            <img
              src={Amir}
              className="rounded-lg my-2"
              width="200"
              alt="امیرمحمد عقیقی"
            />
            <p className="mx-2 my-2 leading-10 text-justify text-lg">
              امیرمحمد عقیقی: مدیر عامل لینوم
              <br />
              امیر اونیه که همیشه دنبال چالش های جدیده و توی شرایط پایدار و استیبل
              دووم نمیاره و حوصلش سر میره. این باعث میشه که رو به جلو فکر کنه و باعث
              پیشرفت و انگیزه بشه <br />
              همه چیز از امیر و اقبال شروع شد! امیر همون کسی هست که بچه‌ها رو دور هم
              جمع کرد و باعث شکل‌گیری لینوم شد. آرامش و خوش‌بینی همیشگی امیر باعث شده
              تا تو سخت‌ترین روزها هم، کسی کم نیاره و هیچوقت نذاشته انگیزه بچه ها کم
              بشه.
            </p>
          </div>
          <div className="flex flex-col items-center justify-center">
            <img
              src={Alireza}
              className="rounded-lg my-2"
              width="200"
              alt="علیرضا رنجبر شورابی"
            />
            <p className="mx-2 my-2 leading-10 text-justify text-lg">
              علیرضا رنجبر شورابی: طراح ارشد <br />
              رفتار آقای رنجبر یکی از افراد باتجربه و همه فن حریف لینوم محسوب میشن و
              همیشه تمامی مسائل رو از دید متفاوتی می‌بینن و بسیار جزئی نگر
              هستند.ایشون از پیشتازان گیمیفیکیشن در ایران هستند و دارن روی کلی فیچر
              جدید و جذاب کار میکنن که بزودی طعم آموزش هامون رو عوض میکنند. ایشون
              الان از استکهلم به صورت دورکاری با لینوم کار میکنند
            </p>
          </div>
          <div className="flex flex-col items-center justify-center">
            <img
              src={Nima}
              className="rounded-lg my-2"
              width="200"
              alt="نیما گوران"
            />
            <p className="mx-2 my-2 leading-10 text-justify text-lg">
              نیما گوران: مدیر مارکتینگ <br />
              همه نیما رو با سخت‌گیری‌هاش می‌شناسن و تا حالا نشده کسی از زیر تیغ دقت
              و ایده‌آل گرایی نیما، جون سالم به در ببره. این کمال‌گرایی مثل یک ویروس
              تو کل تیم پخش شده و دیگه کسی به کم قانع نیست! وجود نیما در لینوم از
              واجباته چون اونیه که هیچی یادش نمیره و نمیذاره جایی کاری نیمه تموم
              بمونه.
            </p>
          </div>
          <div className="flex flex-col items-center justify-center">
            <img
              src={Mohamadreza}
              className="rounded-lg my-2"
              width="200"
              alt="محمد رضا مشهدی"
            />
            <p className="mx-2 my-2 leading-10 text-justify text-lg">
              محمدرضا مشهدی: طراح محصول <br />
              یک آدم نکته سنج و حرفه‌ای! محمدرضا تو کار خیلی دقیق هست و همین باعث شده
              همیشه بهترین طرح‌هارو بزنه و کسی از دیدن طرح‌هاش خسته نشه. (سایت
              قشنگ‌مون هم، حاصل خوش فکری ایشونه!) محمدرضا اونیه که نمیذاره کسی توی
              تیم حالش بد بمونه و همیشه با حرف ها و شوخی هاش حال تیم رو خوب می‌کنه.
            </p>
          </div>
          <div className="flex flex-col items-center justify-center">
            <img
              src={Eghbal}
              className="rounded-lg my-2"
              width="200"
              alt="اقبال شیراسب"
            />
            <p className="mx-2 my-2 leading-10 text-justify text-lg">
              اقبال شیراسب: مسئول فنی <br />
              دلگرمی روزهای سخت! درست تو اون لحظه که داری به آرامش می‌رسی، اقبال با
              چالش‌های جدید میاد سراغت و همین باعث شده که خلاقیت و خوش فکر بودنش به
              بقیه تیم هم منتقل بشه.اقبال واقعا خوش قوله و ددلاین هاش یک روز هم عقب
              جلو نمیشه .
            </p>
          </div>
          <div className="flex flex-col items-center justify-center">
            <img
              src={Faeze}
              className="rounded-lg my-2"
              width="200"
              alt="فائزه مجتهدی"
            />
            <p className="mx-2 my-2 leading-10 text-justify text-lg">
              فائزه مجتهدی: برنامه‌نویس فرانت‌ اِند، مسئول دپارتمان فنی و مهندسی{" "}
              <br />
              کافیه تا از فائزه تو یک ‌کاری کمک بخوای تا ببینی چجوری بیش‌تر از خودت،
              نسبت به اون‌کار دل می‌سوزونه! خیلی اهل تلاش و پیشرفته و همیشه کار‌ها رو
              با نهایت دقت و برنامه‌ریزی پیش می‌بره!
            </p>
          </div>
          <div className="flex flex-col items-center justify-center">
            <img
              src={Shayan}
              className="rounded-lg my-2"
              width="200"
              alt="شایان مینایی"
            />
            <p className="mx-2 my-2 leading-10 text-justify text-lg">
              سید شایان مینایی: تدوین‌گر و موشن گرافیست <br />
              هرکاری به شایان سپرده شه، در نهایت سرعت به نتیجه می‌رسه. ما تاحالا از
              شایان کم صبری ندیدیم، تو سخت‌ترین روزها هم کنار تیم بوده و در نهایت
              حوصله و خوش اخلاقی کارها رو پیش برده.شایان نمیذاره کاری روی زمین بمونه
              و تا حالا هم نشده کاری رو قبول نکنه . امیرحسین منصوریان: دیجیتال مارکتر
              و تحلیلگر امیرحسین با دقتی مثال زدنی حواسش به تبلیغات لینوم توی جاهای
              مختلف هست و همیشه کارش با اعداد و ارقامه و یک تحلیلگر خوبه . امیرحسین
              از کارآموزی همراه ما بوده تا الان که خودش همه فن حریفه.
            </p>
          </div>

          <div className="flex flex-col items-center justify-center">
            <img
              src={Mahdis}
              className="rounded-lg my-2"
              width="200"
              alt="مهدیه مهدی‌خواه"
            />
            <p className="mx-2 my-2 leading-10 text-justify text-lg">
              مهدیه مهدی‌خواه: گرافیست و تدوین‌گر <br />
              مهدیه به پرتلاش و آروم بودنش معروفه ولی پشت این ظاهر آروم یه دختر خیلی
              خوش ذوق و بامزه هست که همیشه دنبال یادگیری و خلق ایده‌های جدید هست.
            </p>
          </div>
          <div className="flex flex-col items-center justify-center">
            <img
              src={Orange}
              className="rounded-lg my-2"
              width="200"
              alt="امیرحسین سروری"
            />
            <p className="mx-2 my-2 leading-10 text-justify text-lg">
              امیرحسین سروری: برنامه‌نویس فرانت اِند <br />
              کسی تا حالا از امیرحسین بدقولی ندیده و همیشه منظمه و می‌شه روی حرفش
              کاملا حساب کرد. اگه بخواد چیزی رو بهت یاد بده، در نهایت صبر و حوصله این
              کار رو انجام میده.
            </p>
          </div>
          <div className="flex flex-col items-center justify-center">
            <img
              src={Zahra}
              className="rounded-lg my-2"
              width="200"
              alt="زهرا حقیقت"
            />
            <p className="mx-2 my-2 leading-10 text-justify text-lg">
              زهرا حقیقت: مسئول شبکه‌های اجتماعی و استراتژیست محتوا <br />
              یک چهره مهربون و مثبت! زهرا یکی از آدم‌های خیلی دوست داشتنی تیم هست و
              اگه کاری تو دقیقه نود هم بهش سپرده بشه، بازم خیلی دقیق و درست انجامش
              میده
            </p>
          </div>

          <div className="flex flex-col items-center justify-center">
            <img
              src={`https://cencup.com/wp-content/uploads/2019/07/avatar-placeholder.png`}
              className="rounded-lg my-2"
              width="200"
              alt="علیرضا برزگر"
            />
            <p className="mx-2 my-2 leading-10 text-justify text-lg">
              علیرضا برزگری: مسئول دپارتمان علوم پزشکی <br />
              اگه کاری رو به علیرضا سپردید، اون رو تموم شده بدونید. هر کاری که به
              عهدش سپرده بشه، به طرز عجیبی کامل و درست انجامش میده و اون رو با سرعت
              به اتمام می‌رسونه، در یک کلام به شدت بااراده و متعهد!
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Family
