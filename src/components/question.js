import React, { useState, useEffect } from "react"
import faqStyles from "../styles/faq.module.scss"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"

const Question = ({question, otherCityFirstFaq }) => {

  const [status, changeStatus] = useState(false)

  useEffect(() => {
    const { node: {category, order} } = question
    if (category === 'general' && parseFloat(order) === 1) {
      changeStatus(true)
    }
  }, [])
  const richTextNode = otherCityFirstFaq() ? 'childContentfulFirstFaqForOtherCitiesAnswerRichTextNode' : 'childContentfulFaqLodzAnswerRichTextNode'
  return (
    <div className={faqStyles.questionBox}>
      <div
        className={status ? faqStyles.questionActive : faqStyles.question}
        onClick={() => changeStatus(!status)}
      >
        <p>{question.node.question}</p>
        <p className={faqStyles.sign}>{status ? "-" : "+"}</p>
      </div>
      {/*{question.order === 1 && (*/}
      {/*  <div className={faqStyles.answer}>{documentToReactComponents(question.node[richTextNode].json)}</div>*/}
      {/*)}*/}
      {status && (
        <div className={faqStyles.answer}>{documentToReactComponents(question.node[richTextNode].json)}</div>
      )}
    </div>
  )
}

export default Question
