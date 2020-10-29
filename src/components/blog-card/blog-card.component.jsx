import React from "react"

import Card from "../card/card.component"
import CardImage from "../card/card-image/card-image.component"
import CardTitle from "../card/card-title/card-title.component"
import CardBody from "../card/card-body/card-body.component"
import CardFooter from "../card/card-footer/card-footer.component"
import PostTag from "../post-tag/post-tag.component"
import { Clock, Calendar } from "../icon/icon.component"
import { LazyLoadImage } from "react-lazy-load-image-component"
import ImageLoader from "../image-loader/image-loader.component"

function BlogCard({ post, full, lazy }) {
  return (
    <div className="card shadow rounded-lg">
      <Card full={full}>
        <CardImage to={`/blog/${post.slug}`}>
          {lazy ? (
            <LazyLoadImage
              threshold={30}
              placeholder={
                <ImageLoader width={full ? 585 : 278} height={full ? 400 : 278} />
              }
              src={full ? post.pic.url : post.pic.card_url}
              style={full ? { width: 600, height: 400, objectFit: "cover" } : {}}
              alt={post.title}
              className=""
            />
          ) : (
            <img
              src={full ? post.pic.url : post.pic.card_url}
              style={full ? { width: 600, height: 400, objectFit: "cover" } : {}}
              alt={post.title}
              className=""
            />
          )}
        </CardImage>
        <CardTitle to={`/blog/${post.slug}`}>{post.title}</CardTitle>
        <CardBody>
          <PostTag category={post.category} />
        </CardBody>
        <CardFooter>
          <div className="flex flex-row justify-between items-center">
            <span></span>
            <div className="flex flex-row">
              <span className="text-gray-600">
                {post.time_ago} &nbsp;
                <Calendar className="text-gray-600 text-xs" />
              </span>
              <div
                className="h-6 bg-gray-400 mx-3"
                style={{
                  width: 2,
                }}
              ></div>
              <span className="text-gray-600">
                {post.read_time} دقیقه &nbsp;
                <Clock className="text-gray-600 text-xs" />
              </span>
            </div>
          </div>
        </CardFooter>
      </Card>
    </div>
  )
}

BlogCard.defaultProps = {
  full: false,
  lazy: true,
}

export default BlogCard
