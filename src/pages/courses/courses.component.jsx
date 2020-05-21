import React from "react";

import "./courses.style.scss";

import courseImage from "../../assets/images/course.png";

import { ArrowLeft, Clock } from "../../components/icon/icon.component";
import Card from "../../components/card/card.component";
import CardImage from "../../components/card/card-image/card-image.component";
import CardTitle from "../../components/card/card-title/card-title.component";
import CardBody from "../../components/card/card-body/card-body.component";
import CardFooter from "../../components/card/card-footer/card-footer.component";
import ReactPaginate from "react-paginate";

function Courses(props) {
    const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 1, 8, 90, 1, 2, 3, 4, 65, 23, 1, 3];
    return (
        <div className="container mx-auto">
            <div className="flex flex-row flex-wrap mt-5">
                {arr.map((item) => (
                    <div className="mx-4 mt-4">
                        <Card>
                            <CardImage to="/">
                                <img src={courseImage} className="" />
                            </CardImage>
                            <CardTitle to="/">آموزش فتوشاپ مقدماتی</CardTitle>
                            <CardBody>
                                <div className="flex flex-row items-center mx-auto text-center justify-center">
                                    <span>مهران احمدی</span>
                                    <div
                                        className="h-6 bg-gray-400 mx-3"
                                        style={{
                                            width: 2,
                                        }}
                                    ></div>
                                    <span className="text-gray-600">
                                        ساعت 14 &nbsp;
                                        <Clock className="text-gray-600 text-xs" />
                                    </span>
                                </div>
                            </CardBody>
                            <CardFooter>
                                <div className="flex flex-row justify-between items-center">
                                    <span className="text-xl text-green-500 leading-tight">
                                        20,000 تومان
                                    </span>
                                    <ArrowLeft className="text-xs font-light text-orange-500" />
                                </div>
                            </CardFooter>
                        </Card>
                    </div>
                ))}
            </div>
            <ReactPaginate
                pageCount={3}
                marginPagesDisplayed={2}
                pageRangeDisplayed={2}
                previousLabel="قبلی"
                nextLabel="بعدی"
                breakLabel={"..."}
                breakClassName={"break-me"}
                // onPageChange={this.handlePageClick}
                containerClassName={"pagination"}
                subContainerClassName={"pages pagination"}
                activeClassName={"active"}
            />
        </div>
    );
}

export default Courses;
