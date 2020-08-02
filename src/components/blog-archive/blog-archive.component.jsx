import React, { useEffect, useState } from "react"
import Title from "../title/title.component"
import CustomLoader from "../custom-loader/custom-loader.component"
import API from "../../helpers/api"
import BlogCard from "../blog-card/blog-card.component"
import { Link, useHistory } from "react-router-dom"
import { useQueryParams, withDefault, NumberParam } from "use-query-params"
import { useRef } from "react"

// const scrollToRef = (ref) => window.scrollTo(0, ref.current.offsetTop)  

function BlogArchive() {
    const [isLoading, setIsLoading] = useState(true)
    const [posts, setPosts] = useState([])
    let history = useHistory()
    const archiveRef = useRef(null)


    const [query, setQuery] = useQueryParams({
      page: withDefault(NumberParam, 1),
    })
    const { page } = query

    useEffect(() => {
        API.get(`/blogpost?page=${page}`)
            .then(resp => {
                return resp.data.posts
            })
            .then(data => {
                setPosts(data)
                setIsLoading(false)
            })
    }, [page])

    useEffect(() => {
      history.listen((location, action) => {
        window.scrollTo(0, archiveRef.current.offsetTop)
      })
    }, [history, archiveRef])
    return (
      <div className="container mx-auto mt-8">
        <div ref={archiveRef}>
          <Title>مقالات لینوم</Title>
        </div>
        <div>
          {isLoading ? (
            <CustomLoader />
          ) : (
            <div>
              <div className="flex flex-row flex-wrap mt-5 justify-center">
                {posts.data.map((item, index) => (
                  <div className="mx-4 mt-4" key={index}>
                    <BlogCard key={index} post={item} lazy={true} />
                  </div>
                ))}
              </div>
              <ul className="pagination mx-auto flex flex-row justify-center m-4">
                {posts.prev_page_url && (
                  <li className="py-2 px-4 bg-white border border-orange-500 mx-1 rounded">
                    <Link to={`?page=${posts.current_page - 1}`}>قبلی</Link>
                  </li>
                )}
                {}
                <li className="py-2 px-4 bg-white border-2 border-orange-500 bg-orange-500 font-bold text-white mx-1 rounded">
                  {posts.current_page}
                </li>
                {posts.next_page_url && (
                  <li className="py-2 px-4 bg-white border border-orange-500 mx-1 rounded">
                    <Link to={`?page=${posts.current_page + 1}`}>بعدی</Link>
                  </li>
                )}
              </ul>
            </div>
          )}
        </div>
      </div>
    )
}

export default BlogArchive