import React from "react"
import { Helmet } from "react-helmet"

import Amir from "../../assets/images/amir.png"
import Nima from "../../assets/images/nima.png"
import Mohamadreza from "../../assets/images/mohamadreza.png"
import Eghbal from "../../assets/images/eghbal.png"
import Mozhgan from "../../assets/images/mozhgan.png"
import Faeze from "../../assets/images/faeze.png"

function Family(props) {
  return (
    <div className="container mx-auto">
      <Helmet>
        <title>لینوم | خانواده‌ی ما</title>
      </Helmet>
      <div className="bg-orange-100 mx-auto rounded-lg py-3 px-3 sm:w-2/3 w-full">
        <div className="flex flex-col">
          <p className="leading-10 text-justify text-lg my-2">
            در لینوم همه یه خانواده‌ایم و فارغ از این که هر کدوم از ما، کدوم بخش از
            کار رو به عهده داره، از بودن در کنار هم لذت می‌بریم. هیچ کدوم از ما از
            اون دست از آدم‌ها نیستیم که ادعامون گوش فلک رو کر کنه و ماها همیشه سعی
            می‌کنیم توی هر زمینه‌ای که وارد می‌شیم رو به رشد باشیم و در هر موقعیتی
            پیشرفت کنیم.
          </p>
          <h2 className="text-5xl font-bold text-blue-1000 mt-3">تیم لینوم</h2>
          <div className="flex flex-col items-center justify-center">
            <img src={Amir} className="rounded-lg my-2" width="200" />
            <p className="mx-2 my-2 leading-10 text-justify text-lg">
              امیرمحمد عقیقی: مدیر اجرایی لینوم، استراتژیست محتوا و مارکتینگ، سئو
              کار. از اون دسته از آدم‌هاست که برای ساخت یه تیم لازم‌ان. همیشه همدلی
              رو به تیم می‌بخشه و یه جورایی حواسش به همه چی هست که درست جلو بره.
            </p>
          </div>
          <div className="flex flex-col items-center justify-center">
            <img src={Nima} className="rounded-lg my-2" width="200" />
            <p className="mx-2 my-2 leading-10 text-justify text-lg">
              نیما گوران: دیجیتال مارکتر تا حالا هیچ کدوم از ما به یاد نداریم که نیما
              قول انجام کاری رو بده ولی اون کار رو به ثمر نرسونه. همیشه منظمه و می‌شه
              روی حرفش کاملا حساب کرد.
            </p>
          </div>
          <div className="flex flex-col items-center justify-center">
            <img src={Mohamadreza} className="rounded-lg my-2" width="200" />
            <p className="mx-2 my-2 leading-10 text-justify text-lg">
              محمدرضا مشهدی‌: گرافیست و طراح رابط کاربری، تدوینگر. یه آدم بی‌نهایت
              خوشفکر و حرفه‌ای که هر کسی از کارکردن در کنارش لذت می‌بره. توی کار
              گرافیک و طراحی، حرفی برای گفتن داره و حواسش به هر المان گرافیکی که
              می‌بینید هست و نمیذاره چشم‌هاتون خسته بشه.
            </p>
          </div>
          <div className="flex flex-col items-center justify-center">
            <img src={Eghbal} className="rounded-lg my-2" width="200" />
            <p className="mx-2 my-2 leading-10 text-justify text-lg">
              اقبال شیراسب: گرافیست و طراح هویت بصری، تدوینگر، کدنویس بک‌اند خب چون
              نویسنده این متن خودمم، نمی‌تونم ازخودم تعریف خاصی بکنم =)). اگه بخوام
              روراست باشم می‌تونم بگم همیشه سعی می‌کنم در هر قسمتی که می‌تونم مفید
              باشم و از بودنم در تیم لذت می‌برم. پ.ن: خب من به عنوان نویسنده دیگه متن
              :) اومدم بگم اقبال یک آدم فوق­العاده خلاق و پرانرژی هست و ازاونجایی که
              خیلییی کمالگرا هست همیشه به ما هم کمک می­کنه که بهتر بشیم ، خلاصشو
              بخوام بگم کارش خیلی درسته و قوت قلب تیمه. :))
            </p>
          </div>
          <div className="flex flex-col items-center justify-center">
            <img src={Mozhgan} className="rounded-lg my-2" width="200" />
            <p className="mx-2 my-2 leading-10 text-justify text-lg">
              مژگان داداش‌زاده: نویسنده و تولید کننده‌ی محتوا، گرافیست می‌تونم بگم
              همیشه آدم صادقیه و پر از ایده‌ها و فکرهای خوبه که واقعا همه‌ی ما از
              شنیدنشون لذت می‌بریم، دست به قلم خوبی داره و از خوندن نوشته‌هاش هیچ وقت
              خسته نمی‌شید.
            </p>
          </div>
          <div className="flex flex-col items-center justify-center">
            <img src={Faeze} className="rounded-lg my-2" width="200" />
            <p className="mx-2 my-2 leading-10 text-justify text-lg">
              فائزه مجتهدی: نویسنده و تولید کننده‌ی محتوا، تدوینگر یه چهره‌ی کاملا
              خندون و پر انرژی که هر صبح با دیدنش کلی انرژی می‌گیریم. پر از استعداد و
              انگیزست و به قدری سریع به یک مهارت جدید مسلط میشه که واقعا غیرقابل
              باوره.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Family
