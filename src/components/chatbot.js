import React, { Fragment, useEffect, useRef, useState, useContext } from "react"
import { Link } from "gatsby"
import chatbotStyles from "../styles/chatbot.module.scss"
import chatIcon from "../images/chat/ico_chat1.svg"
import personIcon from "../images/chat/ico_chat2.svg"
import PageContext from "../context/pageContext"

const Chatbot = React.forwardRef(({ pageContext }, ref) => {
  const { changeCalories } = useContext(PageContext)
  const [questionNumber, changeQuestion] = useState(1)
  const [gender, changeGender] = useState()
  const [height, changeHeight] = useState()
  const [weight, changeWeight] = useState()
  const [age, changeAge] = useState()
  const [activity, changeActivity] = useState()
  const [purpose, changePurpose] = useState()
  const thirdQuestion = useRef(null)
  const caloriesFromOffer = [1200, 1500, 1800, 2000, 2500, 3000]

  const scrollToRef = ref => {
    return window.scroll({ top: ref.current.offsetTop, behavior: "smooth" })
  }

  // useEffect(() => {
  //   if(questionNumber === 3) {
  //     scrollToRef(thirdQuestion)
  //   }
  // }, [questionNumber])

  const renderAnswerButtons = () => {
    if (questionNumber === 1) {
      return (
        <button
          onClick={() => {
            changeQuestion(2)
          }}
        >
          Zaczynajmy!
        </button>
      )
    }
    if (questionNumber === 2) {
      return (
        <Fragment>
          <button
            onClick={() => {
              changeQuestion(3)
              changeGender("female")
            }}
          >
            Jestem kobietą
          </button>
          <button
            onClick={() => {
              changeQuestion(3)
              changeGender("male")
            }}
          >
            Jestem mężczyzną
          </button>
        </Fragment>
      )
    }
    if (questionNumber === 3) {
      return (
        <Fragment>
          <input
            value={height}
            type="number"
            onChange={({ target: { value } }) => changeHeight(value)}
          />
          <button
            onClick={() => {
              changeQuestion(4)
            }}
          >
            Ok
          </button>
        </Fragment>
      )
    }
    if (questionNumber === 4) {
      return (
        <Fragment>
          <input
            value={weight}
            type="number"
            onChange={({ target: { value } }) => changeWeight(value)}
          />
          <button
            onClick={() => {
              changeQuestion(5)
            }}
          >
            Ok
          </button>
        </Fragment>
      )
    }
    if (questionNumber === 5) {
      return (
        <Fragment>
          <input
            value={age}
            type="number"
            onChange={({ target: { value } }) => changeAge(value)}
          />
          <button
            onClick={() => {
              changeQuestion(6)
            }}
          >
            Ok
          </button>
        </Fragment>
      )
    }
    if (questionNumber === 6) {
      return (
        <Fragment>
          <button
            onClick={() => {
              changeQuestion(7)
              changeActivity(1.2)
            }}
          >
            Niska
          </button>
          <button
            onClick={() => {
              changeQuestion(7)
              changeActivity(1.4)
            }}
          >
            Średnia
          </button>
          <button
            onClick={() => {
              changeQuestion(7)
              changeActivity(1.6)
            }}
          >
            Wysoka
          </button>
          <button
            onClick={() => {
              changeQuestion(7)
              changeActivity(1.75)
            }}
          >
            Bardzo wysoka
          </button>
        </Fragment>
      )
    }
    if (questionNumber === 7) {
      return (
        <Fragment>
          <button
            onClick={() => {
              changeQuestion(8)
              changePurpose("lose weight")
            }}
          >
            Chcę schudnąć
          </button>
          <button
            onClick={() => {
              changeQuestion(8)
              changePurpose("maintain weight")
            }}
          >
            Chcę utrzymać wagę
          </button>
          <button
            onClick={() => {
              changeQuestion(8)
              changePurpose("get weight")
            }}
          >
            Chcę przytyć
          </button>
        </Fragment>
      )
    }
    if (questionNumber === 8) {
      return (
        <Fragment>
          <Link
            to={
              pageContext.city
                ? `/${pageContext.city}/${handleDietSuggestion().dietUrl}`
                : `/${handleDietSuggestion().dietUrl}`
            }
          >
            <button onClick={() => changeCalories(suggestCaloriesFromOffer())}>
              Sprawdź dietę
            </button>
          </Link>
        </Fragment>
      )
    }
  }

  const handleDietSuggestion = () => {
    if (purpose === "lose weight") {
      if (activity === 1.2 || activity === 1.4) {
        return {
          dietName: "Dieta odchudzająca",
          dietUrl: "dieta-odchudzajaca",
        }
      }
      if (activity === 1.6 || activity === 1.75) {
        return {
          dietName: "Dieta sportowa na redukcję",
          dietUrl: "dieta-sportowa-na-redukcje",
        }
      }
    }
    if (purpose === "maintain weight") {
      if (activity === 1.2 || activity === 1.4) {
        return {
          dietName: "Dieta standard",
          dietUrl: "dieta-standard",
        }
      }
      if (activity === 1.6 || activity === 1.75) {
        return {
          dietName: "Dieta Samuraja",
          dietUrl: "dieta-samuraja",
        }
      }
    }
    if (purpose === "get weight") {
      if (activity === 1.2 || activity === 1.4) {
        return {
          dietName: "Dieta standard",
          dietUrl: "dieta-standard",
        }
      }
      if (activity === 1.6 || activity === 1.75) {
        return {
          dietName: "Dieta sportowa na masę",
          dietUrl: "dieta-sportowa-na-mase",
        }
      }
    }
  }

  const parseActivity = () => {
    if (activity === 1.2) {
      return "mała"
    } else if (activity === 1.4) {
      return "średnia"
    } else if (activity === 1.6) {
      return "wysoka"
    } else if (activity === 1.75) {
      return "bardzo wysoka"
    }
  }

  const parseGoal = () => {
    if (purpose === "lose weight") {
      return -300
    } else if (purpose === "maintain weight") {
      return 0
    } else if (purpose === "get weight") {
      return 300
    }
  }

  const calculateCalories = () => {
    let calories = 0
    if (gender === "male")
      calories = Math.round(
        (66.47 + 13.75 * weight + 5 * height - 6.75 * age) * activity +
          parseGoal()
      )
    else if (gender === "female")
      calories = Math.round(
        (665.09 + 9.56 * weight + 1.85 * height - 4.67 * age) *
          parseActivity() +
          parseGoal()
      )

    return calories
  }

  const suggestCaloriesFromOffer = () => {
    const calories = calculateCalories()
    return caloriesFromOffer.reduce((acc, curr) => {
      acc = Math.abs(calories - acc) > Math.abs(calories - curr) ? curr : acc
      return acc
    })
  }

  return (
    <div ref={ref}>
      <h2>Dobierz idealną dietę pudełkową dla siebie</h2>
      <div className={chatbotStyles.container}>
        <div className={chatbotStyles.questionsBox}>
          <h3 className={chatbotStyles.insideText}>
            Zacznij jeść <br />
            zdrowo bez <br />
            wysiłku
          </h3>
          <div className={chatbotStyles.questionAnswer}>
            <div className={chatbotStyles.question}>
              <img src={chatIcon} />
              <p>
                Cześć! Zadam Ci kilka pytań, które pomogą mi dobrać idealną
                dietę dla Ciebie.
              </p>
            </div>
            {questionNumber >= 2 && (
              <div className={chatbotStyles.answer}>
                <p>Zaczynajmy</p>
                <img src={personIcon} />
              </div>
            )}
          </div>
          <div className={chatbotStyles.questionAnswer}>
            {questionNumber >= 2 && (
              <div className={chatbotStyles.question}>
                <img src={chatIcon} />
                <p>Jesteś kobietą czy mężczyzną?</p>
              </div>
            )}
            {questionNumber >= 3 && (
              <div className={chatbotStyles.answer}>
                <p>Jestem {gender === "female" ? "kobietą" : "mężczyzną"}</p>
                <img src={personIcon} />
              </div>
            )}
          </div>
          <div className={chatbotStyles.questionAnswer} ref={thirdQuestion}>
            <Fragment>
              {questionNumber >= 3 && (
                <div className={chatbotStyles.question}>
                  <img src={chatIcon} />
                  <p>Proszę wpisz swój wzrost w centymetrach.</p>
                </div>
              )}
              {questionNumber >= 4 && (
                <div className={chatbotStyles.answer}>
                  <p>Mój wzrost to {height} centymetrów.</p>
                  <img src={personIcon} />
                </div>
              )}
            </Fragment>
          </div>
          <div className={chatbotStyles.questionAnswer} ref={thirdQuestion}>
            <Fragment>
              {questionNumber >= 4 && (
                <div className={chatbotStyles.question}>
                  <img src={chatIcon} />
                  <p>Ile ważysz w kilogramch?</p>
                </div>
              )}
              {questionNumber >= 5 && (
                <div className={chatbotStyles.answer}>
                  <p>Ważę {weight} kilogramów.</p>
                  <img src={personIcon} />
                </div>
              )}
            </Fragment>
          </div>
          <div className={chatbotStyles.questionAnswer} ref={thirdQuestion}>
            <Fragment>
              {questionNumber >= 5 && (
                <div className={chatbotStyles.question}>
                  <img src={chatIcon} />
                  <p>Ile masz lat?</p>
                </div>
              )}
              {questionNumber >= 6 && (
                <div className={chatbotStyles.answer}>
                  <p>Mam {age} lat.</p>
                  <img src={personIcon} />
                </div>
              )}
            </Fragment>
          </div>
          <div className={chatbotStyles.questionAnswer} ref={thirdQuestion}>
            <Fragment>
              {questionNumber >= 6 && (
                <div className={chatbotStyles.question}>
                  <img src={chatIcon} />
                  <p>Jaka jest Twoja aktywność fizyczna?</p>
                </div>
              )}
              {questionNumber >= 7 && (
                <div className={chatbotStyles.answer}>
                  <p>Moja aktywność fizyczna jest {parseActivity()}</p>
                  <img src={personIcon} />
                </div>
              )}
            </Fragment>
          </div>
          <div className={chatbotStyles.questionAnswer} ref={thirdQuestion}>
            <Fragment>
              {questionNumber >= 7 && (
                <div className={chatbotStyles.question}>
                  <img src={chatIcon} />
                  <p>Jaki jest cel Twojej diety?</p>
                </div>
              )}
              {questionNumber >= 8 && (
                <div className={chatbotStyles.answer}>
                  <p>
                    Dieta proponowana dla Ciebie to{" "}
                    {handleDietSuggestion().dietName}{" "}
                    {suggestCaloriesFromOffer()}
                  </p>
                  <img src={personIcon} />
                </div>
              )}
            </Fragment>
          </div>
        </div>
      </div>
      <div className={chatbotStyles.answerBox}>{renderAnswerButtons()}</div>
    </div>
  )
})

export default Chatbot
