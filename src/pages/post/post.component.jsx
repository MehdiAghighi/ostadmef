import React, { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import { Helmet } from "react-helmet"

import "./post.style.scss"

import Title from "../../components/title/title.component"
import PostTag from "../../components/post-tag/post-tag.component"
import DateTime from "../../components/date-time/date-time.component"
import CustomLoader from "../../components/custom-loader/custom-loader.component"
import { request } from "../../helpers/api"

function Post(props) {
  let { slug } = useParams()
  const [post, setPost] = useState({})
  const [isLoading, setIsLoading] = useState(true)
  const [keywords, setKeyWords] = useState("")

  useEffect(() => {
    setIsLoading(true)
    request(`/blogpost/${slug}`, (resp) => {
      setPost(resp.data.post)
      if (resp.data.post.keywords) {
        const keywordsArr = JSON.parse(resp.data.post.keywords)
        setKeyWords(keywordsArr.toString())
      }
      setIsLoading(false)
    })
  }, [slug])

  return (
    <div className="my-6">
      <div className="container mx-auto px-2 sm:px-0">
        <div className="bg-orange-100 rounded-lg py-2 px-8">
          {isLoading ? (
            <CustomLoader />
          ) : (
            <>
              <Helmet>
                <title>لینوم | {post.title}</title>
                <meta name="keywords" value={keywords} />
              </Helmet>
              <img src={post.pic.url} alt={post.title} className="w-full" />
              <div className="mx-auto text-center my-6">
                <h1 className="text-blue-1000 text-xl font-bold">{post.title}</h1>
              </div>
              <div className="flex sm:flex-row flex-col justify-between items-center">
                <span className="text-blue-1000 font-bold sm:w-1/3">
                  {post.user.first_name} {post.user.last_name}
                </span>
                <PostTag className="sm:w-1/3 text-center">آموزشی</PostTag>
                <DateTime
                  className="sm:w-1/3"
                  timeAgo={post.time_ago}
                  readTime={post.read_time}
                />
              </div>
              <div
                className="my-6 post-body"
                dangerouslySetInnerHTML={{ __html: post.body }}
              ></div>
            </>
          )}
        </div>
      </div>
    </div>
  )
}

export default Post
