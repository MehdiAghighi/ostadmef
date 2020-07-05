import React from "react";
import { Helmet } from "react-helmet";

import "./index.style.scss";

import IndexIntro from "../../components/index-intro/index-intro.component";
import Partners from "../../components/partners/partners.component";
// import TopCategories from "../../components/top-categories/top-categories.component";
import TopCourses from "../../components/top-courses/top-courses.component";
import WhyLinom from "../../components/why-linom/why-linom.component";

function Index(props) {
   return (
      <div>
         <Helmet>
            <title>لینوم - پلتفرم آموزشی میکرولرنینگ با تکیه بر ویدیو‌های کپسولی شده</title>
            <meta
               name="description"
               content="لینوم یک پلتفرم آموزشی میکرولرنینگ است که با تکیه بر ویدئو های کپسولی و فشرده ، یادگیری دروس دانشگاهی را در سریع ترین زمان ممکن به ارمغان می آورد."
            />
         </Helmet>
         <IndexIntro />
         <Partners />
         {/* <TopCategories /> */}
         <TopCourses />
         <WhyLinom />
      </div>
   );
}

export default Index;
