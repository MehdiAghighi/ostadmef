import React from "react"
import { Switch, Route } from "react-router-dom"

import routes from "./routes-sitemap.js"

export default (
  <Switch>
    {routes.map((route, index) => (
      <Route exact key={index} path={route.path} />
    ))}
    <Route />
  </Switch>
)
