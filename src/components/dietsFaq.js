import React, { useState } from "react"
import faqStyles from "../styles/faq.module.scss"
import { dietsFaq } from "../data/dietsFaqData"
import Question from "./question"

const DietsFaq = ({ pageContext }) => {
  const [section, chooseSection] = useState("diet")
  const dietSlug = pageContext && pageContext.diet

  const getQuestions = () => {

    if (section === 'diet') {
      const dietsQuestionsArray = Object.values(dietsFaq[section])
      const dietQuestions = dietsQuestionsArray.find(diet => diet.dietUrl === dietSlug)
      return dietQuestions &&  Object.values(dietQuestions.questions)
    }

    return Object.values(dietsFaq[section])
  }
  return (
    <div className={faqStyles.wrapper}>
      <h2>Masz więcej pytań? Zajrzyj tutaj.</h2>
      <div className={faqStyles.container}>
        <div className={faqStyles.contentsContainer}>
          <p>SPIS TREŚCI</p>
          <p
              className={faqStyles.chapter} onClick={() => {
              chooseSection("diet")
            }}
              style={section === 'diet' ? {textDecoration: "underline"} : null}
          >
            DIETA
          </p>
          <p
              className={faqStyles.chapter}
              onClick={() => {
              chooseSection("general")
            }}
              style={section === 'general' ? {textDecoration: "underline"} : null}
          >
            OGÓLNE
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
}

export default DietsFaq
