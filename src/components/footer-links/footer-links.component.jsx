import React from "react"
import { Link } from "react-router-dom"
import { useAuthDispatch } from "../../contexts/auth-context"

function FooterLinks(props) {
  const authDispatch = useAuthDispatch()
  return (
    <div className="flex flex-row sm:mx-1 md:mx-4 lg:mx-8 xl:mx-16 w-full">
      <div className="flex flex-col text-center">
        <h4 className="font-bold mb-5 text-base sm:text-lg">درباره‌ی لینوم</h4>
        <Link to="/story" className="leading-9 text-xs md:text-base">
          قصه‌ی ما
        </Link>
        <Link to="/family" className="leading-9 text-xs md:text-base">
          خانواده لینوم
        </Link>
        <Link to="/contact" className="leading-9 text-xs md:text-base">
          تماس با ما
        </Link>
      </div>
      <div
        className="h-full bg-gray-300 mx-3 xs:mx-4 sm:mx-8 md:mx-12 lg:mx-16 xl:mx-24"
        style={{ width: 2 }}
      ></div>
      <div className="flex flex-col text-center">
        <h4 className="font-bold mb-5 text-base sm:text-lg">کاربران</h4>
        <Link to="/terms" className="leading-9 text-xs md:text-base">
          شرایط استفاده
        </Link>
        <Link to="/faq" className="leading-9 text-xs md:text-base">
          سوالات متداول
        </Link>
        <Link to="/rights" className="leading-9 text-xs md:text-base">
          منشور اخلاقی
        </Link>
      </div>
      <div
        className="h-full bg-gray-300 mx-3 xs:mx-4 sm:mx-8 md:mx-12 lg:mx-16 xl:mx-24"
        style={{ width: 2 }}
      ></div>
      <div className="flex flex-col text-center">
        <h4 className="font-bold mb-5 text-base sm:text-lg">لینک‌های مفید</h4>
        <Link to="/blog" className="leading-9 text-xs md:text-base">
          بلاگ
        </Link>
        <Link to="/courses" className="leading-9 text-xs md:text-base">
          دوره‌ها
        </Link>
        <span
          //   to="/contact"
          onClick={() => {
            authDispatch({ type: "TOGGLE_MODAL" })
          }}
          className="leading-9 text-xs md:text-base cursor-pointer"
        >
          ورود و ثبت‌نام
        </span>
      </div>
    </div>
  )
}

export default FooterLinks
