import React from "react"
import { useQuizDispatch, sendAnswers, useQuizState } from "../../contexts/quiz-context"
import Loader from "react-loader-spinner"
import { useState } from "react"

function QuizStep(props) {
  
  const quizDispatch = useQuizDispatch()

  const handleChange = (e) => {
    const { target } = e

    quizDispatch({
      type: "CHANGE_INPUT",
      payload: [{
        name: target.name,
        value: target.value,
      }],
    })

    props.handleChange(e)
  }


  return (
    <div>
      <h3 className="my-4 text-xl sm:text-3xl text-blue-1000 font-bold">
        سوال {props.question.order}
      </h3>
      <hr
        className="bg-blue-800 my-4"
        style={{
          height: 1,
        }}
      />
      <span className="text-lg">{props.question.title}</span>
      <div className="flex flex-col mt-5">
        {props.question.options.map((option, index) => (
          <div className="my-3 flex flex-row items-center">
            <input
              type="radio"
              id={option.id}
              name={props.question.id}
              onChange={(e) => handleChange(e)}
              className="mx-2 h-4 w-4"
              value={option.id}
              checked={props.getState(props.question.id) == option.id}
            />
            <label htmlFor={option.id}>
              <span className="ml-2">{index + 1})</span> {option.title}
            </label>
          </div>
        ))}
      </div>
      <div className="mt-8 flex flex-row justify-between">
        <button
          className={`bg-white rounded-lg border-2 ${
            props.hasNext()
              ? "border-green-500 text-green-500"
              : props.submitting
              ? "border-gray-500 text-gray-500"
              : "border-red-500 text-red-500"
          } font-bold py-2 px-8 text-xl`}
          disabled={props.submitting ? true : false}
          onClick={props.hasNext() ? props.next : props.submitQuiz}
        >
          {props.hasNext() ? (
            <>بعدی</>
          ) : props.submitting ? (
            <Loader type="Circles" color="gray" height="30px" width="30px" />
          ) : (
            <>اتمام آزمون</>
          )}
        </button>
        <button
          className={`bg-white rounded-lg border-2 ${
            props.hasPrev()
              ? "border-green-500 text-green-500"
              : "border-gray-500 text-gray-500"
          } font-bold py-2 px-8 text-xl`}
          onClick={props.prev}
        >
          قبلی
        </button>
      </div>
    </div>
  )
}

export default QuizStep
