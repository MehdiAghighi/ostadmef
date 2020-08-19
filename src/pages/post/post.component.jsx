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
import { objectToSchema, stripHtml } from "../../helpers/functions"

function Post(props) {
  let { slug } = useParams()
  const [post, setPost] = useState({})
  const [description, setDescription] = ""
  const [serie, setSerie] = useState(null)
  const [isLoading, setIsLoading] = useState(true)
  const [keywords, setKeyWords] = useState("")

  const postBodyRef = React.useRef(null)

  useEffect(() => {
    setIsLoading(true)
    API.get(`/blogpost/${slug}`)
      .then((resp) => {
        setPost(resp.data.post)
        setDescription(stripHtml(resp.data.post.body.substr(0, 160)))
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
  useEffect(() => {
    const postBody = document.getElementById("post-body")
    if (postBody) {
      const images = postBody.getElementsByTagName("img")

      for (let i = 0; i < images.length; i++) {
        // if (images[i].height < 400) {
        images[i].style.verticalAlign = "middle"
        // if (images[i].style)
        images[i].style.display = "inline-block"
        // }
        let hi = parseInt(images[i].style.height)
        if (hi > 120) {
          images[i].style.height = "auto"
          images[i].style.width = "auto"
        }
      }
    }
  }, [isLoading])

  return (
    <div className="my-6">
      <div className="container mx-auto px-2 sm:px-0">
        <div className="bg-orange-100 rounded-lg py-2 px-8">
          {isLoading ? (
            <CustomLoader />
          ) : (
            <>
              <script
                key={`blogJSON-${post.title}`}
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                  __html: JSON.stringify(
                    objectToSchema({
                      "@context": "http://schema.org",
                      "@type": "BreadcrumbList",
                      itemListElement: [
                        {
                          "@type": "ListItem",
                          position: 1,
                          item: {
                            "@id": `${process.env.REACT_APP_URL}/`,
                            name: "لینوم",
                            description: "لینوم - پلتفرم آموزشی میکرولرنینگ",
                          },
                        },
                        {
                          "@type": "ListItem",
                          position: 2,
                          item: {
                            "@id": `${process.env.REACT_APP_URL}/blog`,
                            name: "بلاگ",
                            description: "مقالات",
                          },
                        },
                        {
                          "@type": "ListItem",
                          position: 3,
                          item: {
                            "@id": `${process.env.REACT_APP_URL}/blog/${post.slug}`,
                            name: post.title,
                            description: `مقاله‌ی ${post.title} در حوزه‌ی ${post.category.title}`,
                          },
                        },
                      ],
                    })
                  ),
                }}
              />
              <script
                key={`blogJSONarticle`}
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                  __html: JSON.stringify(
                    objectToSchema({
                      "@context": "http://schema.org",
                      "@type": "NewsArticle",
                      mainEntityOfPage: {
                        "@type": "WebPage",
                        "@id": `${process.env.REACT_APP_URL}/blog/${post.slug}`,
                      },
                      headline: post.title,
                      image: [post.pic.url, post.pic.card_url, post.pic.thumb_url],
                      datePublished: new Date(post.created_at).toISOString(),
                      dateModified: new Date(post.updated_at).toISOString(),
                      author: {
                        "@type": "Person",
                        name: `${post.user.first_name} ${post.user.last_name}`,
                      },
                      publisher: {
                        "@type": "Organization",
                        name: "لینوم - پلتفرم آموزشی میکرولرنینگ",
                        logo: {
                          "@type": "ImageObject",
                          url: "https://google.com/logo.jpg",
                        },
                      },
                      description: description,
                    })
                  ),
                }}
              />
              <Helmet>
                <title>
                  {post.title} - {post.category.title} | لینوم
                </title>
                <link
                  rel="canonical"
                  href={`${process.env.REACT_APP_URL}/blog/${post.slug}`}
                />
                <meta name="description" value={description} />
                <meta name="keywords" value={keywords.toString()} />
              </Helmet>
              <img src={post.pic.url} alt={post.title} className="w-full" />
              <article>
                <header>
                  <div className="mx-auto text-center my-6">
                    <h1 className="text-blue-1000 text-xl font-bold">
                      {post.title}
                    </h1>
                  </div>
                  <div className="flex sm:flex-row flex-col justify-between items-center">
                    <span className="text-blue-1000 font-bold sm:w-1/3">
                      {post.user.first_name} {post.user.last_name}
                    </span>
                    <PostTag
                      className="sm:w-1/3 text-center"
                      category={post.category}
                    />
                    <DateTime
                      className="sm:w-1/3"
                      timeAgo={post.time_ago}
                      readTime={post.read_time}
                    />
                  </div>
                </header>
                <section
                  id="post-body"
                  ref={postBodyRef}
                  className="my-6 post-body"
                  dangerouslySetInnerHTML={{ __html: post.body }}
                ></section>
              </article>
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
