import React, { useEffect, useState } from "react"

import { request } from "../../helpers/api"
import CustomLoader from "../custom-loader/custom-loader.component"
import BlogCard from "../blog-card/blog-card.component"
import HPostCard from "../h-post-card/h-post-card.component"

function BlogIntro(props) {
  const [bigPost, setBigPost] = useState({})
  const [randPosts, setRandPosts] = useState([])
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    request("/blogpost/intro", (resp) => {
      setBigPost(resp.data.posts[0])
      const randoms = resp.data.posts.slice(1)
      setRandPosts(randoms)
      setIsLoading(false)
    })
  }, [])
  return (
    <div className="my-5">
      <div className="container mx-auto">
        <div className="flex lg:flex-row flex-col lg:justify-between justify-center items-center px-4 sm:px-0">
          <div className="xl:w-1/2 lg:w-5/12 sm:w-8/12 xs:w-full">
            {isLoading ? (
              <CustomLoader />
            ) : (
              <>{<BlogCard full={true} post={bigPost} />}</>
            )}
            {/* <Card full>
                     <CardImage to="/">
                        <img
                           src={courseImage}
                           className=""
                           style={{
                              width: "100%",
                           }}
                        />
                     </CardImage>
                     <CardTitle className="text-2xl text-blue-1000 my-2" to="/">
                        دانستنی‌های هک با پایتون
                     </CardTitle>
                     <CardBody>
                        <PostTag to="/">آموزشی</PostTag>
                        <p className="text-lg text-base leading-10 text-justify px-1">
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
                  </Card> */}
          </div>
          <div className="lg:w-1/2 xs:w-full">
            <div className="md:px-6 mx-auto w-full flex flex-col items-center justify-center">
              <div>
                {/* <HCard className="my-6">
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
                                 <span className="text-gray-600 sm:text-base text-xs">
                                    9 روز پیش &nbsp;
                                    <Clock className="text-gray-600 text-xs" />
                                 </span>
                                 <div
                                    className="h-6 bg-gray-400 mx-3"
                                    style={{
                                       width: 2,
                                    }}
                                 ></div>
                                 <span className="text-gray-600 sm:text-base text-xs">
                                    ساعت 14 &nbsp;
                                    <Clock className="text-gray-600 text-xs" />
                                 </span>
                              </HCardFooter>
                           </HCardData>
                           <HCardImage>
                              <img src={courseImage} />
                           </HCardImage>
                        </HCard> */}
                {isLoading ? (
                  <CustomLoader />
                ) : (
                  randPosts.map((it, index) => <HPostCard key={index} post={it} />)
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default BlogIntro
