import React from "react";

import Title from "../title/title.component";

import courseImage from "../../assets/images/course.png";

import {
   SliderBack,
   SliderFor,
   ArrowLeft,
   Clock,
} from "../icon/icon.component";
import Card from "../card/card.component";
import CardImage from "../card/card-image/card-image.component";
import CardTitle from "../card/card-title/card-title.component";
import CardBody from "../card/card-body/card-body.component";
import CardFooter from "../card/card-footer/card-footer.component";
import PostTag from "../post-tag/post-tag.component";

function HotPosts(props) {
   return (
      <div className="container mx-auto my-8">
         <div className="flex flex-col">
            <div className="">
               <Title>جدید‌ترین پست‌ها</Title>
            </div>
            <div className="flex flex-row justify-between items-center mt-8">
               <div className="">
                  <Card>
                     <CardImage to="/">
                        <img src={courseImage} className="" />
                     </CardImage>
                     <CardTitle to="/">دانستنی‌های هک با پایتون</CardTitle>
                     <CardBody>
                        <PostTag to="/">آموزشی</PostTag>
                     </CardBody>
                     <CardFooter>
                        <div className="flex flex-row justify-between items-center">
                           <span></span>
                           <div className="flex flex-row">
                              <span className="text-gray-600">
                                 9 روز پیش &nbsp;
                                 <Clock className="text-gray-600 text-xs" />
                              </span>
                              <div
                                 className="h-6 bg-gray-400 mx-3"
                                 style={{
                                    width: 2,
                                 }}
                              ></div>
                              <span className="text-gray-600">
                                 ساعت 14 &nbsp;
                                 <Clock className="text-gray-600 text-xs" />
                              </span>
                           </div>
                        </div>
                     </CardFooter>
                  </Card>
               </div>
               <div className="">
                  <Card>
                     <CardImage to="/">
                        <img src={courseImage} className="" />
                     </CardImage>
                     <CardTitle to="/">دانستنی‌های هک با پایتون</CardTitle>
                     <CardBody>
                        <PostTag to="/">آموزشی</PostTag>
                     </CardBody>
                     <CardFooter>
                        <div className="flex flex-row justify-between items-center">
                           <span></span>
                           <div className="flex flex-row">
                              <span className="text-gray-600">
                                 9 روز پیش &nbsp;
                                 <Clock className="text-gray-600 text-xs" />
                              </span>
                              <div
                                 className="h-6 bg-gray-400 mx-3"
                                 style={{
                                    width: 2,
                                 }}
                              ></div>
                              <span className="text-gray-600">
                                 ساعت 14 &nbsp;
                                 <Clock className="text-gray-600 text-xs" />
                              </span>
                           </div>
                        </div>
                     </CardFooter>
                  </Card>
               </div>
               <div className="">
                  <Card>
                     <CardImage to="/">
                        <img src={courseImage} className="" />
                     </CardImage>
                     <CardTitle to="/">دانستنی‌های هک با پایتون</CardTitle>
                     <CardBody>
                        <PostTag to="/">آموزشی</PostTag>
                     </CardBody>
                     <CardFooter>
                        <div className="flex flex-row justify-between items-center">
                           <span></span>
                           <div className="flex flex-row">
                              <span className="text-gray-600">
                                 9 روز پیش &nbsp;
                                 <Clock className="text-gray-600 text-xs" />
                              </span>
                              <div
                                 className="h-6 bg-gray-400 mx-3"
                                 style={{
                                    width: 2,
                                 }}
                              ></div>
                              <span className="text-gray-600">
                                 ساعت 14 &nbsp;
                                 <Clock className="text-gray-600 text-xs" />
                              </span>
                           </div>
                        </div>
                     </CardFooter>
                  </Card>
               </div>
            </div>
         </div>
      </div>
   );
}

export default HotPosts;
