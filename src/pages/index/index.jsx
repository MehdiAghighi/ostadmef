import React from "react";

import "./index.style.scss";
import IndexIntro from "../../components/index-intro/index-intro.component";
import Partners from "../../components/partners/partners.component";

function Index(props) {
   return (
      <div>
         <IndexIntro />
         <Partners />
      </div>
   );
}

export default Index;
