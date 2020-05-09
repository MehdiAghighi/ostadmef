import React from "react";
import PartnersSlider from "../partners-slider/partners-slider.component";

function Partners() {
   return (
      <div className="mb-8">
         <div className="mx-auto xl:w-1/2 text-center">
            <h2 className="sm:text-5xl text-4xl text-blue-1000">
               دانشگاه‌های همکار <span className="font-bold">لــــینوم</span>
            </h2>
         </div>
         <div className="w-full">
            <PartnersSlider />
         </div>
      </div>
   );
}

export default Partners;
