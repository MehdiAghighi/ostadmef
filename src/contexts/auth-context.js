import React from "react"
import API from "../helpers/api"
import { toast } from "react-toastify"
import { getCookie } from "../helpers/functions"

const AuthStateContext = React.createContext()
const AuthDispatchContext = React.createContext()

function authReducer(state, action) {
  switch (action.type) {
    case "TOGGLE_MODAL": {
      if (state.authModalOpen) {
        document.body.style.overflow = "unset"
      } else {
        document.body.style.overflow = "hidden"
      }
      return {
        ...state,
        authModalOpen: !state.authModalOpen,
      }
    }
    case "LOGIN": {
      return {
        ...state,
        user: action.payload,
        isLoggedIn: true,
      }
    }
    case "LOGOUT": {
      return {
        ...state,
        user: {},
        isLoggedIn: false,
      }
    }
    // case "LOGIN": {
    //    return {
    //       ...state,
    //       isLoggedIn: true
    //    }
    // }
    default: {
      throw new Error(`Unhandled action type: ${action.type}`)
    }
  }
}
function AuthProvider({ children }) {
  const [state, dispatch] = React.useReducer(authReducer, {
    authModalOpen: false,
    user: {},
    isLoggedIn: false,
  })
  return (
    <AuthStateContext.Provider value={state}>
      <AuthDispatchContext.Provider value={dispatch}>
        {children}
      </AuthDispatchContext.Provider>
    </AuthStateContext.Provider>
  )
}
function useAuthState() {
  const context = React.useContext(AuthStateContext)
  if (context === undefined) {
    throw new Error("useAuthState must be used within a AuthProvider")
  }
  return context
}
function useAuthDispatch() {
  const context = React.useContext(AuthDispatchContext)
  if (context === undefined) {
    throw new Error("useAuthDispatch must be used within a AuthProvider")
  }
  return context
}

async function fetchUser(dispatch) {
  if (!getCookie("token")) {
    console.log("توکن موجود نیست")
    return
  }
  const data = await API.post("/auth/me", null, {
    headers: {
      // Authorization: `Bearer ${localStorage.getItem("token")}`,
    },
  }).catch((err) => {
    if (err.response) {
      toast.error(err.response.data.message)
    } else {
      toast.error("دریافت اطلاعات کاربر موفقیت‌آمیز نبود")
    }
    return
  })
  if (data) {
    dispatch({ type: "LOGIN", payload: data.data })
  }
}

export { AuthProvider, useAuthState, useAuthDispatch, fetchUser }
