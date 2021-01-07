import React from "react"

import RefImageDekstop from "../../assets/images/ref-desktop.jpg"
import RefImageMobile from "../../assets/images/ref-mobile.jpg"
import { useAuthState } from "../../contexts/auth-context"
import { useHistory } from "react-router-dom"
import { toast } from "react-toastify"

function TopHeaderImage() {

    const { isLoggedIn } = useAuthState()
    const history = useHistory()

    const goToInvite = () => {
        if (isLoggedIn) {
            history.push("/profile/invite")
        } else {
            toast.error("شما وارد نشده‌اید.")
        }
    }

    return (
      <div onClick={goToInvite} className="cursor-pointer">
        <img className="hidden sm:block" src={RefImageDekstop} />
        <img className="sm:hidden block" src={RefImageMobile} />
      </div>
    )
}

export default TopHeaderImage