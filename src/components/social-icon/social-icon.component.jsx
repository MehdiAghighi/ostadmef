import React from "react";
import { Twitter, Facebook, Telegram, Instagram } from "../icon/icon.component";
import { Link } from "react-router-dom";

export const TwitterButton = (props) => (
    <Link to={process.env.REACT_APP_TWITTER_URL}>
        <div
            className="py-3 px-3 bg-purple-800 text-white mx-2"
            style={{ borderRadius: "19px 4px 4px 4px" }}
        >
            <Twitter />
        </div>
    </Link>
);

export const InstagramButton = (props) => (
    <Link to={process.env.REACT_APP_INSTAGRAM_URL}>
        <div
            className="py-3 px-3 bg-purple-800 text-white mx-2"
            style={{ borderRadius: "19px 4px 4px 4px" }}
        >
            <Instagram />
        </div>
    </Link>
);

export const FacebookButton = (props) => (
    <Link to={process.env.REACT_APP_FACEBOOK_URL}>
        <div
            className="py-3 px-3 bg-purple-800 text-white mx-2"
            style={{ borderRadius: "19px 4px 4px 4px" }}
        >
            <Facebook />
        </div>
    </Link>
);

export const TelegramButton = (props) => (
    <Link to={process.env.REACT_APP_TELEGRAM_URL}>
        <div
            className="py-3 px-3 bg-purple-800 text-white mx-2"
            style={{ borderRadius: "19px 4px 4px 4px" }}
        >
            <Telegram />
        </div>
    </Link>
);
