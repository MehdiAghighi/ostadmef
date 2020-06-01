import React, { useEffect, useState } from "react";

import { useQueryParams, NumberParam } from "use-query-params";
import { toast } from "react-toastify";

import API from "../../helpers/api";
import CustomLoader from "../../components/custom-loader/custom-loader.component";
import { Link } from "react-router-dom";

function Payment(props) {
    const [invoice, setInvoice] = useState({});
    const [isLoading, setIsLoading] = useState(true);
    const [query, setQuery] = useQueryParams({
        transaction_id: NumberParam,
    });
    const { transaction_id } = query;

    useEffect(() => {
        API.get("/course/admin/invoice/verify", {
            params: {
                transaction_id: transaction_id,
            },
        })
            .then((resp) => {
                return resp.data.invoice;
            })
            .then((data) => {
                setInvoice(data);
                setIsLoading(false);
            })
            .catch((err) => {
                if (err.response) {
                    toast.error(err.response.data.message);
                } else {
                    toast.error("دریافت اطلاعات پرداخت موفقیت آمیز نبود");
                }
            });
    }, [transaction_id]);
    return (
        <div className="container mx-auto">
            {isLoading ? (
                <CustomLoader />
            ) : (
                <div className="mt-5">
                    <div
                        class={`border-t-4 bg-${
                            invoice.is_paid === 1 ? "teal" : "red"
                        }-100 border-${
                            invoice.is_paid === 1 ? "teal" : "red"
                        }-500 rounded-b text-${
                            invoice.is_paid === 1 ? "teal" : "red"
                        }-900 px-4 py-3 shadow-md w-full md:w-1/2 w-1/2 mx-auto`}
                        role="alert"
                    >
                        <div class="flex">
                            <div class="py-1 ml-2">
                                <svg
                                    class={`fill-current h-6 w-6 text-${
                                        invoice.is_paid === 1 ? "teal" : "red"
                                    }-500 mr-4`}
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 20 20"
                                >
                                    <path d="M2.93 17.07A10 10 0 1 1 17.07 2.93 10 10 0 0 1 2.93 17.07zm12.73-1.41A8 8 0 1 0 4.34 4.34a8 8 0 0 0 11.32 11.32zM9 11V9h2v6H9v-4zm0-6h2v2H9V5z" />
                                </svg>
                            </div>
                            {invoice.is_paid === 1 ? (
                                <div>
                                    <p class="font-bold">
                                        پرداخت با موفقیت انجام شد
                                    </p>
                                    <p class="text-sm">
                                        با مراجعه به صفحه‌ی دوره می‌توانید از
                                        محتویات آن استفاده کنید.
                                    </p>
                                </div>
                            ) : (
                                <div>
                                    <p class="font-bold">
                                        پرداخت موفقیت‌آمیز نبود
                                    </p>
                                    <p class="text-sm">
                                        اگر مبلغ از حساب شما کم شده است، لطفا با
                                        پشتیبانی در ارتباط باشید.
                                    </p>
                                </div>
                            )}
                        </div>
                    </div>
                    <div
                        className={`mx-auto border mt-5 shadow-xl border-${
                            invoice.is_paid === 1 ? "teal" : "red"
                        }-500 bg-${
                            invoice.is_paid === 1 ? "teal" : "red"
                        }-100 rounded py-3 px-28 w-10/12`}
                    >
                        <div className="flex flex-row justify-around">
                            <span>کد رهگیری: </span>
                            <span>{invoice.transaction_id}</span>
                        </div>
                        <div className="flex flex-row justify-around mx-4">
                            <span>دوره: </span>
                            <span className="text-blue-500 hover:text-purple-800">
                                <Link to={`/course/${invoice.course.id}`}>
                                    {invoice.course.title}
                                </Link>
                            </span>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}

export default Payment;
