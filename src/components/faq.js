import React, { useState } from "react"
import faqStyles from "../styles/faq.module.scss"
import { faq } from "../data/mainPage/faq"
import Question from "./question"

const Faq = React.forwardRef (({ pageContext }, ref) => {
  const city = pageContext.city ? pageContext.city : "lodz"
  const [section, chooseSection] = useState("general")

  const getQuestions = () => {
    const cityObject = faq[city]
    if (!cityObject) {
      return Object.values(faq["lodz"][section])
    }
    return Object.values(faq[city][section])
  }
  return (
    <div className={faqStyles.wrapper} ref={ref}>
      <h2>Masz pytania odnośnie naszego cateringu? Zajrzyj tutaj.</h2>
      <p>Nie możesz znaleźć odpowiedzi na pytanie? Napisz do nas na czacie</p>
      <div className={faqStyles.container}>
        <div className={faqStyles.contentsContainer}>
          <p>SPIS TREŚCI</p>
          <p
            onClick={() => {
              chooseSection("general")
            }}
          >
            OGÓLNE
          </p>
          <p
            onClick={() => {
              chooseSection("dietSelection")
            }}
          >
            DOBÓR DIET
          </p>
        </div>
        <div className={faqStyles.questionsContainer}>
          {getQuestions().map((question, index) => (
            <Question key={index} question={question} />
          ))}
        </div>
      </div>
    </div>
  )
})

export default Faq
