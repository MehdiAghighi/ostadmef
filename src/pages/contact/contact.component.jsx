import React from "react"
import ContactImg from "../../assets/images/contact.png"

function Contact(props) {
  return (
    <div className="container mx-auto">
      <div className="bg-orange-100 py-3 px-3 my-2 rounded-lg">
        <img src={ContactImg} className="rounded-lg mb-4" />
        <p className="leading-10 text-justify text-xl">
          دفتر لینوم به نشانی زیر است، اما امکان پذیرایی از مراجعین عزیز بدون هماهنگی
          قبلی وجود نخواهد داشت.
          <br />
          <span className="text-teal-700">
            خیابان مطهری، نرسیده به خیابان سهروردی، جنب بانک پاسارگاد، پلاک 94 ، طبقه
            اول، شتابدهنده تریگ‌آپ
          </span>
          <br />
          شماره‌ی تماس: 021 41087181
          <br />
          <a
            className="text-blue-500 hover:text-purple-700 transition-all duration-150"
            href="mailto:linominfo@yahoo.com"
          >
            ایمیل : linominfo@yahoo.com
          </a>
        </p>
      </div>
    </div>
  )
}

export default Contact
