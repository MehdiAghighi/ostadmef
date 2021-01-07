import React, { useEffect } from "react"
import "./App.css"
import "rodal/lib/rodal.css"

import { Helmet } from "react-helmet"
import { Route, Switch, withRouter } from "react-router-dom"
import { useQueryParams, NumberParam, withDefault, BooleanParam } from "use-query-params"
import { ToastContainer, toast } from "react-toastify"

import "react-loader-spinner/dist/loader/css/react-spinner-loader.css"
import routes from "./routes"

import TopNav from "./components/top-nav/top-nav.component"
import Footer from "./components/footer/footer.component"

import Login from "./pages/login/login.component"

import { fetchUser, useAuthDispatch } from "./contexts/auth-context"
import { setCookie } from "./helpers/functions"
import { useSiteDispatch } from "./contexts/site-context"
import TopHeaderImage from "./components/top-header-image/top-header-image.component"
import ProtectedRoute from "./components/protected-route/protected-route.component"

toast.configure({})
function App(props) {
  const authDispatch = useAuthDispatch()
  const siteDispatch = useSiteDispatch()

  const [query, setQuery] = useQueryParams({
    utm_source: withDefault(NumberParam, null, true),
    referral: withDefault(NumberParam, null, true),
    failed: withDefault(BooleanParam, null, true)
  })
  const { utm_source, referral, failed } = query

  useEffect(() => {
    window.dataLayer = window.dataLayer || []
    if (utm_source) {
      setCookie("utm_source", utm_source, 90, ".linom.ir")
      setCookie("utm_source", utm_source, 90, "localhost")
      setCookie("utm_source", utm_source, 90, ".sanctum.test")
    }
    if (referral) {
      setCookie("referral", referral, 30, ".linom.ir")
      setCookie("referral", referral, 30, "localhost")
      setCookie("referral", referral, 30, ".sanctum.test")
    }
    fetchUser(authDispatch)
  }, [])

  useEffect(() => {
    if (failed === true) {
      toast.error("شما وارد نشده‌اید.")
    }
  }, [failed])

  useEffect(() => {
    const listen = props.history.listen((location, action) => {
      if (action == "PUSH") {
        siteDispatch({ type: "CLOSE_SIDEBAR" })
        window.scrollTo(0, 0)
      }
    })

    return () => {
      listen()
    }
  }, [])
  return (
    <div className="bg-white font-sans">
      <Helmet>
        <meta charSet="utf-8" />
      </Helmet>
      <Login />
      <TopHeaderImage />
      <TopNav />
      <Switch>
        {routes.map((route, index) => {
          if (route.protected) {
            return <ProtectedRoute key={index} {...route} />
          } else {
            return <Route key={index} {...route} />
          }
        })}
      </Switch>
      <Footer />
      <ToastContainer
        rtl={true}
        position={toast.POSITION.BOTTOM_LEFT}
        closeButton={false}
        limit={2}
        toastClassName="font-sans font-bold"
        autoClose={4000}
      />
    </div>
  )
}

export default withRouter((props) => <App {...props} />)
