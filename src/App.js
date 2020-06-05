import React, { useEffect } from "react";
import "./App.css";
import "rodal/lib/rodal.css";

import { Helmet } from "react-helmet";
import { Route, Switch } from "react-router-dom";
import { useQueryParams, NumberParam, withDefault } from "use-query-params";
import { ToastContainer, toast } from "react-toastify";
import { CookiesProvider, useCookies } from "react-cookie";

import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import routes from "./routes";

import TopNav from "./components/top-nav/top-nav.component";
import Footer from "./components/footer/footer.component";

import Login from "./pages/login/login.component";

import { fetchUser, useAuthDispatch } from "./contexts/auth-context";

toast.configure({});
function App() {
    const authDispatch = useAuthDispatch();

    const [cookies, setCookie] = useCookies(["utm_source"]);

    const [query, setQuery] = useQueryParams({
        utm_source: withDefault(NumberParam, null, true),
    });
    const { utm_source } = query;

    useEffect(() => {
        if (utm_source) {
            setCookie("utm_source", utm_source);
        }
        fetchUser(authDispatch);
    });
    return (
        <div className="bg-white">
            <Helmet>
                <meta charSet="utf-8" />
            </Helmet>
            <CookiesProvider>
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
            </CookiesProvider>
        </div>
    );
}

export default App;
