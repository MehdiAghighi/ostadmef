import React from "react"
// import API from "../helpers/api"
// import { toast } from "react-toastify"
// import { getCookie } from "../helpers/functions"

const SiteStateContext = React.createContext()
const SiteDispatchContext = React.createContext()

function siteReducer(state, action) {
  switch (action.type) {
    case "TOGGLE_SIDEBAR": {
      if (state.sidebarOpen) {
        document.body.style.overflow = "unset"
      } else {
        document.body.style.overflow = "hidden"
      }
      return {
        ...state,
        sidebarOpen: !state.sidebarOpen,
      }
    }
    case "CLOSE_SIDEBAR": {
      document.body.style.overflow = "unset"
      return {
        ...state,
        sidebarOpen: false,
      }
    }
    case "TOGGLE_BUY_MODAL":
      return {
        ...state,
        buyModalOpen: action.payload.open
          ? true
          : action.payload.open,
      }
    default: {
      throw new Error(`Unhandled action type: ${action.type}`)
    }
  }
}
function SiteProvider({ children }) {
  const [state, dispatch] = React.useReducer(siteReducer, {
    sidebarOpen: false,
    buyModalOpen: false,
  })
  return (
    <SiteStateContext.Provider value={state}>
      <SiteDispatchContext.Provider value={dispatch}>
        {children}
      </SiteDispatchContext.Provider>
    </SiteStateContext.Provider>
  )
}
function useSiteState() {
  const context = React.useContext(SiteStateContext)
  if (context === undefined) {
    throw new Error("useSiteState must be used within a SiteProvider")
  }
  return context
}
function useSiteDispatch() {
  const context = React.useContext(SiteDispatchContext)
  if (context === undefined) {
    throw new Error("useSiteDispatch must be used within a SiteProvider")
  }
  return context
}

export { SiteProvider, useSiteState, useSiteDispatch }
