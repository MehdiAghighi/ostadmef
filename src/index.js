import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "react-toastify/dist/ReactToastify.css";
import "./assets/main.css";
import "./assets/fonts/font.css";
import { BrowserRouter } from "react-router-dom";
import { AuthProvider } from "./contexts/auth-context";

ReactDOM.render(
   <React.StrictMode>
      <BrowserRouter>
         <AuthProvider>
            <App />
         </AuthProvider>
      </BrowserRouter>
   </React.StrictMode>,
   document.getElementById("root")
);
