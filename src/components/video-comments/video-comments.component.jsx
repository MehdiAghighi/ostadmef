import React, { useEffect, useState } from "react"
import API from "../../helpers/api"
import UserImg from "../../assets/images/unnamed.png"
import CustomLoader from "../custom-loader/custom-loader.component"
import Title from "../title/title.component"
import ReactTimeAgo from "react-time-ago"
import { toast } from "react-toastify"
import { useAuthState } from "../../contexts/auth-context"

function VideoComments({ video, bought }) {
  const { user } = useAuthState()

  const [comments, setComments] = useState([])
  const [changeComments, setChangeComments] = useState(0)
  const [isLoading, setIsLoading] = useState(true)
  const [body, setBody] = useState("")
  const [parentId, setParentId] = useState(null)

  useEffect(() => {
    setIsLoading(true)
    API.get(`/comment/video/${video.id}`)
      .then((resp) => {
        return resp.data.comments
      })
      .then((data) => {
        setComments(data)
        setIsLoading(false)
      })
  }, [video.id, changeComments])

  const handleChange = (e) => {
    setBody(e.target.value)
  }

  const submitComment = () => {
    API.post(`/comment/video/admin/${video.id}`, {
      body: body,
      parent_id: parentId,
    })
      .then((resp) => {
        return resp.data
      })
      .then((data) => {
        toast.success("نظر با موفقیت ثبت شد")
        setBody("")
        setParentId(null)
        setChangeComments((state) => state + 1)
      })
  }

  return (
    <div className="container mx-auto">
      {
        bought || user.role == 0
        ?
        <Title>پرسش و پاسخ</Title>
        :
        !isLoading
        ?
          comments.length > 0
          ?
          <Title>پرسش و پاسخ</Title>:
          null
        :
        null
      }
      {!bought && user.role !== 0 ? null : (
        <div>
          <div className="bg-gray-300 rounded-lg py-3 px-4 shadow mt-6">
            <div className="w-full">
              <div className="col-span-5 py-2 my-4 px-4">
                <div className="">
                  <span className="font-bold text-lg">متن نظر: </span>
                  <textarea
                    maxLength={5000}
                    rows={7}
                    className="w-full mt-4 rounded-lg border border-purple-600 py-2 px-3"
                    value={body}
                    onChange={handleChange}
                  ></textarea>
                  <button
                    id="buyButton"
                    className="my-2 py-4 w-full bg-teal-600 rounded-lg text-white text-xl hover:bg-teal-700 transition-all duration-100"
                    onClick={submitComment}
                  >
                    ثبت نظر
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
      <div>
        {isLoading ? (
          <CustomLoader />
        ) : (
          comments.map((comment, index) => (
            <div className="relative mt-12">
              <div
                className="w-full bg-white rounded-lg py-4 px-2 my-12"
                style={{
                  boxShadow: "1px 5px 24px rgba(0, 0, 0, 0.16)",
                }}
              >
                <div className="flef flex-row">
                  <div className="w-full flex flex-row items-center">
                    <div className="overflow-hidden rounded-full mx-1">
                      <img
                        src={comment.user.avatar ? comment.user.avatar : UserImg}
                        style={{ borderRadius: "50%", width: 61, height: 61 }}
                        alt={`${comment.user.first_name} ${comment.user.last_name}`}
                      />
                    </div>
                    <div className="flex flex-col mx-1">
                      <span className="font-bold text-blue-1000 text-lg mx-1">
                        {comment.user.first_name} {comment.user.last_name}
                      </span>
                      <ReactTimeAgo
                        date={new Date(comment.created_at)}
                        locale="fa"
                        className="text-sm"
                      />
                    </div>
                  </div>
                </div>
                <div
                  className={`my-4 mx-2`}
                  style={{
                    height: "auto",
                  }}
                >
                  <p className="leading-loose">{comment.body}</p>
                  <div>
                    {comment.children.map((child, index) => (
                      <div className="bg-gray-200 rounded-lg py-2 px-3 my-3">
                        <div className="flef flex-row">
                          <div className="w-full flex flex-row items-center">
                            <div className="overflow-hidden rounded-full mx-1">
                              <img
                                src={child.user.avatar ? child.user.avatar : UserImg}
                                style={{
                                  borderRadius: "50%",
                                  width: 61,
                                  height: 61,
                                }}
                                alt={`${child.user.first_name} ${child.user.last_name}`}
                              />
                            </div>
                            <div className="flex flex-col mx-1">
                              <span className="font-bold text-blue-1000 text-lg mx-1">
                                {child.user.first_name} {child.user.last_name}
                              </span>
                              <ReactTimeAgo
                                date={new Date(child.created_at)}
                                locale="fa"
                                className="text-sm"
                              />
                            </div>
                          </div>
                        </div>
                        <div
                          className={`my-4 mx-2`}
                          style={{
                            height: "auto",
                          }}
                        >
                          {child.body}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  )
}

export default VideoComments
