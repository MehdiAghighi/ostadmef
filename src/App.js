import React from "react";
import "./App.css";
import { Route, Switch } from "react-router-dom";

import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";

import routes from "./routes";

import TopNav from "./components/top-nav/top-nav.component";
import Footer from "./components/footer/footer.component";

import Login from "./pages/login/login.component";

import { AuthProvider } from "./contexts/auth-context";

function App() {
   return (
      <div className="bg-white">
         <AuthProvider>
            <Login />
            <TopNav />
            <Switch>
               {routes.map((route) => (
                  <Route {...route} />
               ))}
            </Switch>
            <Footer />
         </AuthProvider>
      </div>
   );
}

export default App;
