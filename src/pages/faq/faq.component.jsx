import React from "react"
import { Helmet } from "react-helmet"
import FAQImg from "../../assets/images/faq.png"

function FAQ(props) {
  return (
    <div className="container mx-auto">
      <Helmet>
        <title>لینوم | سوالات متداول</title>
      </Helmet>
      <div className="bg-orange-100 rounded-lg py-3 px-3 my-2">
        <img src={FAQImg} className="rounded-lg" />
        <p className="leading-10 text-justify text-lg">
          <ol className="list-decimal list-inside">
            <li className="my-2">
              {" "}
              آیا می‌توان دوره‌ها را دانلود کرد؟ خیر، تنها امکان مشاهده آنلاین
              دوره‌ها بر روی سایت وجود دارد. البته با توجه به کدنویسی پیشرفته و
              استفاده از سرورهای قدرتمند سعی‌شده بدون هیچ تاخیری، مشاهده صورت گیرد و
              با توجه به سرعت اینترنت شما، در هر لحظه، کیفیت ویدئو تغییر می‌کند تا
              شما بدون هیچ وقفه‌ای بتوانید از دوره لذت ببرید.
            </li>
            <li className="my-2">
              {" "}
              آیا می‌توانم به صورت اشتراکی از یک دوره استفاده کنم؟ خیر، لینوم یک
              استارت آپ نوپا در عرص‌یه آموزش است که برای پیشرفت، به همدلی همه‌ی شما
              نیاز دارد. استفاده‌ی مشارکتی از یک دوره، انگیزه‌ی ما برای ادامه‌ی این
              مسیر را کم نور می‌کند. پس از گروه خودتان حمایت کنید و اجازه دهید تا
              برای شما بهترین دوره‌ها را آماده کند.
            </li>
            <li className="my-2">
              {" "}
              ویدئوها تا چه مدت در پنل من باقی خواهد ماند؟ ویدئو‌‌ها تا 2 سال به طور
              کامل در پنل شما باقی می‌ماند و به صورت کامل توسط گروه لینوم پشتیبانی
              می‌شود. در این مدت، هرگونه آپدیت بر روی دوره‌ها به صورت رایگان برای شما
              اعمال می‌شود.{" "}
            </li>
            <li className="my-2">
              {" "}
              در زمانی که دوره را خریداری کردم و پول از حسابم کم شد و نتوانستم وارد
              دوره شوم، چه کنم؟ گروه پشتیبانی لینوم در هر لحظه از شبانه‌روز در کنار
              شماست و درصورت بروز هر‌گونه خطا و مشکل به صورت کامل آن را ردیابی می‌کند
              و کاملا حافظ حقوق شما می‌باشد .
            </li>
            <li className="my-2">
              {" "}
              چرا ویدئو‌ها نمایش داده نمی‌شوند؟ یکی از مواردی که بعضی از کاربران با
              آن مواجه می‌شوند عدم پخش و نمایش ویدئو با مرورگرهای قدیمی و بعضی از
              اینترنت‌های اداری می‌باشد. به این منظور می‌توانید از نسخه‌ی نهایی
              مرورگر گوگل‌کروم استفاده کنید و همچنین درصورت رفع مشکل، با ما در ارتباط
              باشید.
            </li>
            <li className="my-2">
              {" "}
              آیا بر روی تلفن همراه نیز، به دوره دسترسی دارم؟ بله‌، سایت به طور کامل
              برای مشاهده‌ی ویدئوها بر روی تلفن‌های همراه نیز بهینه‌سازی شده‌است .
            </li>
            <li className="my-2">
              {" "}
              آیا امکان دریافت فیلم‌ها بر روی سی‌دی یا دی‌وی‌دی وجود دارد؟ خیر، با
              توجه به سیاست‌های کاری لینوم مبنی بر آموزش بر خط، این امکان وجود ندارد.{" "}
            </li>
            <li className="my-2">
              {" "}
              آیا می‌توانم مدرس یک درس باشم؟ بله، درصورتی که فکر می‌کنید توانایی
              تدریس در یک عنوان درسی را دارید با گروه لینوم تماس بگیرید و ما را با
              همکاریتان خشنود کنید.{" "}
            </li>
          </ol>
        </p>
      </div>
    </div>
  )
}

export default FAQ