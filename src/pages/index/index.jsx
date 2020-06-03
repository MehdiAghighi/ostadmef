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
            <title>لینوم | صفحه‌ی اصلی</title>
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
