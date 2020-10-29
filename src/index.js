import React from "react"
import ReactDOM from "react-dom"
import App from "./App"
import { BrowserRouter, Route } from "react-router-dom"
import { QueryParamProvider } from "use-query-params"
// import TagManager from "react-gtm-module"

import "react-toastify/dist/ReactToastify.css"
import "./assets/main.css"
import "./assets/fonts/font.css"
import { AuthProvider } from "./contexts/auth-context"
import { SiteProvider } from "./contexts/site-context"

// const tagManagerArgs = {
//   gtmId: "GTM-T4WT6L5",
// }

// TagManager.initialize(tagManagerArgs)

import JavascriptTimeAgo from "javascript-time-ago"

import fa from "javascript-time-ago/locale/fa"

JavascriptTimeAgo.addLocale(fa)

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <QueryParamProvider ReactRouterRoute={Route}>
        <SiteProvider>
          <AuthProvider>
            <App />
          </AuthProvider>
        </SiteProvider>
      </QueryParamProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
)
