import React, { useEffect } from "react";
import { useAuthDispatch } from "../../contexts/auth-context";
import { Redirect } from "react-router-dom";

function Logout(props) {
    const authDispatch = useAuthDispatch();

    useEffect(() => {
        localStorage.removeItem("token");
        authDispatch({ type: "LOGOUT" });
    }, []);
    return <Redirect to="/" push={true} />;
}

export default Logout;
