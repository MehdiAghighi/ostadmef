import React from "react"
import { useAuthState } from "../../contexts/auth-context"
import { Route, Redirect } from "react-router-dom"
import { useEffect } from "react"
import { toast } from "react-toastify"
import UnauthorizedComponent from "../unauthorized-component/unauthorized-component.component"

function ProtectedRoute({ component: Component, ...rest }) {
  const { user, isLoggedIn, isLoading } = useAuthState()

  return (
    <Route
      {...rest}
      render={(props) =>
        !isLoading ? (
          isLoggedIn ? (
            <Component {...props} />
          ) : (
            <UnauthorizedComponent />
          )
        ) : null
      }
    />
  )
}

export default ProtectedRoute
