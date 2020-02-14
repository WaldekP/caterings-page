import chatbotStyles from "../../styles/chatbot.module.scss"
import React from "react"

const ChatSpinner = () => {
  return (
    <span className={chatbotStyles.spinmeLeft}>
      <div className={chatbotStyles.spinner}>
        <div className={chatbotStyles.bounce1}></div>
        <div className={chatbotStyles.bounce2}></div>
        <div className={chatbotStyles.bounce3}></div>
      </div>
    </span>
  )
}

export default ChatSpinner
