import React from "react";
import { Helmet } from "react-helmet";

function NotFound(props) {
   return (
     <div className="">
       <Helmet>
         <title>لینوم | صفحه‌ مورد نظر پیدا نشد</title>
         <meta
           name="description"
           content="لینوم یک پلتفرم آموزشی میکرولرنینگ است که با تکیه بر ویدئو های کپسولی و فشرده ، یادگیری دروس دانشگاهی را در سریع ترین زمان ممکن به ارمغان می آورد."
         />
         <meta name="robots" content="noindex,nofollow" />
       </Helmet>
       <div
         class="mx-5 mt-10 bg-red-100 border-t-4 border-red-500 rounded-b text-red-900 px-4 py-3 shadow-md"
         role="alert"
       >
         <div className="text-center">
           <h1>صفحه مورد نظر پیدا نشد</h1>
         </div>
       </div>
     </div>
   )
}

export default NotFound;
