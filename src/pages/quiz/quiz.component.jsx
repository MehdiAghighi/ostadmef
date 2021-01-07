import React, { useEffect, useState } from "react"
import { useParams, Link, useHistory, useLocation } from "react-router-dom"
import { Helmet } from "react-helmet"
import { toast } from "react-toastify"
import Rodal from "rodal"

import API from "../../helpers/api"
import CustomLoader from "../../components/custom-loader/custom-loader.component"
import { Steps, Step } from "react-step-builder"
import QuizStep from "../../components/quiz-step/quiz-step.component"
import {
  QuizProvider,
  useQuizDispatch,
  sendAnswers,
  useQuizState,
} from "../../contexts/quiz-context"

function Quiz(props) {
  const quizDispatch = useQuizDispatch()
  const { answers, submitting, isModalOpen, result, nextVideo } = useQuizState()
  const setSubmitting = (p) =>
    quizDispatch({ type: "TOGGLE_SUBMITTING", payload: p })

  const [quiz, setQuiz] = useState({})
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState("")
  const history = useHistory()

  useEffect(() => {
    API.get(`/quiz/admin/${props.slug}`)
      .then((resp) => {
        return resp.data
      })
      .then((data) => {
        setQuiz(data.quiz)
        setIsLoading(false)
      })
      .catch((err) => {
        if (err.response) {
          if (err.response.status === 403) {
            toast.error("شما دسترسی به این آزمون ندارید")
            setError(403)
          } else if (err.response.status === 401) {
            toast.warning("برای کوییز دادن ، وارد شوید")
            setError(401)
          } else if (err.response.status === 404) {
            toast.error("همچین کوییزی موجود نیست")
          } else if (err.response.status === 400) {
            setQuiz(err.response.data)
            setError(400)
            quizDispatch({
              type: "CHANGE_RESULT",
              payload: err.response.data.result,
            })
            quizDispatch({ type: "TOGGLE_MODAL", payload: true })
          } else {
            toast.error(err.response.data.message)
          }
          setIsLoading(false)
        } else {
          toast.error("مشکلی در ارتباط با سرور پیش آمده است")
        }
      })
  }, [props.slug])

  useEffect(() => {
    if (quiz.questions) {
      const values = []
      quiz.questions.map((q, index) => {
        values.push({ name: q.id, value: null })
      })
      quizDispatch({ type: "CHANGE_INPUT", payload: values })
    }
  }, [quiz])

  const submitQuiz = () => {
    sendAnswers(quizDispatch, answers, quiz.id)
  }

  return isLoading ? (
    <CustomLoader />
  ) : (
    <>
      <Helmet>
        <title>کوییز | لینوم</title>
        <meta name="robots" content="noindex,nofollow" />
        <meta
          name="description"
          content="لینوم یک پلتفرم آموزشی میکرولرنینگ است که با تکیه بر ویدئو های کپسولی و فشرده ، یادگیری دروس دانشگاهی را در سریع ترین زمان ممکن به ارمغان می آورد."
        />
      </Helmet>
      {!error ? (
        <div className="container mx-auto">
          <div className="flex flex-row justify-between items-center">
            <h2 className="text-blue-900 text-2xl mt-12 mb-4 font-bold">
              {quiz.quizzable.title}
            </h2>
            {quiz.quizzable ? (
              <Link
                to={`/video/${quiz.quizzable.id}`}
                className="bg-white text-blue-900 hover:bg-blue-900 hover:text-white rounded border border-blue-900 py-3 px-6 transition-all duration-75"
              >
                بازگشت به ویدیو
              </Link>
            ) : null}
          </div>
          <div className="bg-site-brown rounded-lg py-2 px-3 my-8 shadow-lg relative overflow-hidden">
            <Steps>
              {quiz.questions.map((question, index) => (
                <Step
                  component={(props) => (
                    <QuizStep
                      {...props}
                      {...{ question, submitting, setSubmitting, submitQuiz }}
                    />
                  )}
                />
              ))}
            </Steps>
            <Rodal
              visible={isModalOpen}
              onClose={() => quizDispatch({ type: "TOGGLE_MODAL" })}
              customStyles={{
                borderRadius: 15,
              }}
              animation="slideUp"
              duration={500}
              className="absolute"
              showCloseButton={false}
              closeMaskOnClick={false}
            >
              <div className="w-full h-full flex flex-col">
                <div className="mx-auto font-bold text-2xl text-center text-green-600">
                  نمره شما در این کوییز
                </div>
                <div className="flex flex-col h-full justify-center items-center">
                  <div className="w-full font-bold flex justify-around text-green-900 text-3xl">
                    {result ? (
                      <div
                        className={`h-24 w-24 text-center mx-auto flex flex-col justify-center items-center my-2 ${
                          result.percentage >= 50 ? "circle-100" : "circle-50"
                        } border-8`}
                        style={{
                          "--v":
                            result.percentage >= 50
                              ? `${(18 / 5) * result.percentage - 270}deg`
                              : `${(18 / 5) * result.percentage - 90}deg`,
                        }}
                      >
                        <span className="text-gray-700 text-xl">
                          {result.percentage}%
                        </span>
                      </div>
                    ) : (
                      <CustomLoader />
                    )}
                  </div>
                </div>
                <div className="flex flex-row justify-center">
                  {nextVideo ? (
                    <Link
                      to={`/video/${nextVideo}`}
                      className="rounded-lg bg-white text-green-500 border-2 border-green-500 py-3 px-6 text-lg hover:bg-green-500 hover:text-white transition-all duration-75 mx-2"
                    >
                      مبحث بعدی
                    </Link>
                  ) : null}
                  <button
                    onClick={() => history.go(0)}
                    className="rounded-lg bg-white text-orange-500 border-2 border-orange-500 py-3 px-6 text-lg hover:bg-orange-500 hover:text-white transition-all duration-75 mx-2"
                  >
                    مشاهده پاسخ‌ها
                  </button>
                </div>
              </div>
            </Rodal>
          </div>
        </div>
      ) : error == 400 ? (
        <div>
          <div className="container mx-auto">
            <div className="">
              <h2 className="text-blue-900 text-2xl mt-12 mb-4 font-bold">
                {quiz.quiz.quizzable.title}
              </h2>
              <h4 className="text-blue-700 text-lg mt-2 mb-4">پاسخ‌های شما</h4>
              <div className="w-24 h-24 mx-auto">
                <div
                  className={`h-24 text-center mx-auto w-auto flex flex-col justify-center items-center ${
                    quiz.result.percentage >= 50 ? "circle-100" : "circle-50"
                  } border-8`}
                  style={{
                    "--v":
                      quiz.result.percentage >= 50
                        ? `${(18 / 5) * quiz.result.percentage - 270}deg`
                        : `${(18 / 5) * quiz.result.percentage - 90}deg`,
                  }}
                >
                  <span className="text-gray-700 text-xl">
                    {quiz.result.percentage}%
                  </span>
                </div>
              </div>
            </div>
            <div className="bg-site-brown rounded-lg py-2 px-3 my-8 shadow-lg relative overflow-hidden">
              {quiz.quiz.questions.map((question, index) => (
                <div>
                  <h3 className="my-4 text-xl sm:text-3xl text-blue-1000 font-bold">
                    سوال {question.order}
                  </h3>
                  <hr
                    className="bg-blue-800 my-4"
                    style={{
                      height: 1,
                    }}
                  />
                  <span className="text-lg">{question.title}</span>
                  <div className="flex flex-col mt-5">
                    {question.options.map((option, index) => (
                      <div className="my-3 flex flex-row items-center">
                        <input
                          type="radio"
                          id={option.id}
                          name={question.id}
                          onChange=""
                          className="mx-2 h-4 w-4"
                          value={option.id}
                          checked={quiz.answers[question.id].option_id == option.id}
                        />
                        <label htmlFor={option.id}>
                          <span className="ml-2">{index + 1})</span> {option.title}
                        </label>
                        {option.right ? (
                          <span className="mx-2 text-green-600 text-xs font-bold">
                            پاسخ صحیح
                          </span>
                        ) : null}
                      </div>
                    ))}
                    {question.descriptive_answer ? (
                      <div>
                        <div className="bg-white mx-3 mt-6 mb-2 rounded-lg py-3 px-4">
                          <span className="text-teal-600 font-bold text-lg">
                            پاسخ تشریحی:
                          </span>
                          <div
                            className="mt-2"
                            dangerouslySetInnerHTML={{
                              __html: question.descriptive_answer,
                            }}
                          ></div>
                        </div>
                      </div>
                    ) : null}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      ) : null}
      {error == 401 ? (
        <div className="text-red-600 text-3xl text-center mx-auto mt-16 mb-2">
          لطفا اول وارد شوید
        </div>
      ) : null}
    </>
  )
}

export function QuizWrapper(props) {
  const { slug } = useParams()
  return (
    <QuizProvider>
      <Quiz slug={slug} />
    </QuizProvider>
  )
}
export default Quiz
