import axios from "axios"
import { toast } from "react-toastify"
import { getCookie } from "./functions"

const API = axios.create({
  baseURL: process.env.REACT_APP_API_DOMAIN,
  responseType: "json",
  withCredentials: true,
  //  headers: {
  //      Authorization: () => `Bearer ${localStorage.getItem("token")}`,
  //  },
})

API.interceptors.request.use(function (config) {
  const token = getCookie("token")
  if (token) {
    config.headers.Authorization = `Bearer ${token}`
  }
  const utm_source = getCookie("utm_source")
  if (utm_source) {
    config.headers.utm_source = utm_source
  }
  const referral = getCookie("referral")
  if (referral) {
    config.headers.referral = referral
  }

  config.headers.Accept = "application/json"
  return config
})

export const request = (path, cb, ecb = () => {}) => {
  API.get(path)
    .then((response) => {
      cb(response)
    })
    .catch((err) => {
      if (err.response) {
        toast.error(err.response.data.message)
      } else {
        toast.error("مشکلی در ارتباط با سرور پیش آمده است")
      }
      ecb()
    })
}

export default API
