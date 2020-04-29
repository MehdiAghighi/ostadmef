import React from "react";
import PartnersSlider from "../partners-slider/partners-slider.component";

function Partners() {
   return (
      <div className="">
         <div className="mx-auto w-1/2 text-center">
            <h2 className="text-5xl text-blue-1000">
               دانشگاه‌های همکار <span className="font-bold">لــــینوم</span>
            </h2>
         </div>
         <div className="w-full mb-64">
            <PartnersSlider />
         </div>
      </div>
   );
}

export default Partners;
