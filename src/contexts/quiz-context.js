import React from "react"
import API from "../helpers/api"
import { toast } from "react-toastify"
import { getCookie } from "../helpers/functions"

const QuizStateContext = React.createContext()
const QuizDispatchContext = React.createContext()

function quizReducer(state, action) {
  switch (action.type) {
    case "CHANGE_INPUT": {
      const temp = {
        ...state,
        answers: {
          ...state.answers,
        },
      }
      action.payload.map((q, index) => {
        temp.answers[q.name] = q.value
      })
      return temp
    }
    case "TOGGLE_MODAL": {
      return {
        ...state,
        isModalOpen: action.payload ? action.payload : !state.isModalOpen
      }
    }
    case "TOGGLE_SUBMITTING": {
      return {
        ...state,
        submitting: action.payload
      }
    }
    case "CHANGE_RESULT": {
      return {
        ...state,
        result: action.payload
      }
    }
    case "CHANGE_NEXT_VIDEO": {
      return {
        ...state,
        nextVideo: action.payload
      }
    }
    default: {
      throw new Error(`Unhandled action type: ${action.type}`)
    }
  }
}
function QuizProvider({ children }) {
  const [state, dispatch] = React.useReducer(quizReducer, {
    answers: {},
    result: {},
    nextVideo: null,
    isModalOpen: false,
    submitting: false
  })
  return (
    <QuizStateContext.Provider value={state}>
      <QuizDispatchContext.Provider value={dispatch}>
        {children}
      </QuizDispatchContext.Provider>
    </QuizStateContext.Provider>
  )
}
function useQuizState() {
  const context = React.useContext(QuizStateContext)
  if (context === undefined) {
    throw new Error("useQuizState must be used within a QuizProvider")
  }
  return context
}
function useQuizDispatch() {
  const context = React.useContext(QuizDispatchContext)
  if (context === undefined) {
    throw new Error("useQuizDispatch must be used within a QuizProvider")
  }
  return context
}

async function sendAnswers(dispatch, values, id) {
  dispatch({ type: "TOGGLE_SUBMITTING", payload: true })
  const ans = JSON.stringify(values)
  const req = await API.post(`/quiz/admin/submit/${id}`, {
    data: ans,
  })
  dispatch({ type: "TOGGLE_SUBMITTING", payload: false })
  dispatch({ type: "CHANGE_RESULT", payload: req.data.result })
  dispatch({ type: "CHANGE_NEXT_VIDEO", payload: req.data.next_video })
  dispatch({ type: "TOGGLE_MODAL", payload: true })
}

export { QuizProvider, useQuizState, useQuizDispatch, sendAnswers }
