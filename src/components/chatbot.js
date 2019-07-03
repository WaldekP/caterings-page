import React, { Fragment } from "react"
import chatbotStyles from "../styles/chatbot.module.scss"
import commonStyles from "../styles/common.module.scss"
import chatIcon from '../images/chat/ico_chat1.svg'
import personIcon from '../images/chat/ico_chat2.svg'

const Chatbot = React.forwardRef((props, ref) => {
  return (
    <div className={chatbotStyles.container} ref={ref}>
      <h2>Dobierz idealną dietę pudełkową dla siebie</h2>
      <h3 className={chatbotStyles.insideText}>
        Zacznij jeść <br />
        zdrowo bez wysiłku
      </h3>
      <div className={chatbotStyles.questionsBox}>
        <div className={chatbotStyles.questionAnswer}>
          <div className={chatbotStyles.question}>
            <img src={chatIcon}/>
            <p>
              Question Question Question Question Question Question Question
              Question Question Question{" "}
            </p>
          </div>
          <div className={chatbotStyles.answer}>
            <p>Answear Answear Answear </p>
            <img src={personIcon}/>
          </div>
        </div>
        <div className={chatbotStyles.questionAnswer}>
          <div className={chatbotStyles.question}>
            <img src={chatIcon}/>
            <p>
              Question Question Question Question Question Question Question
              Question Question Question{" "}
            </p>
          </div>
          <div className={chatbotStyles.answer}>
            <p>Answear Answear Answear </p>
            <img src={personIcon}/>
          </div>
        </div>
      </div>
      <div className={chatbotStyles.answerBox}>
        <button>Tak!</button>
      </div>
    </div>
  )
})

export default Chatbot
