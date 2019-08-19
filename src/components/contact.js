import React from "react"
import emailIcon from "../images/contact/ico_mail.svg"
import phoneIcon from "../images/contact/ico_phone.svg"
import contactStyles from "../styles/contact.module.scss"

const Contact = React.forwardRef((props, ref) => {
  return (
    <div ref={ref} className={contactStyles.wrapper}>
      <h2>Skontaktuj się z cateringiem dietetycznym AfterFit</h2>
      <div className={contactStyles.localization}>
        <p><strong>Lokalizacja:</strong> ul. Siedlecka 3, 93-138 Łódź</p>
      </div>
      <div className={contactStyles.container}>
        <div className={contactStyles.contactItem}>
          <img src={phoneIcon} />
          <p>telefon</p>
          <p className={contactStyles.details}>+48 42 715-80-85</p>
        </div>
        <div className={contactStyles.contactItem}>
          <img src={emailIcon} />
          <p>email</p>
          <p className={contactStyles.details}>
            zamowienia@afterfit-catering.pl
          </p>
        </div>
      </div>
      {/*<div className={contactStyles.mapContainer}>*/}
      {/*  /!*<div className={contactStyles}>*!/*/}
      {/*  /!*  <iframe*!/*/}
      {/*  /!*    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2467.9472120736864!2d19.36968731578037!3d51.78885097968244!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x471bb537c35651ab%3A0xd37e83ee9a133eb3!2sAfterFit+Catering!5e0!3m2!1spl!2spl!4v1562187806215!5m2!1spl!2spl"*!/*/}
      {/*  /!*    width="100%"*!/*/}
      {/*  /!*    height="400px"*!/*/}
      {/*  /!*    allowFullScreen*!/*/}
      {/*  /!*  />*!/*/}
      {/*  /!*</div>*!/*/}
      {/*  <div className={contactStyles.rightMapContainer}>*/}
      {/*    <p>LOKALIZACJA</p>*/}
      {/*    <p>ul. Siedlecka 3</p>*/}
      {/*    <p>93-138 Łódź</p>*/}
      {/*  </div>*/}
      {/*</div>*/}
    </div>
  )
})

export default Contact
