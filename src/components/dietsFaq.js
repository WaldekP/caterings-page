import React, { useState } from "react"
import faqStyles from "../styles/faq.module.scss"
import { dietsFaq } from "../data/dietsFaqData"
import Question from "./question"

const DietsFaq = () => {
  const [section, chooseSection] = useState("diet")

  const getQuestions = () => {

    return Object.values(dietsFaq[section])
  }
  return (
    <div className={faqStyles.wrapper}>
      <h2>Masz więcej pytań? Zajrzyj tutaj.</h2>
      <div className={faqStyles.container}>
        <div className={faqStyles.contentsContainer}>
          <p>SPIS TREŚCI</p>
          <p
            onClick={() => {
              chooseSection("diet")
            }}
          >
            DIETA
          </p>
          <p
            onClick={() => {
              chooseSection("general")
            }}
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
