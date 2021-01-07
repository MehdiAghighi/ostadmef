import React from "react"
import { useState } from "react"
import { useEffect } from "react"
import { request } from "../../helpers/api"
import CustomLoader from "../custom-loader/custom-loader.component"
import { formatNumberWithCommas } from "../../helpers/functions"

function WalletData() {
  const [info, setInfo] = useState({})
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    setIsLoading(true)
    request(`/user/profile/wallet-data`, (res) => {
      setInfo(res.data.info)
      setIsLoading(false)
    })
  }, [setIsLoading, setInfo])

  return (
    <div className="w-full">
      <span className="text-orange-500 text-lg mb-4">وضعیت کیف پول</span>
      <div className="w-full rounded border-2 border-orange-500 px-2 py-2">
        {isLoading ? (
          <CustomLoader />
        ) : (
          <div className="flex sm:flex-row flex-col-reverse w-full">
            <div className="flex flex-col sm:w-8/12 w-full">
              <div className="flex flex-row border-b border-orange-300 my-2">
                <div className="w-1/2">
                  <div className="flex flex-col leading-7">
                    <span className="text-gray-600 lg:text-base text-xsm">
                      میزان کل اعتبار کسب شده
                    </span>
                    <span className="text-orange-500 lg:text-base text-xsm">
                      {formatNumberWithCommas(info.all_deposits)} تومان
                    </span>
                  </div>
                </div>
                <div className="w-1/2">
                  <div className="flex flex-col leading-7">
                    <span className="text-gray-600 lg:text-base text-xsm">
                      تاریخ آخرین افزایش
                    </span>
                    <span className="text-orange-500 lg:text-base text-xsm">
                      {info.last_deposit_date ? info.last_deposit_date : "..."}
                    </span>
                  </div>
                </div>
              </div>

              <div className="flex flex-row my-2 w-full">
                <div className="w-1/2">
                  <div className="flex flex-col leading-7">
                    <span className="text-gray-600 lg:text-base text-xsm">
                      میزان کل اعتبار مصرف شده
                    </span>
                    <span className="text-orange-500 lg:text-base text-xsm">
                      {formatNumberWithCommas(info.all_withdraws)} تومان
                    </span>
                  </div>
                </div>
                <div className="w-1/2">
                  <div className="flex flex-col leading-7">
                    <span className="text-gray-600 lg:text-base text-xsm">
                      تاریخ آخرین مصرف
                    </span>
                    <span className="text-orange-500 lg:text-base text-xsm">
                      {info.last_withdraw_date ? info.last_withdraw_date : "..."}
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <div className="xl:py-5 lg:py-3 lg:px-4 px-1 sm:w-4/12 w-full flex justify-center">
              <div className="rounded bg-orange-100 py-4 lg:px-4 px-2 flex flex-col justify-between sm:w-auto w-full text-center">
                <div className="w-full font-bold flex justify-around text-orange-500 text-2xl lg:mt-0 mt-4">
                  {info.balance} تومان
                </div>
                <span className="text-gray-600 text-base">اعتبار فعلی شما</span>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default WalletData
