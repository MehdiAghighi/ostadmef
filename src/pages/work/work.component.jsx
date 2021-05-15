import React from "react"
import DecoratedImage from "../../components/decorated-image/decorated-image.component"
import "./work.style.scss"

import WorkImg from "../../assets/images/work.jpg"
import Blueprint from "../../assets/images/Blueprint.svg"
import OrRec from "../../assets/images/or-rec.svg"
import PurpRec from "../../assets/images/purp-rec.svg"

function Work() {
  return (
    <div>
      <div className="w-full container mx-auto my-12 flex md:flex-row flex-col-reverse">
        <div className="md:w-4/6 w-full md:pl-12 md:pt-4 pt-8">
          <div className="w-full flex flex-col justify-center mb-3">
            <div className="w-full rounded-lg border-2 border-orange-500 px-4 py-3">
              <h1 className="text-orange-500 text-center lg:text-4xl sm:text-2xl text-xl leading-10 mb-4 font-bold">
                به جمع اساتید لینوم بپیوندید!
              </h1>
              <p className="text-blue-800 leading-10 my-1 lg:text-base sm:text-sm text-sm">
                اگر در آموزش درس یا مهارتی تبحر دارید و می‌توانید به خوبی آن را
                تدریس کنید، دوره ‍پیشنهادی و رزومۀ خود را به همراه نام و شمارۀ تماس به نشانی
                info@linom.ir ارسال کنید تا در اسرع وقت با شما تماس حاصل شود.
              </p>
            </div>
          </div>

          <div className="w-full flex flex-col justify-center mt-2">
            <div className="w-full rounded-lg border-2 border-blue-800 px-4 py-3">
              <h1 className="text-blue-700 text-center  lg:text-4xl sm:text-2xl text-xl leading-10 mb-4 font-bold">
                راه‌های ارتباطی لینوم
              </h1>
              <p className="text-blue-800 leading-10 my-1 lg:text-base sm:text-sm text-sm">
                آدرس: خیابان مطهری، نبش سهروردی جنوبی، پلاک 94 شمارۀ | تماس:
                41087182-021 | info@linom.ir
              </p>
            </div>
          </div>
        </div>
        <div className="md:w-2/6 w-full">
          <div className="relative mx-auto md:w-full sm:w-1/2 w-2/3 py-2 px-2">
            <img
              src={Blueprint}
              className="absolute w-24 xl:w-auto sm:w-32 blueprint"
              alt=""
            />
            <img
              src={WorkImg}
              className="inset-0 relative w-11/12 mx-auto z-10"
              alt="Linom Courses"
            />
            <img src={OrRec} className="absolute w-32 or-rec" alt="" />
            <img src={PurpRec} className="absolute w-32 purp-rec" alt="" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Work
