import React from "react";

import "./index.style.scss";

import IndexIntro from "../../components/index-intro/index-intro.component";
import Partners from "../../components/partners/partners.component";
import TopCategories from "../../components/top-categories/top-categories.component";
import TopCourses from "../../components/top-courses/top-courses.component";

function Index(props) {
   return (
      <div>
         <IndexIntro />
         <Partners />
         {/* <TopCategories /> */}
         <TopCourses />
      </div>
   );
}

export default Index;
