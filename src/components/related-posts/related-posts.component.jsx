import React, { useEffect, useState } from "react"

import Title from "../title/title.component"
import BlogCard from "../blog-card/blog-card.component"
import API, { request } from "../../helpers/api"
import CustomLoader from "../custom-loader/custom-loader.component"

function RelatedPosts({ course }) {
  const [relatedPosts, setRelatedPosts] = useState([])
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    request(`/course/related/posts/${course.id}`, (resp) => {
      setRelatedPosts(resp.data.posts)
      setIsLoading(false)
    })
  }, [course])
  return (
    <div>
      <div className="container mx-auto mt-8">
        <Title>پست‌های پیشنهادی</Title>
        {isLoading ? (
          <CustomLoader />
        ) : (
          <div className="flex lg:flex-row flex-col lg:justify-around justify-center items-center">
            {relatedPosts.map((post, index) => (
                <div className="mx-1 my-2">
                    <BlogCard key={index} post={post} lazy={true} />
                </div>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}

export default RelatedPosts
