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
    case "CHANGE_AFTER_LOGIN": {
      return {
        ...state,
        afterLogin: {
          ...state.afterLogin,
          action: action.payload.action,
          url: action.payload.url ? action.payload.url : "",
          buttonText: action.payload.buttonText ? action.payload.buttonText : "",
          getDataFrom: action.payload.getDataFrom ? action.payload.getDataFrom : "",
          payload: action.payload.payload ? action.payload.payload : "",
        },
      }
    }
    case "LOGIN": {
      return {
        ...state,
        user: action.payload.user,
        isLoggedIn: action.payload.isLoggedIn,
        isLoading: action.payload.isLoading,
      }
    }
    case "UPDATE": {
      return {
        ...state,
        user: action.payload,
      }
    }
    case "LOGOUT": {
      window.dataLayer.push({
        linom_user: null,
      })
      return {
        ...state,
        user: {},
        isLoggedIn: false,
      }
    }
    case "TOGGLE_USER_DATA_MODAL": {
      return {
        ...state,
        userDataModalOpen: !state.userDataModalOpen,
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
    userDataModalOpen: true,
    afterLogin: {
      action: "TOGGLE_MODAL",
      url: "",
      buttonText: "",
      getDataFrom: "",
      payload: {},
    },
    authModalOpen: false,
    user: {},
    isLoggedIn: false,
    isLoading: true,
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
    window.dataLayer.push({
      linom_user: null,
    })
    console.log("توکن موجود نیست")
    return
  }
  const data = await API.get("/auth/me", null, {
    headers: {
      // Authorization: `Bearer ${localStorage.getItem("token")}`,
    },
  }).catch((err) => {
    window.dataLayer.push({
      linom_user: null,
    })
    if (err.response) {
      toast.error(err.response.data.message)
    } else {
      toast.error("دریافت اطلاعات کاربر موفقیت‌آمیز نبود")
    }
    dispatch({ type: "LOGIN", payload: { user: null, isLoading: false, isLoggedIn: false } })
    return
  })
  if (data) {
    dispatch({ type: "LOGIN", payload: { user: data.data, isLoading: false, isLoggedIn: true } })
    window.dataLayer.push({
      linom_user: data.data.phone,
    })
  }
}

async function updateUser(dispatch, values) {
  if (!getCookie("token")) {
    console.log("توکن موجود نیست")
    return
  }
  var formData = new FormData()

  for (const property in values) {
    formData.append(property, values[property])
  }

  const data = await API.post("/auth/update", formData, {
    headers: { "Content-Type": "multipart/form-data" },
  }).catch((err) => {
    if (err.response) {
      toast.error(err.response.data.message)
    } else {
      toast.error("ویرایش اطلاعات موفقیت آمیز نبود")
    }
    return
  })
  if (data) {
    dispatch({ type: "UPDATE", payload: data.data.user })
    window.dataLayer.push({
      // user: {
      //   id: data.data.id,
      //   first_name: data.data.first_name,
      //   last_name: data.data.last_name,
      //   phone: data.data.phone,
      //   university: data.data.university,
      // },
      linom_user: data.data.user.phone,
    })
  }
  return data
}

export { AuthProvider, useAuthState, useAuthDispatch, fetchUser, updateUser }
