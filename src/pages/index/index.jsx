import React from "react";

import "./index.style.scss";
import IndexIntro from "../../components/index-intro/index-intro.component";
import Partners from "../../components/partners/partners.component";
import TopCategories from "../../components/top-categories/top-categories.component";

function Index(props) {
   return (
      <div>
         <IndexIntro />
         <Partners />
         <TopCategories />
      </div>
   );
}

export default Index;
