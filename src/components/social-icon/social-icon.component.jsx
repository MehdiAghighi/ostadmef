import React from "react";
import { Twitter, Facebook, Telegram, Instagram } from "../icon/icon.component";

export const TwitterButton = (props) => (
   <div
      className="py-3 px-3 bg-purple-800 text-white mx-2"
      style={{ borderRadius: "19px 4px 4px 4px" }}
   >
      <Twitter />
   </div>
);

export const InstagramButton = (props) => (
   <div
      className="py-3 px-3 bg-purple-800 text-white mx-2"
      style={{ borderRadius: "19px 4px 4px 4px" }}
   >
      <Instagram />
   </div>
);

export const FacebookButton = (props) => (
   <div
      className="py-3 px-3 bg-purple-800 text-white mx-2"
      style={{ borderRadius: "19px 4px 4px 4px" }}
   >
      <Facebook />
   </div>
);

export const TelegramButton = (props) => (
   <div
      className="py-3 px-3 bg-purple-800 text-white mx-2"
      style={{ borderRadius: "19px 4px 4px 4px" }}
   >
      <Telegram />
   </div>
);
