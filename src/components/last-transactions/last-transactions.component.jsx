import React, { useState, useEffect } from "react"
import { Plus, CheckmarkThin } from "../icon/icon.component"
import CustomLoader from "../custom-loader/custom-loader.component"
import { request } from "../../helpers/api"
import { formatNumberWithCommas } from "../../helpers/functions"

function LastTransactions() {
  const [info, setInfo] = useState([])
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    setIsLoading(true)
    request(`/user/profile/wallet-transactions`, (res) => {
      setInfo(res.data.transactions.data)
      console.log(res.data.transactions.data)
      setIsLoading(false)
    })
  }, [setIsLoading, setInfo])

  return (
    <div className="w-full my-1">
      <div className="w-full">
        <div className="w-full mb-3">
          <span className="text-lg">آخرین تراکنش‌ها</span>
        </div>
        <div className="flex flex-col">
          {isLoading ? (
            <CustomLoader />
          ) : (
            info.map((transaction, index) => (
              <div
                className={`rounded-lg border border-${
                  transaction.type === "deposit" ? "green" : "orange"
                }-400 px-2 py-2 mb-2`}
              >
                <div className="grid grid-rows-1 grid-cols-10 gap-x-1">
                  <div className="justify-self-center flex flex-col items-center justify-center">
                    <div>
                      {transaction.type === "deposit" ? (
                        <Plus
                          className={`md:text-4xl text-2xl text-${
                            transaction.type === "deposit" ? "green" : "orange"
                          }-400`}
                        />
                      ) : (
                        <CheckmarkThin
                          className={`md:text-4xl text-2xl text-${
                            transaction.type === "deposit" ? "green" : "orange"
                          }-400`}
                        />
                      )}
                    </div>
                  </div>
                  <div className="justify-self-center flex flex-col col-span-4">
                    <span className="lg:leading-8 leading-6 text-gray-600 lg:text-base text-xsm">
                      عنوان
                    </span>
                    <span className="lg:leading-10 leading-8 text-gray-800 lg:text-sm text-xsm">
                      {transaction.meta
                        ? transaction.meta.description ?? "..."
                        : "..."}
                    </span>
                  </div>
                  <div className="justify-self-center flex flex-col col-span-2">
                    <span className="lg:leading-8 leading-6 text-gray-600 lg:text-base text-xsm">
                      {transaction.type === "deposit"
                        ? "تاریخ انقضای اعتبار"
                        : "تاریخ"}
                    </span>
                    <span className="lg:leading-10 leading-8 text-gray-800 lg:text-base text-xsm">
                      {transaction.type === "deposit"
                        ? transaction.expire_date
                        : transaction.shamsi_date}
                    </span>
                  </div>
                  <div className="justify-self-center flex flex-col col-span-3">
                    <span className="lg:leading-8 leading-6 text-gray-600 lg:text-base text-xsm">
                      مبلغ
                    </span>
                    <span className="lg:leading-10 leading-8 text-gray-800 lg:text-base text-xsm">
                      {formatNumberWithCommas(Math.abs(transaction.amount))} تومان
                    </span>
                  </div>
                  {/* <div className="justify-self-center flex flex-col col-span-2">
                    <span className="lg:leading-8 leading-6 text-gray-600 lg:text-base text-xsm">
                      موجودی
                    </span>
                    <span className="lg:leading-10 leading-8 text-gray-800 lg:text-base text-xsm">
                      35,000 تومان
                    </span>
                  </div> */}
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  )
}

export default LastTransactions
