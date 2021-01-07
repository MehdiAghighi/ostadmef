import React, { useState } from "react"
import {
  useAuthState,
  updateUser,
  useAuthDispatch,
} from "../../contexts/auth-context"
import { Link } from "react-router-dom"
import { Pencil } from "../icon/icon.component"
import { useEffect } from "react"
import { toast } from "react-toastify"

function ProfileUserInfo() {
  const { user } = useAuthState()
  const authDispatch = useAuthDispatch()

  const [userData, setUserData] = useState({})

  const [isEditing, setIsEditing] = useState(false)

  useEffect(() => {
    if (user.first_name) {
      setUserData(
        (({ first_name, last_name, email, university }) => ({
          first_name,
          last_name,
          email,
          university,
        }))(user)
      )
    }
  }, [user])

  const handleChange = (e) => {
    const target = e.target;

    setUserData((userData) => {
      return {
        ...userData,
        [target.name]: target.value
      }
    })
  }

  const handleSubmit = async () => {
    const request = await updateUser(authDispatch, userData)
    console.log(request)
    if (request.status >= 200 && request.status < 300) {
      toast.success("اطلاعات کاربر با موفقیت بروز شد")
      setIsEditing(false)
    } else {
      toast.error("تغییر اطلاعات کاربر موفقیت آمیز نبود.")
      setUserData(
        (({ first_name, last_name, email, university }) => ({
          first_name,
          last_name,
          email,
          university,
        }))(user)
      )
      setIsEditing(false)
    }
  }

  return (
    <div className="w-full">
      <div className="w-full flex flex-row justify-between">
        <span className="text-gray-500 text-lg">اطلاعات شخصی</span>
        <div
          className="flex flex-row items-center cursor-pointer"
          onClick={() => setIsEditing((prev) => !prev)}
        >
          <Pencil className="text-xs text-blue-500 ml-1" />
          <span className="text-blue-500">ویرایش</span>
        </div>
      </div>
      <div className="w-full rounded border-2 border-gray-500 px-2 py-2">
        <div className="flex sm:flex-row flex-col-reverse w-full">
          <div className="flex flex-col w-full">
            <div className="flex flex-col border-b border-gray-300 my-2">
              <div className="flex flex-col leading-7">
                <span className="text-gray-500 lg:text-base text-sm">نام</span>
                {!isEditing ? (
                  <span className="text-gray-600 lg:text-base text-sm">
                    {user.first_name}
                  </span>
                ) : (
                  <input
                    className="py-2 px-3 bg-transparent rounded border border-gray-400 mt-1 mb-3 mx-2 w-64"
                    value={userData.first_name}
                    name="first_name"
                    onChange={handleChange}
                  />
                )}
              </div>
            </div>
            <div className="flex flex-col border-b border-gray-300 my-2">
              <div className="flex flex-col leading-7">
                <span className="text-gray-500 lg:text-base text-sm">
                  نام خانوادگی
                </span>
                {!isEditing ? (
                  <span className="text-gray-600 lg:text-base text-sm">
                    {user.last_name}
                  </span>
                ) : (
                  <input
                    className="py-2 px-3 bg-transparent rounded border border-gray-400 mt-1 mb-3 mx-2 w-64"
                    value={userData.last_name}
                    name="last_name"
                    onChange={handleChange}
                  />
                )}
              </div>
            </div>
            <div className="flex flex-col border-b border-gray-300 my-2">
              <div className="flex flex-col leading-7">
                <span className="text-gray-500 lg:text-base text-sm">ایمیل</span>
                {!isEditing ? (
                  <span className="text-gray-600 lg:text-base text-sm">
                    {user.email}
                  </span>
                ) : (
                  <input
                    className="py-2 px-3 bg-transparent rounded border border-gray-400 mt-1 mb-3 mx-2 w-64"
                    value={userData.email}
                    name="email"
                    onChange={handleChange}
                  />
                )}
              </div>
            </div>
            <div className="flex flex-col border-b border-gray-300 my-2">
              <div className="flex flex-col leading-7">
                <span className="text-gray-500 lg:text-base text-sm">
                  شماره همراه
                </span>
                <span className="text-gray-600 lg:text-base text-sm">
                  {user.phone}
                </span>
              </div>
            </div>
            <div className="flex flex-col my-2">
              <div className="flex flex-col leading-7">
                <span className="text-gray-500 lg:text-base text-sm">
                  دانشگاه و رشته تحصیلی
                </span>
                {!isEditing ? (
                  <span className="text-gray-600 lg:text-base text-sm">
                    {user.university}
                  </span>
                ) : (
                  <input
                    className="py-2 px-3 bg-transparent rounded border border-gray-400 mt-1 mb-3 mx-2 w-64"
                    value={userData.university}
                    name="university"
                    onChange={handleChange}
                  />
                )}
              </div>
            </div>
            <div className="mt-3 mb-1">
              {isEditing ? (
                <>
                  <button
                    className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-8 rounded-lg mx-3"
                    onClick={handleSubmit}
                  >
                    ثبت
                  </button>
                  <button
                    className="bg-red-500 hover:bg-red-600 text-white py-2 px-8 rounded-lg mx-3"
                    onClick={() => {
                      setIsEditing(false)
                      setUserData(
                        (({ first_name, last_name, email, university }) => ({
                          first_name,
                          last_name,
                          email,
                          university,
                        }))(user)
                      )
                    }}
                  >
                    لغو
                  </button>
                </>
              ) : null}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProfileUserInfo
