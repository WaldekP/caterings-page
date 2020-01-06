import React, { useState } from "react"
import faqStyles from "../styles/faq.module.scss"
import { faq } from "../data/mainPage/faq"
import Question from "./question"

const Faq = React.forwardRef (({ pageContext, faqNodes, areCityFaqQuestionsUpdated, otherCityFirstFaq }, ref) => {

  const [section, chooseSection] = useState("general")

  const getQuestions = () => {
    return [...faqNodes.filter(faqNode => faqNode.node.category === section)]
      .sort((prev, next) => parseFloat(prev.node.order) - parseFloat(next.node.order))
  }

  return (
    <div className={faqStyles.wrapper} ref={ref}>
      <h2>Masz pytania odnośnie naszego cateringu? Zajrzyj tutaj.</h2>
      <p>Nie możesz znaleźć odpowiedzi na pytanie? Napisz do nas na czacie</p>
      <div className={faqStyles.container}>
        <div className={faqStyles.contentsContainer}>
          <p>SPIS TREŚCI</p>
          <p
            className={faqStyles.chapter}
            onClick={() => {
              chooseSection("general")
            }}
            style={section === 'general' ? {textDecoration: "underline"} : null}
          >
            OGÓLNE
          </p>
          <p
            className={faqStyles.chapter}
            onClick={() => {
              chooseSection("dietSelection")
            }}
            style={section === 'dietSelection' ? {textDecoration: "underline"} : null}
          >
            DOBÓR DIETY
          </p>
        </div>
        <div className={faqStyles.questionsContainer}>
          {getQuestions().map((question, index) => (
            <Question key={index} question={question} pageContext={pageContext} otherCityFirstFaq={otherCityFirstFaq}/>
          ))}
        </div>
      </div>
    </div>
  )
})

export default Faq

