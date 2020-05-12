import React from "react";

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
import HCard from "../h-card/h-card.component";
import HCardTitle from "../h-card/h-card-title/h-card-title.component";
import HCardBody from "../h-card/h-card-body/h-card-body.component";
import HCardFooter from "../h-card/h-card-footer/h-card-footer.component";
import HCardImage from "../h-card/h-card-image/h-card-image.component";
import HCardData from "../h-card/h-card-data/h-card-data.component";
import HCardTitleGroup from "../h-card/h-card-title-group/h-card-title-group.component";
import PostTag from "../post-tag/post-tag.component";

function BlogIntro(props) {
   return (
      <div>
         <div className="container mx-auto mt-5">
            <div className="flex flex-row justify-between">
               <div className="w-1/2">
                  <Card full>
                     <CardImage>
                        <img
                           src={courseImage}
                           className=""
                           style={{
                              width: "100%",
                           }}
                        />
                     </CardImage>
                     <CardTitle className="text-2xl text-blue-1000 my-2">
                        دانستنی‌های هک با پایتون
                     </CardTitle>
                     <CardBody>
                        <PostTag>آموزشی</PostTag>
                        <p className="text-lg leading-10 text-justify px-1">
                           لینوم یک پلتفرم آموزشی است که با تکیه بر ویدئو های
                           کوتاه و فشرده بستری را برای دانشجویان ایجاد میکند که
                           در آن بتوانند در کوتاه ترین زمان ممکن یک کورس را به
                           طور کامل یاد بگیرند...
                        </p>
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
               <div className="w-1/2">
                  <div className="px-6 mx-auto w-full flex items-end justify-end">
                     <div>
                        <HCard className="my-6">
                           <HCardData>
                              <HCardTitleGroup>
                                 <HCardTitle>
                                    دانستنی‌های هک با پایتون
                                 </HCardTitle>
                                 <HCardBody>
                                    <PostTag>آموزشی</PostTag>
                                 </HCardBody>
                              </HCardTitleGroup>
                              <HCardFooter>
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
                              </HCardFooter>
                           </HCardData>
                           <HCardImage>
                              <img src={courseImage} />
                           </HCardImage>
                        </HCard>
                        <HCard className="my-6">
                           <HCardData>
                              <HCardTitleGroup>
                                 <HCardTitle>
                                    دانستنی‌های هک با پایتون
                                 </HCardTitle>
                                 <HCardBody>
                                    <PostTag>آموزشی</PostTag>
                                 </HCardBody>
                              </HCardTitleGroup>
                              <HCardFooter>
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
                              </HCardFooter>
                           </HCardData>
                           <HCardImage>
                              <img src={courseImage} />
                           </HCardImage>
                        </HCard>
                        <HCard className="my-6">
                           <HCardData>
                              <HCardTitleGroup>
                                 <HCardTitle>
                                    دانستنی‌های هک با پایتون
                                 </HCardTitle>
                                 <HCardBody>
                                    <PostTag>آموزشی</PostTag>
                                 </HCardBody>
                              </HCardTitleGroup>
                              <HCardFooter>
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
                              </HCardFooter>
                           </HCardData>
                           <HCardImage>
                              <img src={courseImage} />
                           </HCardImage>
                        </HCard>
                        <HCard className="my-6">
                           <HCardData>
                              <HCardTitleGroup>
                                 <HCardTitle>
                                    دانستنی‌های هک با پایتون
                                 </HCardTitle>
                                 <HCardBody>
                                    <PostTag>آموزشی</PostTag>
                                 </HCardBody>
                              </HCardTitleGroup>
                              <HCardFooter>
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
                              </HCardFooter>
                           </HCardData>
                           <HCardImage>
                              <img src={courseImage} />
                           </HCardImage>
                        </HCard>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </div>
   );
}

export default BlogIntro;
