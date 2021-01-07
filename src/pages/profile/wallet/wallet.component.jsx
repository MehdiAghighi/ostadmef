import React from "react"
import WalletData from "../../../components/wallet-data/wallet-data.component"
import LastTransactions from "../../../components/last-transactions/last-transactions.component"

function ProfileWallet() {
    return (
      <div className="w-full">
        <div className="w-full">
          <div className="w-full">
            <div className="mb-2">
              <WalletData />
            </div>
            <div className="mb-2">
                <LastTransactions />
            </div>
          </div>
        </div>
      </div>
    )
}

export default ProfileWallet