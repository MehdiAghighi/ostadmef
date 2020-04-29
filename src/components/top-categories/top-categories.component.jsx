import React from "react";
import Title from "../title/title.component";
import { Code, ArrowLeft } from "../icon/icon.component";

import "./top-categories.style.scss";
import Button from "../button/button.component";

function TopCategories() {
   return (
      <div className="bg-orange-100 w-full">
         <div className="container py-2 mx-auto">
            <span className="text-blue-700 text-xl">انتخاب دوره بر اساس</span>
            <div className="">
               <Title>برترین دسته‌بندی‌ها</Title>
            </div>
            <div className="mt-5 flex flex-col md:flex-row flex-wrap items-end justify-center lg:justify-start top-categories-wrapper mx-auto">
               <div
                  className="py-4 px-3 bg-red-200 rounded-lg flex flex-row category-item"
                  //   style={{ width: "26.9%" }}
               >
                  <div className="bg-white py-5 px-5 rounded-lg">
                     <Code className="text-5xl text-red-600" />
                  </div>
                  <div className="px-2">
                     <h4 className="text-xl text-blue-1000 mb-1">
                        برنامه‌نویسی
                     </h4>
                     <p
                        className="text-gray-700 text-sm leading-tight"
                        style={{ fontWeight: 300 }}
                     >
                        لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت
                        چاپ، و با
                     </p>
                     <div className="flex flex-row-reverse mt-2">
                        <ArrowLeft className="text-orange-500 font-light" />
                     </div>
                  </div>
               </div>
               <div
                  className="py-4 px-3 bg-green-200 rounded-lg flex flex-row category-item"
                  //   style={{ width: "26.9%" }}
               >
                  <div className="bg-green-400 py-5 px-5 rounded-lg">
                     <Code className="text-5xl text-white" />
                  </div>
                  <div className="px-2">
                     <h4 className="text-xl text-blue-1000 mb-1">
                        برنامه‌نویسی
                     </h4>
                     <p
                        className="text-gray-700 text-sm leading-tight"
                        style={{ fontWeight: 300 }}
                     >
                        لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت
                        چاپ، و با
                     </p>
                     <div className="flex flex-row-reverse mt-2">
                        <ArrowLeft className="text-orange-500 font-light" />
                     </div>
                  </div>
               </div>
               <div
                  className="py-4 px-3 bg-purple-200 rounded-lg flex flex-row category-item"
                  //   style={{ width: "26.6%" }}
               >
                  <div className="bg-white py-5 px-5 rounded-lg">
                     <Code className="text-5xl text-purple-600" />
                  </div>
                  <div className="px-2">
                     <h4 className="text-xl text-blue-1000 mb-1">
                        برنامه‌نویسی
                     </h4>
                     <p
                        className="text-gray-700 text-sm leading-tight"
                        style={{ fontWeight: 300 }}
                     >
                        لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت
                        چاپ، و با
                     </p>
                     <div className="flex flex-row-reverse mt-2">
                        <ArrowLeft className="text-orange-500 font-light" />
                     </div>
                  </div>
               </div>
               <div
                  className="py-4 px-3 bg-blue-200 rounded-lg flex flex-row category-item"
                  //   style={{ width: "26.9%" }}
               >
                  <div className="bg-white py-5 px-5 rounded-lg">
                     <Code className="text-5xl text-blue-600" />
                  </div>
                  <div className="px-2">
                     <h4 className="text-xl text-blue-1000 mb-1">
                        برنامه‌نویسی
                     </h4>
                     <p
                        className="text-gray-700 text-sm leading-tight"
                        style={{ fontWeight: 300 }}
                     >
                        لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت
                        چاپ، و با
                     </p>
                     <div className="flex flex-row-reverse mt-2">
                        <ArrowLeft className="text-orange-500 font-light" />
                     </div>
                  </div>
               </div>
               <div
                  className="py-4 px-3 bg-orange-200 rounded-lg flex flex-row category-item"
                  //   style={{ width: "26.9%" }}
               >
                  <div className="bg-white py-5 px-5 rounded-lg">
                     <Code className="text-5xl text-orange-600" />
                  </div>
                  <div className="px-2">
                     <h4 className="text-xl text-blue-1000 mb-1">
                        برنامه‌نویسی
                     </h4>
                     <p
                        className="text-gray-700 text-sm leading-tight"
                        style={{ fontWeight: 300 }}
                     >
                        لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت
                        چاپ، و با
                     </p>
                     <div className="flex flex-row-reverse mt-2">
                        <ArrowLeft className="text-orange-500 font-light" />
                     </div>
                  </div>
               </div>
               <div className="flex flex-row-reverse py-1">
                  <Button arrow className="py-3 px-3">
                     دسته‌بندی‌های بیشتر
                  </Button>
               </div>
            </div>
         </div>
      </div>
   );
}

export default TopCategories;
