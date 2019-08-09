import React, { Fragment, useEffect, useRef, useState, useContext } from "react"
import { Link } from "gatsby"
import * as dietDetails from "../data/companyDetails/dietDetails"
import chatbotStyles from "../styles/chatbot.module.scss"
import chatIcon from "../images/chat/ico_chat1.svg"
import personIcon from "../images/chat/ico_chat2.svg"
import PageContext from "../context/pageContext"
import ChatbotSpinner from "../components/chatSpinner"
import scrollIntoView from "scroll-into-view-if-needed"

const { default: diets } = dietDetails

const Chatbot = React.forwardRef(({ pageContext }, ref) => {
  const { changeCalories } = useContext(PageContext)
  const [questionNumber, changeQuestion] = useState(1)
  const [gender, changeGender] = useState()
  const [height, changeHeight] = useState("")
  const [weight, changeWeight] = useState("")
  const [age, changeAge] = useState("")
  const [activity, changeActivity] = useState()
  const [purpose, changePurpose] = useState()
  const chatRef = useRef(null)
  const [typing, changeTypingState] = useState(false)

  useEffect(() => {
    if (questionNumber > 1) {
      changeTypingState(true)
      scrollIntoView(chatRef.current, {
        block: "center",
        inline: "center",
        behavior: "smooth"
        //available options: https://www.npmjs.com/package/scroll-into-view-if-needed
      })
      setTimeout(() => {
        changeTypingState(false)
        scrollIntoView(chatRef.current, {
          block: "center",
          inline: "center",
          behavior: "smooth"
        })
      }, 1000)
    }
  }, [questionNumber])

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
            name="height"
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
            name="weight"
            value={weight}
            type="number"
            onChange={({ target: { value } }) => {
              changeWeight(value)
            }}
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
            name="age"
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

  const handleAvailableCalories = () => {
    const diet = handleDietSuggestion().dietUrl
    if (diet === "dieta-odchudzajaca") {
      return [1000, 1200, 1500, 1800, 2000, 2500]
    }
    if (diet === "dieta-sportowa-na-mase" || diet === "dieta-samuraja") {
      return [1800, 2000, 2500, 3000]
    }
    return [1200, 1500, 1800, 2000, 2500]
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
      return { value: -300, goal: "schudnąć" }
    } else if (purpose === "maintain weight") {
      return { value: 0, goal: "utrzymać wagę" }
    } else if (purpose === "get weight") {
      return { value: 300, goal: "przytyć" }
    }
  }

  const calculateCalories = () => {
    let calories = 0
    if (gender === "male")
      calories = Math.round(
        (66.47 + 13.75 * weight + 5 * height - 6.75 * age) * activity +
          parseGoal().value
      )
    else if (gender === "female")
      calories = Math.round(
        (665.09 + 9.56 * weight + 1.85 * height - 4.67 * age) *
          parseActivity() +
          parseGoal().value
      )

    return calories
  }

  const suggestCaloriesFromOffer = () => {
    const calories = calculateCalories()
    return handleAvailableCalories().reduce((acc, curr) => {
      acc = Math.abs(calories - acc) > Math.abs(calories - curr) ? curr : acc
      return acc
    })
  }

  return (
    <div ref={ref}>
      <h2>Dobierz idealną dietę pudełkową dla siebie</h2>
      <div className={chatbotStyles.container}>
        <div>
          <h3 className={chatbotStyles.insideText}>
            Zacznij jeść <br />
            zdrowo bez <br />
            wysiłku
          </h3>
        </div>

        <div className={chatbotStyles.questionsBox}>
            <div className={chatbotStyles.question2}>
              <img src={chatIcon} />
              <p>
                Cześć! Zadam Ci kilka pytań, które pomogą mi dobrać idealną
                dietę dla Ciebie.1
              </p>
            </div>
            {questionNumber > 2 && <div className={chatbotStyles.answer2} >
                <p>Zaczynajmy</p>
                <img src={personIcon} />
            </div>}
            {questionNumber > 2 && <div className={chatbotStyles.question2}>
                <img src={chatIcon} />
                <p>
                    Cześć! Zadam Ci kilka pytań, które pomogą mi dobrać idealną
                    dietę dla Ciebie.2
                </p>
            </div>}
            {questionNumber > 3 && <div className={chatbotStyles.answer2} >
                <p>Zaczynajmy</p>
                <img src={personIcon} />
            </div>}
            {questionNumber > 3 && <div className={chatbotStyles.question2}>
                <img src={chatIcon} />
                <p>
                    Cześć! Zadam Ci kilka pytań, które pomogą mi dobrać idealną
                    dietę dla Ciebie.3
                </p>
            </div>}
            {questionNumber > 4 && <div className={chatbotStyles.answer2} >
                <p>Zaczynajmy</p>
                <img src={personIcon} />
            </div>}
            {questionNumber > 4 && <div className={chatbotStyles.question2}>
                <img src={chatIcon} />
                <p>
                    Cześć! Zadam Ci kilka pytań, które pomogą mi dobrać idealną
                    dietę dla Ciebie.4
                </p>
            </div>}
            {questionNumber > 5 && <div className={chatbotStyles.answer2} >
                <p>Zaczynajmy</p>
                <img src={personIcon} />
            </div>}
            {questionNumber > 5 && <div className={chatbotStyles.question2}>
                <img src={chatIcon} />
                <p>
                    Cześć! Zadam Ci kilka pytań, które pomogą mi dobrać idealną
                    dietę dla Ciebie.5
                </p>
            </div>}
            {questionNumber > 6 && <div className={chatbotStyles.answer2} >
                <p>Zaczynajmy</p>
                <img src={personIcon} />
            </div>}
            {questionNumber > 6 && <div className={chatbotStyles.question2}>
                <img src={chatIcon} />
                <p>
                    Cześć! Zadam Ci kilka pytań, które pomogą mi dobrać idealną
                    dietę dla Ciebie.6
                </p>
            </div>}
            {/*<div className={chatbotStyles.answer2} >*/}
            {/*    <p>Zaczynajmy</p>*/}
            {/*    <img src={personIcon} />*/}
            {/*</div>*/}
            {/*<div className={chatbotStyles.question2}>*/}
            {/*    <img src={chatIcon} />*/}
            {/*    <p>*/}
            {/*        Cześć! Zadam Ci kilka pytań, które pomogą mi dobrać idealną*/}
            {/*        dietę dla Ciebie.*/}
            {/*    </p>*/}
            {/*</div>*/}
            {/*<div className={chatbotStyles.answer2} >*/}
            {/*    <p>Zaczynajmy</p>*/}
            {/*    <img src={personIcon} />*/}
            {/*</div>*/}
          {/*<div className={chatbotStyles.questionAnswer}>*/}

          {/*      <div className={chatbotStyles.question} >*/}
          {/*        <img src={chatIcon} />*/}
          {/*        <p>Jesteś kobietą czy mężczyzną?</p>*/}
          {/*      </div>*/}
          {/*    <div className={chatbotStyles.answer} >*/}
          {/*      <p>Jestem {gender === "female" ? "kobietą" : "mężczyzną"}.</p>*/}
          {/*      <img src={personIcon} />*/}
          {/*    </div>*/}
          {/*</div>*/}
          {/*<div className={chatbotStyles.questionAnswer}>*/}
          {/*  <Fragment>*/}
          {/*        <div className={chatbotStyles.question}>*/}
          {/*          <img src={chatIcon} />*/}
          {/*          <p>Proszę wpisz swój wzrost w centymetrach.</p>*/}
          {/*        </div>*/}

          {/*      <div className={chatbotStyles.answer}>*/}
          {/*        <p>Mój wzrost to {height} centymetrów.</p>*/}
          {/*        <img src={personIcon} />*/}
          {/*      </div>*/}
          {/*  </Fragment>*/}
          {/*</div>*/}
          {/*<div className={chatbotStyles.questionAnswer}>*/}
          {/*  <Fragment>*/}
          {/*        <div className={chatbotStyles.question}>*/}
          {/*          <img src={chatIcon} />*/}
          {/*          <p>Ile ważysz w kilogramach?</p>*/}
          {/*        </div>*/}

          {/*      <div className={chatbotStyles.answer}>*/}
          {/*        <p>Ważę {weight} kilogramów.</p>*/}
          {/*        <img src={personIcon} />*/}
          {/*      </div>*/}
          {/*  </Fragment>*/}
          {/*</div>*/}
          {/*<div className={chatbotStyles.questionAnswer}>*/}
          {/*  <Fragment>*/}
          {/*        <div className={chatbotStyles.question}>*/}
          {/*          <img src={chatIcon} />*/}
          {/*          <p>Ile masz lat?</p>*/}
          {/*        </div>*/}
          {/*      <div className={chatbotStyles.answer}>*/}
          {/*        <p>Mam {age} lat.</p>*/}
          {/*        <img src={personIcon} />*/}
          {/*      </div>*/}
          {/*  </Fragment>*/}
          {/*</div>*/}
          {/*<div className={chatbotStyles.questionAnswer}>*/}
          {/*  <Fragment>*/}
          {/*        <div className={chatbotStyles.question}>*/}
          {/*          <img src={chatIcon} />*/}
          {/*          <p>Jaka jest Twoja aktywność fizyczna?</p>*/}
          {/*        </div>*/}
          {/*      <div className={chatbotStyles.answer}>*/}
          {/*        <p>Moja aktywność fizyczna jest {parseActivity()}</p>*/}
          {/*        <img src={personIcon} />*/}
          {/*      </div>*/}
          {/*  </Fragment>*/}
          {/*</div>*/}
          {/*<div className={chatbotStyles.questionAnswer}>*/}
          {/*  <Fragment>*/}
          {/*        <div className={chatbotStyles.question}>*/}
          {/*          <img src={chatIcon} />*/}
          {/*          <p>Jaki jest cel Twojej diety?</p>*/}
          {/*        </div>*/}
          {/*      <div className={chatbotStyles.answer}>*/}
          {/*        <p>Cel Twojej diety to .</p>*/}
          {/*        /!*<p>Cel Twojej diety to {parseGoal().goal}.</p>*!/*/}
          {/*        <img src={personIcon} />*/}
          {/*      </div>*/}
          {/*  </Fragment>*/}
          {/*</div>*/}
          {/*<div className={chatbotStyles.questionAnswer}>*/}
          {/*  <Fragment>*/}
          {/*        <div className={chatbotStyles.question}>*/}
          {/*          <img src={chatIcon} />*/}
          {/*          <p>*/}
          {/*            Dieta proponowana dla Ciebie to{" "}*/}
          {/*            /!*{handleDietSuggestion().dietName}{" "}*!/*/}
          {/*            /!*{suggestCaloriesFromOffer()} kcal.*!/*/}
          {/*          </p>*/}
          {/*        </div>*/}
          {/*  </Fragment>*/}
          {/*</div>*/}
          <div className={chatbotStyles.ref} ref={chatRef}></div>
        </div>
      </div>
      <div className={chatbotStyles.answerBox}>
        {!typing && renderAnswerButtons()}
      </div>
    </div>
  )
})

export default Chatbot
