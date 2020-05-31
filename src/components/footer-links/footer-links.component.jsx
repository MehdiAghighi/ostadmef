import React from "react";
import { Link } from "react-router-dom";

function FooterLinks(props) {
    return (
        <div className="flex flex-row sm:mx-1 md:mx-4 lg:mx-8 xl:mx-16 w-full">
            <div className="flex flex-col text-center">
                <h4 className="font-bold mb-5 text-base sm:text-lg">
                    درباره‌ما
                </h4>
                <Link className="leading-9 text-xs md:text-base cursor-not-allowed">
                    وبلاگ
                </Link>
                <Link className="leading-9 text-xs md:text-base cursor-not-allowed">
                    شرایط استفاده
                </Link>
                <Link className="leading-9 text-xs md:text-base cursor-not-allowed">
                    سوالات متداول
                </Link>
            </div>
            <div
                className="h-full bg-gray-300 mx-3 xs:mx-4 sm:mx-8 md:mx-12 lg:mx-16 xl:mx-24"
                style={{ width: 2 }}
            ></div>
            <div className="flex flex-col text-center">
                <h4 className="font-bold mb-5 text-base sm:text-lg">
                    خدمات ما
                </h4>
                <Link className="leading-9 text-xs md:text-base cursor-not-allowed">
                    وبلاگ
                </Link>
                <Link className="leading-9 text-xs md:text-base cursor-not-allowed">
                    شرایط استفاده
                </Link>
                <Link className="leading-9 text-xs md:text-base cursor-not-allowed">
                    سوالات متداول
                </Link>
            </div>
            <div
                className="h-full bg-gray-300 mx-3 xs:mx-4 sm:mx-8 md:mx-12 lg:mx-16 xl:mx-24"
                style={{ width: 2 }}
            ></div>
            <div className="flex flex-col text-center">
                <h4 className="font-bold mb-5 text-base sm:text-lg">
                    لینک‌های مفید
                </h4>
                <Link className="leading-9 text-xs md:text-base cursor-not-allowed">
                    وبلاگ
                </Link>
                <Link className="leading-9 text-xs md:text-base cursor-not-allowed">
                    شرایط استفاده
                </Link>
                <Link className="leading-9 text-xs md:text-base cursor-not-allowed">
                    سوالات متداول
                </Link>
            </div>
        </div>
    );
}

export default FooterLinks;
