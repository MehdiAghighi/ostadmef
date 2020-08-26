import React from "react"
import { Twitter, Facebook, Telegram, Instagram } from "../icon/icon.component"
import { ReactComponent as Aparat } from "../../assets/images/aparat-logo.svg"

export const TwitterButton = (props) => (
  <a
    href={`https://${process.env.REACT_APP_TWITTER_URL}`}
    target="_blank"
    className="cursor-not-allowed"
  >
    <div
      className="py-3 px-3 bg-teal-500 text-white mx-2"
      style={{ borderRadius: "19px 4px 4px 4px" }}
    >
      <Twitter />
    </div>
  </a>
)

export const InstagramButton = (props) => (
  <a href={`https://${process.env.REACT_APP_INSTAGRAM_URL}`} target="_blank">
    <div
      className="py-3 px-3 bg-teal-500 text-white mx-2"
      style={{ borderRadius: "19px 4px 4px 4px" }}
    >
      <Instagram />
    </div>
  </a>
)
export const AparatButton = (props) => (
  <a href={`https://${process.env.REACT_APP_APARAT_URL}`} target="_blank">
    <div
      className="py-3 px-3 bg-teal-500 text-white mx-2 w-10 h-10"
      style={{ borderRadius: "19px 4px 4px 4px" }}
    >
      <Aparat className="w-12 h-12" />
    </div>
  </a>
)

export const FacebookButton = (props) => (
  <a
    href={`https://${process.env.REACT_APP_FACEBOOK_URL}`}
    target="_blank"
    className=""
  >
    <div
      className="py-3 px-3 bg-teal-500 text-white mx-2"
      style={{ borderRadius: "19px 4px 4px 4px" }}
    >
      <Facebook />
    </div>
  </a>
)

export const TelegramButton = (props) => (
  <a
    href={`https://${process.env.REACT_APP_TELEGRAM_URL}`}
    target="_blank"
    className=""
  >
    <div
      className="py-3 px-3 bg-teal-500 text-white mx-2"
      style={{ borderRadius: "19px 4px 4px 4px" }}
    >
      <Telegram />
    </div>
  </a>
)
