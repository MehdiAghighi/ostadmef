import React, { useEffect } from "react";
import "./App.css";

import { Route, Switch } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";

import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import routes from "./routes";

import TopNav from "./components/top-nav/top-nav.component";
import Footer from "./components/footer/footer.component";

import Login from "./pages/login/login.component";

import { fetchUser, useAuthDispatch } from "./contexts/auth-context";

toast.configure({});
function App() {
   const authDispatch = useAuthDispatch();
   useEffect(async () => {
      await fetchUser(authDispatch);
   });
   return (
      <div className="bg-white">
         <Login />
         <TopNav />
         <Switch>
            {routes.map((route) => (
               <Route {...route} />
            ))}
         </Switch>
         <Footer />
         <ToastContainer
            rtl={true}
            position={toast.POSITION.BOTTOM_RIGHT}
            closeButton={false}
            limit={1}
            toastClassName="font-sans font-bold"
            autoClose={false}
         />
      </div>
   );
}

export default App;
