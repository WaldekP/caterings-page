import React, { useState } from "react"
import faqStyles from "../styles/faq.module.scss"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"

const Question = ({question, areCityFaqQuestionsUpdated }) => {
  const [status, changeStatus] = useState(false)
  const richTextNode = areCityFaqQuestionsUpdated() ? 'childContentfulOtherCityFaqAnswerRichTextNode' : 'childContentfulFaqLodzAnswerRichTextNode'
  return (
    <div className={faqStyles.questionBox}>
      <div
        className={status ? faqStyles.questionActive : faqStyles.question}
        onClick={() => changeStatus(!status)}
      >
        <p>{question.node.question}</p>
        <p className={faqStyles.sign}>{status ? "-" : "+"}</p>
      </div>
      {status && (
        <div className={faqStyles.answer}>{documentToReactComponents(question.node[richTextNode].json)}</div>
      )}
    </div>
  )
}

export default Question
