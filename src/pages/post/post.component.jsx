import React from "react";
import { useParams } from "react-router-dom";

import courseImage from "../../assets/images/single.png";
import Title from "../../components/title/title.component";
import PostTag from "../../components/post-tag/post-tag.component";
import DateTime from "../../components/date-time/date-time.component";

function Post(props) {
   const params = useParams();
   //    console.log(params.slug);
   return (
      <div className="my-6">
         <div className="container mx-auto">
            <div className="bg-orange-100 rounded-lg py-2 px-8">
               <img src={courseImage} className="w-full" />
               <div className="mx-auto text-center my-6">
                  <Title>دانستنی‌های هک با پایتون</Title>
               </div>
               <div className="flex flex-row justify-between items-center">
                  <span className="text-blue-1000 font-bold w-1/3">
                     مهرداد توکلی
                  </span>
                  <PostTag className="w-1/3 text-center">آموزشی</PostTag>
                  <DateTime className="w-1/3" />
               </div>
               <div className="my-6">
                  <p className="leading-10 text-lg">
                     لینوم یک پلتفرم آموزشی است که با تکیه بر ویدئو های کوتاه و
                     فشرده بستری را برای دانشجویان ایجاد میکند که در آن بتوانند
                     در کوتاه ترین زمان ممکن یک کورس را به طور کامل یاد
                     بگیرندلینوم یک پلتفرم آموزشی است که با تکیه بر ویدئو های
                     کوتاه و فشرده بستری را برای دانشجویان ایجاد میکند که در آن
                     بتوانند در کوتاه ترین زمان ممکن یک کورس را به طور کامل یاد
                     بگیرندلینوم یک پلتفرم آموزشی است که با تکیه بر ویدئو های
                     کوتاه و فشرده بستری را برای دانشجویان ایجاد میکند که در آن
                     بتوانند در کوتاه ترین زمان ممکن یک کورس را به طور کامل یاد
                     بگیرندلینوم یک پلتفرم آموزشی است که با تکیه بر ویدئو های
                     کوتاه و فشرده بستری را برای دانشجویان ایجاد میکند که در آن
                     بتوانند در کوتاه ترین زمان ممکن یک کورس را به طور کامل یاد
                     بگیرندلینوم یک پلتفرم آموزشی است که با تکیه بر ویدئو های
                     کوتاه و فشرده بستری را برای دانشجویان ایجاد میکند که در آن
                     بتوانند در کوتاه ترین زمان ممکن یک کورس را به طور کامل یاد
                     بگیرندلینوم یک پلتفرم آموزشی است که با تکیه بر ویدئو های
                     کوتاه و فشرده بستری را برای دانشجویان ایجاد میکند که در آن
                     بتوانند در کوتاه ترین زمان ممکن یک کورس را به طور کامل یاد
                     بگیرندلینوم یک پلتفرم آموزشی است که با تکیه بر ویدئو های
                     کوتاه و فشرده بستری را برای دانشجویان ایجاد میکند که در آن
                     بتوانند در کوتاه ترین زمان ممکن یک کورس را به طور کامل یاد
                     بگیرند
                  </p>
               </div>
            </div>
         </div>
      </div>
   );
}

export default Post;
