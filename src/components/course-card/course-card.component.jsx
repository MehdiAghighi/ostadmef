import React from "react";

function CourseCard({ course }) {
    return (
        <div>
            <Card>
                <CardImage to="/">
                    <img src={course.img} className="" />
                </CardImage>
                <CardTitle to="/">{course.title}</CardTitle>
                <CardBody>
                    <div className="flex flex-row items-center mx-auto text-center justify-center">
                        <span>{course.teachername}</span>
                        <div
                            className="h-6 bg-gray-400 mx-3"
                            style={{
                                width: 2,
                            }}
                        ></div>
                        <span className="text-gray-600">
                            {course.length} ساعت &nbsp;
                            <Clock className="text-gray-600 text-xs" />
                        </span>
                    </div>
                </CardBody>
                <CardFooter>
                    <div className="flex flex-row justify-between items-center">
                        <span className="text-xl text-green-500 leading-tight">
                            {course.amount} تومان
                        </span>
                        <ArrowLeft className="text-xs font-light text-orange-500" />
                    </div>
                </CardFooter>
            </Card>
        </div>
    );
}

export default CourseCard;
