import React, { useState, useEffect } from "react"
import faqStyles from "../styles/faq.module.scss"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"

const Question = ({question, otherCityFirstFaq }) => {

  const [status, changeStatus] = useState(question.node.category === 'general' && parseFloat(question.node.order) === 1)

  useEffect(() => {
    const { node: {category, order} } = question
    if (category === 'general' && parseFloat(order) === 1) {
      changeStatus(true)
    }
  }, [])
  const richTextNode = otherCityFirstFaq() && question.node.category === 'general' && parseFloat(question.node.order) === 1 ? 'childContentfulFirstFaqForOtherCitiesAnswerRichTextNode' : 'childContentfulFaqLodzAnswerRichTextNode'
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
