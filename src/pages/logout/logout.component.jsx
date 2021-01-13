import React, { useEffect } from "react"
import { useAuthDispatch } from "../../contexts/auth-context"
import { Redirect } from "react-router-dom"
import { setCookie } from "../../helpers/functions"

function Logout(props) {
  const authDispatch = useAuthDispatch()

  useEffect(() => {
    setCookie("token", "", -30, "linom.ir")
    setCookie("token", "", -30, "localhost")
    setCookie("token", "", -30, "sanctum.test")
    authDispatch({ type: "LOGOUT" })
  }, [authDispatch])
  return <Redirect to="/" push={true} />
}

export default Logout
