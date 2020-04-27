import React from "react";
import "./App.css";
import { Route, Switch } from "react-router-dom";

import routes from "./routes";

import TopNav from "./components/top-nav/top-nav.component";

function App() {
   return (
      <div className="bg-white">
         <TopNav />
         <Switch>
            {routes.map((route) => (
               <Route {...route} />
            ))}
         </Switch>
      </div>
   );
}

export default App;
