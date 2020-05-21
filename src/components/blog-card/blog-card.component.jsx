import React from "react";

function BlogCard({ post }) {
    return (
        <div>
            <Card>
                <CardImage to="/">
                    <img src={post.img} className="" />
                </CardImage>
                <CardTitle to="/">{post.title}</CardTitle>
                <CardBody>
                    <PostTag to="/">{post.category}</PostTag>
                </CardBody>
                <CardFooter>
                    <div className="flex flex-row justify-between items-center">
                        <span></span>
                        <div className="flex flex-row">
                            <span className="text-gray-600">
                                {post.timeAgo} &nbsp;
                                <Clock className="text-gray-600 text-xs" />
                            </span>
                            <div
                                className="h-6 bg-gray-400 mx-3"
                                style={{
                                    width: 2,
                                }}
                            ></div>
                            <span className="text-gray-600">
                                {post.time} &nbsp;
                                <Clock className="text-gray-600 text-xs" />
                            </span>
                        </div>
                    </div>
                </CardFooter>
            </Card>
        </div>
    );
}

export default BlogCard;
