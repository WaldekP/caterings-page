import React, { useState } from "react"
import faqStyles from "../styles/faq.module.scss"
import { faq } from "../data/mainPage/faq"
import Question from "./question"

const Faq = React.forwardRef (({ pageContext, faqNodes, areCityFaqQuestionsUpdated }, ref) => {

  const city = pageContext.city ? pageContext.city : "lodz"
  const [section, chooseSection] = useState("general")

  // const getQuestions = () => {
  //   const cityObject = faq[city]
  //   if (!cityObject) {
  //     if (city === 'aglomeracja-slaska') {
  //       return Object.values(faq["aglomeracjaSlaska"][section])
  //     }
  //     return Object.values(faq["lodz"][section])
  //   }
  //   return Object.values(faq[city][section])
  // }

  const getQuestions = () => {
    return faqNodes.filter(faqNode => faqNode.node.category === section)
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
            <Question key={index} question={question} pageContext={pageContext} areCityFaqQuestionsUpdated={areCityFaqQuestionsUpdated}/>
          ))}
        </div>
      </div>
    </div>
  )
})

export default Faq

