import React from "react"

import { Clock } from "../icon/icon.component"
import HCard from "../h-card/h-card.component"
import HCardTitle from "../h-card/h-card-title/h-card-title.component"
import HCardBody from "../h-card/h-card-body/h-card-body.component"
import HCardFooter from "../h-card/h-card-footer/h-card-footer.component"
import HCardImage from "../h-card/h-card-image/h-card-image.component"
import HCardData from "../h-card/h-card-data/h-card-data.component"
import HCardTitleGroup from "../h-card/h-card-title-group/h-card-title-group.component"
import PostTag from "../post-tag/post-tag.component"
import { LazyLoadImage } from "react-lazy-load-image-component"
import Loader from "react-loader-spinner"
import ImageLoader from "../image-loader/image-loader.component"

function HPostCard({ post }) {
  return (
    <HCard className="my-6 h-card">
      <HCardData>
        <HCardTitleGroup>
          <HCardTitle to={`/blog/${post.slug}`}>{post.title}</HCardTitle>
          <HCardBody>
            <PostTag category={post.category} />
          </HCardBody>
        </HCardTitleGroup>
        <HCardFooter>
          <span className="text-gray-600 sm:text-base text-xs">
            {post.time_ago} &nbsp;
            <Clock className="text-gray-600 text-xs" />
          </span>
          <div
            className="h-6 bg-gray-400 mx-3"
            style={{
              width: 2,
            }}
          ></div>
          <span className="text-gray-600 sm:text-base text-xs">
            {post.read_time} دقیقه &nbsp;
            <Clock className="text-gray-600 text-xs" />
          </span>
        </HCardFooter>
      </HCardData>
      <HCardImage to={`/blog/${post.slug}`}>
        <LazyLoadImage
          threshold={30}
          placeholder={<ImageLoader width={147} height={147} />}
          src={post.pic.thumb_url}
          alt={post.title}
          className=""
        />
      </HCardImage>
    </HCard>
  )
}

export default HPostCard
