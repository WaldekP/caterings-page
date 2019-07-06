import React, { useState } from "react"
import faqStyles from "../styles/faq.module.scss"

const Question = ({question}) => {
  const [status, changeStatus] = useState(false)
  return (
    <div className={faqStyles.questionBox}>
      <div
        className={status ? faqStyles.questionActive : faqStyles.question}
        onClick={() => changeStatus(!status)}
      >
        <p>{question.question}</p>
        <p className={faqStyles.sign}>{status ? "-" : "+"}</p>
      </div>
      {status && (
        <div className={faqStyles.answer}>{question.answer}</div>
      )}
    </div>
  )
}

export default Question
