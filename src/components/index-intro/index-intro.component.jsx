import React from "react"

import "./index-intro.style.scss"

import Main from "../../assets/images/Main.jpg"

import Title from "../title/title.component"
import { Link } from "react-router-dom"
import Button from "../button/button.component"
import DecoratedImage from "../decorated-image/decorated-image.component"

function IndexIntro() {
  return (
    <div className="pt-10 container mx-auto flex flex-col-reverse lg:flex-row justify-between index-intro px-4 xs:px-0">
      <div
        className="xl:py-20 py-16"
        style={{
          flexBasis: "45%",
        }}
      >
        <div className="xl:mb-16 mb-8" style={{ width: 335 }}>
          <Title>آشنایی با لــــینوم</Title>
        </div>
        <p className="text-justify xl:font-light font-normal xl:text-2xl sm:text-xl text-lg leading-10 w-full sm:w-9/12 mx-auto lg:w-auto">
          لینوم یک پلتفرم آموزشی میکرولرنینگ است که با تکیه بر ویدئو های کپسولی و
          فشرده ، یادگیری دروس دانشگاهی را در سریع ترین زمان ممکن به ارمغان می آورد.
        </p>
        <div className="w-full mx-auto lg:w-auto">
          <Link to="/">
            <Button
              className="xl:mt-12 mt-5 text-sm leading-8 py-2 px-5"
              arrow
              to="/story"
            >
              قصه‌ی ما
            </Button>
          </Link>
        </div>
      </div>
      <div className="pt-8 w-full sm:w-10/12 lg:w-auto mx-auto">
        <DecoratedImage mainImg={Main} />
      </div>
    </div>
  )
}

export default IndexIntro
