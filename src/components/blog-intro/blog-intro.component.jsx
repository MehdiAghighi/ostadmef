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
              bigPost && <>{<BlogCard full={true} post={bigPost} />}</>
            )}
          </div>
          <div className="lg:w-1/2 xs:w-full">
            <div className="md:px-6 mx-auto w-full flex flex-col items-center justify-center">
              <div>
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
