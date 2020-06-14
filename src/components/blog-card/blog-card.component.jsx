import React from "react"

import Card from "../card/card.component"
import CardImage from "../card/card-image/card-image.component"
import CardTitle from "../card/card-title/card-title.component"
import CardBody from "../card/card-body/card-body.component"
import CardFooter from "../card/card-footer/card-footer.component"
import PostTag from "../post-tag/post-tag.component"
import { Clock } from "../icon/icon.component"

function BlogCard({ post, full }) {
  return (
    <div className="card">
      <Card full={full}>
        <CardImage to={`/blog/${post.slug}`}>
          <img
            src={full ? post.pic.url : post.pic.card_url}
            style={full ? { width: 600, objectFit: "cover" } : {}}
            alt={post.title}
            className=""
          />
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
                <Clock className="text-gray-600 text-xs" />
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
}

export default BlogCard
