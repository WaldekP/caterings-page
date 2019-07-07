import React from "react"
import footerStyles from '../styles/footer.module.scss'
import logo from '../images/logo/afterfit_img_logo.svg'

const Footer = () => {

  return (
    <footer>
      <div className={footerStyles.container}>
        <div className={footerStyles.wrapper}>
          <div>
            <div><img src={logo}/></div>
            <div>® AFTERFIT-CATERING 2019</div>
            <div className={footerStyles.socialMediaContainer}>
              <p>F</p>
              <p>I</p>
              <p>Y</p>
              <p>P</p>
            </div>
            <p>Telefon: 692-432-102</p>
            <p>Email: zamowienia@afterfit-catering.pl</p>
            <p>Godziny otwarcia bióra obsługi klienta tutaj będą</p>
            <p>Regulamin</p>
            <p>Polityka prewatności</p>
          </div>
          <div>
            <h4>Menu</h4>
            <p>Co nas wyróżnia</p>
            <p>Dobierz dietę</p>
            <p>Oferta</p>
            <p>Cennik</p>
            <p>Opinie</p>
            <p>Faq</p>
            <p>Kontakt</p>
            <p>Blog</p>
          </div>
          <div>
            <h4>Diety</h4>
            <p>Dieta odchudzająca</p>
            <p>Dieta Paloe</p>
            <p>Dieta Samuraja</p>
            <p>Dieta sportowa na redukcję</p>
            <p>Dieta sportowa na masę</p>
            <p>Dieta standard</p>
            <p>Dieta wegańska</p>
            <p>Dieta wegetariańska</p>
          </div>
          <div>
            <h4>Miasta</h4>
            <p>Bydgoszcz</p>
            <p>Kraków</p>
            <p>Łódź</p>
            <p>Poznań</p>
            <p>Toruń</p>
            <p>Trójmiasto</p>
            <p>Warszawa</p>
            <p>Wrocław</p>
          </div>
        </div>
      </div>
    </footer>
  )
}


export default Footer
