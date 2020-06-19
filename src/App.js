import React, { useEffect } from "react"
import "./App.css"
import "rodal/lib/rodal.css"

import { Helmet } from "react-helmet"
import { Route, Switch } from "react-router-dom"
import { useQueryParams, NumberParam, withDefault } from "use-query-params"
import { ToastContainer, toast } from "react-toastify"

import "react-loader-spinner/dist/loader/css/react-spinner-loader.css"
import routes from "./routes"

import TopNav from "./components/top-nav/top-nav.component"
import Footer from "./components/footer/footer.component"

import Login from "./pages/login/login.component"

import { fetchUser, useAuthDispatch } from "./contexts/auth-context"
import { setCookie } from "./helpers/functions"

toast.configure({})
function App() {
  const authDispatch = useAuthDispatch()

  const [query, setQuery] = useQueryParams({
    utm_source: withDefault(NumberParam, null, true),
  })
  const { utm_source } = query

  useEffect(() => {
    if (utm_source) {
      setCookie("utm_source", utm_source, 7, "linom.ir")
      setCookie("utm_source", utm_source, 7, "localhost")
    }
    fetchUser(authDispatch)
  })
  return (
    <div className="bg-white">
      <Helmet>
        <meta charSet="utf-8" />
      </Helmet>
      <Login />
      <TopNav />
      <Switch>
        {routes.map((route, index) => (
          <Route key={index} {...route} />
        ))}
      </Switch>
      <Footer />
      <ToastContainer
        rtl={true}
        position={toast.POSITION.BOTTOM_RIGHT}
        closeButton={false}
        limit={1}
        toastClassName="font-sans font-bold"
        autoClose={4000}
      />
    </div>
  )
}

export default App
