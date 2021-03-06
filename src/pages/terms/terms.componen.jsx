import React from "react"
import TermsImg from "../../assets/images/terms.webp"

import TeamImage from "../../assets/images/rules-before-user.webp"
import { Helmet } from "react-helmet"
import Title from "../../components/title/title.component"
import { objectToSchema } from "../../helpers/functions"

function Terms(props) {
  return (
    <div className="container mx-auto">
      <script
        key={`termsJSON`}
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
                    "@id": `${process.env.REACT_APP_URL}/terms`,
                    name: "قوانین استفاده",
                    description: "قوانین استفاده از محصولات لینوم، تعریف کاربر",
                  },
                },
              ],
            })
          ),
        }}
      />
      <Helmet>
        <title>شرایط استفاده | لینوم</title>
        <link rel="canonical" href={`${process.env.REACT_APP_URL}/terms`} />
        <meta
          name="description"
          content="لینوم یک پلتفرم آموزشی میکرولرنینگ است که با تکیه بر ویدئو های کپسولی و فشرده ، یادگیری دروس دانشگاهی را در سریع ترین زمان ممکن به ارمغان می آورد."
        />
      </Helmet>
      <div className="mx-auto text-center my-2">
        <Title mainTitle={true}>قوانین استفاده</Title>
      </div>
      <div className="bg-orange-100 mx-auto rounded-lg py-3 px-3">
        <img src={TermsImg} className="rounded-lg" alt="قوانین استفاده" />
        <p className="my-2 px-2 leading-10 text-justify">
          قوانین عمومی تمامی اصول اساسی حاکم بر فعالیت وبسایت لینوم (linom.ir) اعم از
          تولید محتوای آموزشی و فروش آن، منطبق با قوانین جمهوری اسلامی ایران، قانون
          تجارت الکترونیک و قانون حمایت از حقوق مصرف‌کنند‌گان است و هر دو طرف (لینوم
          و کاربران یا مشتریان) نسبت به انجام تکالیف خود بر اساس قوانین جاری کشور
          متعهد هستند. همچنین در صورتی که در قوانین مندرج، رویه‏‌ها و سرویس‏‌های
          لینوم تغییراتی در آینده ایجاد شود، در همین صفحه منتشر و بروزرسانی خواهد شد
          و توافق شما با استفاده‌ی مستمر از سایت، به معنی پذیرش هرگونه تغییر است.
          پیگیری هرگونه اختلاف به وجود آمده، در صلاحدید مراجع قضایی شهر تهران
          می‌باشد.
          <img src={TeamImage} className="mx-auto rounded-lg w-64 mt-3" />
          <br /> تعریف کاربر: کاربر به شخصی گفته می‌شود که با درج اطلاعات کاربری خود
          در فرم ثبت‌نام، به استفاده از خدمات رایگان و غیررایگان وبسایت لینوم، اقدام
          کند. سیاست‏‌های رعایت حریم شخصی لینوم به اطلاعات خصوصی اشخاصى که از خدمات
          سایت استفاده می‏‌کنند، احترام گذاشته و از آن‌ها محافظت می‏‌کند. شرایط
          استفاده وبسایت لینوم به ارائه‌ی خدمات آموزشی در قالب ویدیو می‌پردازد. پس از
          ثبت‌نام و پرداخت هزینه، امکان مشاهده‌ی آنلاین محتوای آموزشی وبسایت لینوم در
          اختیار شما قرار می‌گیرد. این محتوا تنها برای استفاده‌ی افرادی می‌باشد که
          اقدام به پرداخت هزینه‌ی مشاهده‌ی آنلاین ویدیوها کرده‌اند و حق بازنشر محتوای
          دوره اعم از ویدئوها، پروژه‌ها و … در هیچ قالب و کانالی وجود ندارد و در صورت
          مشاهده، این اقدام پیگرد قانونی خواهد داشت.کلیه‌ی مالکیت حقوق فکری محتوای
          قرار گرفته بر روی وبسایت (linom.ir)، متعلق به لینوم میباشد. با توجه به حقوق
          مالکیت معنوی و تفاهم‌نامه‌ای که لینوم با سایر ذی‌نفعان هر دوره دارد، امکان
          دانلود ویدئوها وجود ندارد و کاربران باید ویدئوها را تنها به صورت آنلاین و
          از طریق وبسایت لینوم مشاهده نمایند. دسترسی شما به مشاهده‌ی آنلاین ویدیوها
          به مدت یکسال می‌باشد. پس از پایان مدت‌زمان تعیین شده، شما می‌توانید برای
          دسترسی بیشتر به صورت ماهانه، با پرداخت مبلغ تمدید دوره، هر بار برای یک ماه
          بیشتر، دسترسی خود به دوره را تمدید کنید. همه‌ی موارد در دسترس، درهر یک از
          خدمات لینوم، مانند متن، گرافیک، آرم، آیکون دکمه، تصاویر، ویدئوهای تصویری،
          موارد قابل دانلود و کپی، داده‌ها و کلیه‌ی محتوای تولیدشده توسط لینوم، جزئی
          از اموال لینوم محسوب می‏‌شود و حق استفاده و نشر تمامی مطالب موجود، در
          انحصار لینوم است. علاوه بر این، اسکریپت‌ها و اسامی خدمات قابل ارائه از طریق
          هر یک از خدمات ایجادشده توسط لینوم و علائم تجاری ثبت‌شده نیز در انحصار
          لینوم است و هرگونه استفاده‌ بدون کسب مجوز کتبی و با مقاصد تجاری، حق پیگرد
          قانونی را برای لینوم محفوظ می‏‌دارد. کاربر باید متعهد شود که تمامی اطلاعاتی
          که به وسیله‌ی آن ها ثبت نام را انجام می‌دهد، صحیح و غیر جعلی وارد نماید. در
          صورتی که کاربر بخواهد از امکان درج کامنت در وبسایت استفاده نماید،کامنت او
          می‌بایست فاقد هر گونه ابعاد سیاسی، دینی، مذهبی و جنسیتی باشد و از به کار
          بردن عبارات توهین‌آمیز و خلاف اخلاق حسنه، خودداری نماید. در صورت استفاده از
          هر یک از خدمات لینوم، کاربران مسئول حفظ محرمانگی حساب و رمز عبور خود هستند
          و تمامی مسئولیت فعالیت‌‏هایی که تحت حساب کاربری و یا رمز ورود انجام
          می‏‌پذیرد به عهده‌ی کاربران است. تنها مرجع رسمی مورد تایید ما برای ارتباط
          با شما، پایگاه رسمی این سایت به نشانی (linom.ir) می‌باشد.
        </p>
      </div>
    </div>
  )
}

export default Terms
