import React from "react";
import { Clock } from "../icon/icon.component";
import Button from "../button/button.component";
import HDivider from "../h-divider/h-divider.component";

function CourseInfo(props) {
    return (
        <div className="container mx-auto">
            <div className="bg-gray-200 rounded-lg lg:px-8 px-4 py-3 flex md:flex-row flex-col justify-between items-center">
                <div className="flex sm:flex-row flex-col flex-wrap justify-start items-center h-full justify-center items-center">
                    <span className="text-lg leading-10">
                        دوره آشنایی با پایتون
                    </span>
                    <HDivider />
                    <span className="font-bold leading-10">مرتضی معصومی</span>
                    <HDivider />
                    <span className="font-bold leading-10">
                        <Clock className="text-xs ml-1" />
                        14 ساعت
                    </span>
                    <HDivider />
                    <span className="font-bold text-lg leading-10 text-green-500">
                        20000 تومان
                    </span>
                </div>
                <Button
                    btnBgClass="bg-purple-800"
                    bgnTextClass="text-white"
                    className="leading-8 py-2 px-5 lg:mx-0 mx-auto"
                    arrow
                >
                    شرکت در دوره
                </Button>
            </div>
        </div>
    );
}

export default CourseInfo;
