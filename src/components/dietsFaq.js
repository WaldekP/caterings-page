import React, { useState } from "react"
import faqStyles from "../styles/faq.module.scss"
import { dietsFaq } from "../data/generalnformationFaq"
import DietQuestion from "./dietQuestion"

const DietsFaq = ({ dietQuestions }) => {
  const [section, chooseSection] = useState("diet")

  const getQuestions = () => {

    if (section === 'diet') {
      return dietQuestions
    }

    return Object.values(dietsFaq['general'])
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
          {getQuestions() && getQuestions().map((question, index) => (
            <DietQuestion key={index} question={question} />
          ))}
        </div>
      </div>
    </div>
  )
}

export default DietsFaq
