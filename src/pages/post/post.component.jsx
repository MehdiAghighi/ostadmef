import React, { useState, useEffect } from "react"
import { useParams, Link } from "react-router-dom"
import { Helmet } from "react-helmet"

import "./post.style.scss"
import "./katex.style.scss"

import PostTag from "../../components/post-tag/post-tag.component"
import DateTime from "../../components/date-time/date-time.component"
import CustomLoader from "../../components/custom-loader/custom-loader.component"
import API from "../../helpers/api"
import { toast } from "react-toastify"

function Post(props) {
  let { slug } = useParams()
  const [post, setPost] = useState({})
  const [serie, setSerie] = useState(null)
  const [isLoading, setIsLoading] = useState(true)
  const [keywords, setKeyWords] = useState("")

  useEffect(() => {
    setIsLoading(true)
    API.get(`/blogpost/${slug}`)
      .then((resp) => {
        setPost(resp.data.post)
        if (resp.data.post.keywords) {
          const keywordsArr = resp.data.post.keywords
          const arr = []
          keywordsArr.map((item, index) => arr.push(item["title"]))
          setKeyWords(arr)
        }
        if (resp.data.post.serie_id) {
          return API.get(`/serie/${resp.data.post.serie_id}`)
            .then((resp) => {
              return resp.data.serie
            })
            .then((serie) => {
              setSerie(serie)
              setIsLoading(false)
            })
            .catch((err) => {
              if (err.response) {
                toast.error(err.response.data.message)
              } else {
                toast.error("مشکلی در ارتباط با سرور پیش آمده است")
              }
            })
        } else {
          setIsLoading(false)
        }
      })
      .catch((err) => {
        if (err.response) {
          toast.error(err.response.data.message)
        } else {
          toast.error("مشکلی در ارتباط با سرور پیش آمده است")
        }
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
                <meta name="keywords" value={keywords.toString()} />
              </Helmet>
              <img src={post.pic.url} alt={post.title} className="w-full" />
              <div className="mx-auto text-center my-6">
                <h1 className="text-blue-1000 text-xl font-bold">{post.title}</h1>
              </div>
              <div className="flex sm:flex-row flex-col justify-between items-center">
                <span className="text-blue-1000 font-bold sm:w-1/3">
                  {post.user.first_name} {post.user.last_name}
                </span>
                <PostTag className="sm:w-1/3 text-center" category={post.category} />
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
              {serie && (
                <div className="my-4 rounded bg-gray-100 py-2 px-3">
                  {serie.posts.map((serie_post, index) => (
                    <div
                      className={`flex flex-row items-center py-2 px-3 border-b-2 border-gray-200 my-2`}
                    >
                      <div
                        className={`rounded-lg text-base py-1 w-8 h-8 text-center ml-5 sm:ml-3 ${
                          serie_post.id == post.id
                            ? "bg-red-700 text-white"
                            : " bg-green-200"
                        }`}
                      >
                        {serie_post.serie_order}
                      </div>
                      <Link to={`/blog/${serie_post.slug}`}>
                        <h3
                          className={`xs:text-lg text-sm text-blue-500 hover:text-purple-600 cursor-pointer transition-all duration-300 sm:inline`}
                        >
                          &nbsp;{serie_post.title}
                          {"  "}
                        </h3>
                        {serie_post.id == post.id && (
                          <span className="text-xs text-red-700 font-bold">
                            (در حال مطالعه)
                          </span>
                        )}
                      </Link>
                    </div>
                  ))}
                </div>
              )}
            </>
          )}
        </div>
      </div>
    </div>
  )
}

export default Post
