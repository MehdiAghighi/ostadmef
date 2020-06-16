import React from "react"
import ReactDOM from "react-dom"
import App from "./App"
import { BrowserRouter, Route } from "react-router-dom"
import { QueryParamProvider } from "use-query-params"
import TagManager from "react-gtm-module"

import "react-toastify/dist/ReactToastify.css"
import "./assets/main.css"
import "./assets/fonts/font.css"
import { AuthProvider } from "./contexts/auth-context"

const tagManagerArgs = {
  gtmId: "GTM-T4WT6L5",
}

TagManager.initialize(tagManagerArgs)

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <QueryParamProvider ReactRouterRoute={Route}>
        <AuthProvider>
          <App />
        </AuthProvider>
      </QueryParamProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
)
