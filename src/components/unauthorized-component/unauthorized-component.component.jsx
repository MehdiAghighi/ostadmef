import React from "react"
import { useEffect } from "react"
import { Redirect } from "react-router-dom"
import { toast } from "react-toastify"

function UnauthorizedComponent() {

    return (
        <Redirect to="/?failed=1" />
    )
}

export default UnauthorizedComponent