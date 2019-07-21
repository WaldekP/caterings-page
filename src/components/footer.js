import React from "react"
import { Link } from "gatsby"
import footerStyles from '../styles/footer.module.scss'
import logo from '../images/logo/afterfit_img_logo.svg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Footer = ({pageContext: { city }}) => {

  return (
    <footer>
      <div className={footerStyles.container}>
        <div className={footerStyles.wrapper}>
          <div className={footerStyles.firstColumnContainer}>
            <div><img src={logo}/></div>
            <div>® AFTERFIT-CATERING 2019</div>
            <div className={footerStyles.socialMediaContainer}>
              <a href="https://www.facebook.com/AfterFitCatering" target="_blank" rel="noopener noreferrer"><span><FontAwesomeIcon icon={['fab', 'facebook']} /></span></a>
              <a href="https://www.instagram.com/afterfitcatering" target="_blank" rel="noopener noreferrer"><span><FontAwesomeIcon icon={['fab', 'instagram']} /></span></a>
              <a href="https://www.youtube.com/channel/UCfm4X063UsfBGyxG82MJS1g" target="_blank" rel="noopener noreferrer"><span><FontAwesomeIcon icon={['fab', 'youtube']} /></span></a>
              <a href="https://pl.pinterest.com/afterfit/" target="_blank" rel="noopener noreferrer"><span><FontAwesomeIcon icon={['fab', 'pinterest']} /></span></a>
            </div>
            <p>Telefon: 692-432-102</p>
            <p>Email: zamowienia@afterfit-catering.pl</p>
            <p>Regulamin</p>
            <p>Polityka prewatności</p>
          </div>
          <div>
            <h4>Diety</h4>
            <Link to={city ? `/${city}/dieta-odchudzajaca`: '/dieta-odchudzajaca'}><p>Dieta odchudzająca</p></Link>
            <Link to={city ? `/${city}/dieta-paleo`: '/dieta-paleo'}><p>Dieta Paleo</p></Link>
            <Link to={city ? `/${city}/dieta-samuraja`: '/dieta-samuraja'}><p>Dieta Samuraja</p></Link>
            <Link to={city ? `/${city}/dieta-sportowa-na-redukcje`: '/dieta-sportowa-na-redukcje'}><p>Dieta sportowa na redukcję</p></Link>
            <Link to={city ? `/${city}/dieta-sportowa-na-mase`: '/dieta-sportowa-na-mase'}><p>Dieta sportowa na masę</p></Link>
            <Link to={city ? `/${city}/dieta-standard`: '/dieta-standard'}><p>Dieta standard</p></Link>
            <Link to={city ? `/${city}/dieta-weganska`: '/dieta-weganska'}><p>Dieta wegańska</p></Link>
            <Link to={city ? `/${city}/dieta-wegetarianska`: '/dieta-wegetarianska'}><p>Dieta wegetariańska</p></Link>
          </div>
          <div>
            <h4>Miasta</h4>
            <Link to={'/bydgoszcz'}><p>Bydgoszcz</p></Link>
            <Link to={'/gdansk'}><p>Gdańsk</p></Link>
            <Link to={'/gdynia'}><p>Gdynia</p></Link>
            <Link to={'/katowice'}><p>Katowice</p></Link>
            <Link to={'/krakow'}><p>Kraków</p></Link>
            <Link to={'/lublin'}><p>Lublin</p></Link>
            <Link to={'/'}><p>Łódź</p></Link>
            <Link to={'/poznan'}><p>Poznań</p></Link>
            <Link to={'/sopot'}><p>Sopot</p></Link>
            <Link to={'/torun'}><p>Toruń</p></Link>
            <Link to={'/warszawa'}><p>Warszawa</p></Link>
            <Link to={'/wroclaw'}><p>Wrocław</p></Link>
          </div>
        </div>
      </div>
    </footer>
  )
}


export default Footer
