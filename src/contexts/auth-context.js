import React from "react";
const AuthStateContext = React.createContext();
const AuthDispatchContext = React.createContext();

function authReducer(state, action) {
   switch (action.type) {
      case "TOGGLE_MODAL": {
         if (state.authModalOpen) {
            document.body.style.overflow = "unset";
         } else {
            document.body.style.overflow = "hidden";
         }
         return {
            ...state,
            authModalOpen: !state.authModalOpen,
         };
      }
      default: {
         throw new Error(`Unhandled action type: ${action.type}`);
      }
   }
}
function AuthProvider({ children }) {
   const [state, dispatch] = React.useReducer(authReducer, {
      authModalOpen: false,
   });
   return (
      <AuthStateContext.Provider value={state}>
         <AuthDispatchContext.Provider value={dispatch}>
            {children}
         </AuthDispatchContext.Provider>
      </AuthStateContext.Provider>
   );
}
function useAuthState() {
   const context = React.useContext(AuthStateContext);
   if (context === undefined) {
      throw new Error("useAuthState must be used within a AuthProvider");
   }
   return context;
}
function useAuthDispatch() {
   const context = React.useContext(AuthDispatchContext);
   if (context === undefined) {
      throw new Error("useAuthDispatch must be used within a AuthProvider");
   }
   return context;
}
export { AuthProvider, useAuthState, useAuthDispatch };
