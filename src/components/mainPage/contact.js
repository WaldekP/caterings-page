import React from "react"
import emailIcon from "../../images/contact/ico_mail.svg"
import phoneIcon from "../../images/contact/ico_phone.svg"
import contactStyles from "../../styles/contact.module.scss"

const Contact = React.forwardRef((props, ref) => {
  return (
    <div ref={ref} className={contactStyles.wrapper}>
      <h2>Skontaktuj się z cateringiem dietetycznym AfterFit</h2>
      <div className={contactStyles.localization}>
        <p>
          <strong>Lokalizacja:</strong> ul. Siedlecka 3, 93-138 Łódź
        </p>
      </div>
      <div className={contactStyles.container}>
        <div className={contactStyles.contactItem}>
          <img src={phoneIcon} />
          <p>telefon</p>
          <a className={contactStyles.details} href="tel:427158085">
            +48 42 715-80-85
          </a>
        </div>
        <div className={contactStyles.contactItem}>
          <img src={emailIcon} />
          <p>email</p>
          <a
            className={contactStyles.details}
            href="mailto: zamowienia@afterfit-catering.pl"
          >
            zamowienia@afterfit-catering.pl
          </a>
        </div>
      </div>
    </div>
  )
})

export default Contact
