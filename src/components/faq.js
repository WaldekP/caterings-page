import React from "react"
import faqStyles from "../styles/faq.module.scss"

const Faq = () => {
  return (
    <div className={faqStyles.wrapper}>
      <h2>Masz pytania odnośnie naszego cateringu? Zajrzyj tutaj.</h2>
      <p>Nie możesz znaleźć odpowiedzi na pytanie? Napisz do nas na czacie</p>
      <div className={faqStyles.container}>
        <div className={faqStyles.contentsContainer}>
          <p>SPIS TREŚCI</p>
          <p>OGÓLNE</p>
          <p>DOBÓR DIET</p>
        </div>
        <div className={faqStyles.questionsContainer}>
          <div className={faqStyles.questionBox}>
            <div className={faqStyles.questionActive}>
              <p>Kiedy odbywają się dostawy cateringu dietetycznego AfterFit?</p>
              <p className={faqStyles.sign}>-</p>
            </div>
            <div className={faqStyles.answer}>
              Odpowiedz Odpowiedz Odpowiedz Odpowiedz Odpowiedz Odpowiedz
              Odpowiedz Odpowiedz Odpowiedz Odpowiedz Odpowiedz Odpowiedz
              Odpowiedz Odpowiedz Odpowiedz
            </div>
          </div>
          <div className={faqStyles.questionBox}>
            <div className={faqStyles.question}>
              <p>Pytanie</p>
              <p className={faqStyles.sign}>+</p>
            </div>
          </div>
          <div className={faqStyles.questionBox}>
            <div className={faqStyles.question}>
              <p>Pytanie</p>
              <p className={faqStyles.sign}>+</p>
            </div>
          </div>
          <div className={faqStyles.questionBox}>
            <div className={faqStyles.question}>
              <p>Pytanie</p>
              <p className={faqStyles.sign}>+</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Faq
