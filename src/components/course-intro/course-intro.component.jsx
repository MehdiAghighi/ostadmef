import React from "react";
import Title from "../title/title.component";
import { Link } from "react-router-dom";
import Button from "../button/button.component";

import Main from "../../assets/images/Main.png";
import DecoratedImage from "../decorated-image/decorated-image.component";
import TeacherCard from "../teacher-card/teacher-card.component";

function CourseIntro(props) {
    return (
        <div className="pt-10 container mx-auto flex flex-col-reverse lg:flex-row justify-between index-intro">
            <div
                className="xl:py-20 lg:py-16 py-10 ml-2"
                style={{
                    flexBasis: "49%",
                }}
            >
                <div className="xl:mb-5 mb-5 mx-auto lg:text-right text-center">
                    <Title>دوره آشنایی با پایتون</Title>
                </div>
                <p className="text-justify xl:font-light font-normal xl:text-2xl sm:text-lg text-lg leading-10 w-full xl:w-10/12 sm:w-9/12 mx-auto lg:w-auto">
                    لینوم یک پلتفرم آموزشی است که با تکیه بر ویدئو های کوتاه و
                    فشرده بستری را برای دانشجویان ایجاد میکند که در آن بتوانند
                    در کوتاه ترین زمان ممکن یک کورس را به طور کامل یاد بگیرند
                </p>
                <TeacherCard className="" teacher={{}} />
                <div className="w-full mx-auto lg:w-auto">
                    <Link to="/">
                        <Button
                            btnBgClass="bg-purple-800"
                            bgnTextClass="text-white"
                            className="xl:mt-5 mt-5 text-sm leading-8 py-2 px-5 lg:mx-0 mx-auto"
                            arrow
                        >
                            شرکت در دوره
                        </Button>
                    </Link>
                </div>
            </div>
            <div className="pt-8 w-full sm:w-11/12 lg:w-auto mx-auto mt-6">
                <DecoratedImage mainImg={Main} />
            </div>
        </div>
    );
}

export default CourseIntro;
