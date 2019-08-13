import React from "react"
import { Link } from "gatsby"
import footerStyles from "../styles/footer.module.scss"
import logo from "../images/logo/afterfit_img_logo.svg"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {cities } from "../data/cities"

const Footer = ({ pageContext }) => {
  const city = pageContext && pageContext.city
  return (
    <footer>
      <div className={footerStyles.container}>
        <div className={footerStyles.wrapper}>
          <div className={footerStyles.firstColumnContainer}>
            <div>
              <img src={logo} />
            </div>
            <div>® AFTERFIT-CATERING 2019</div>
            <div className={footerStyles.socialMediaContainer}>
              <a
                href="https://www.facebook.com/AfterFitCatering"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span>
                  <FontAwesomeIcon icon={["fab", "facebook"]} />
                </span>
              </a>
              <a
                href="https://www.instagram.com/afterfitcatering"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span>
                  <FontAwesomeIcon icon={["fab", "instagram"]} />
                </span>
              </a>
              <a
                href="https://www.youtube.com/channel/UCfm4X063UsfBGyxG82MJS1g"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span>
                  <FontAwesomeIcon icon={["fab", "youtube"]} />
                </span>
              </a>
              <a
                href="https://pl.pinterest.com/afterfit/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span>
                  <FontAwesomeIcon icon={["fab", "pinterest"]} />
                </span>
              </a>
            </div>
            <p>Telefon: 692-432-102</p>
            <p>Email: zamowienia@afterfit-catering.pl</p>
            <p>Regulamin</p>
            <p>Polityka prewatności</p>
          </div>
          <div>
            <h4>Diety</h4>
            <Link
              to={city ? `/${city}/dieta-odchudzajaca` : "/dieta-odchudzajaca"}
            >
              <p>Dieta odchudzająca</p>
            </Link>
            <Link to={city ? `/${city}/dieta-paleo` : "/dieta-paleo"}>
              <p>Dieta Paleo</p>
            </Link>
            <Link to={city ? `/${city}/dieta-samuraja` : "/dieta-samuraja"}>
              <p>Dieta Samuraja</p>
            </Link>
            <Link
              to={
                city
                  ? `/${city}/dieta-sportowa-na-redukcje`
                  : "/dieta-sportowa-na-redukcje"
              }
            >
              <p>Dieta sportowa na redukcję</p>
            </Link>
            <Link
              to={
                city
                  ? `/${city}/dieta-sportowa-na-mase`
                  : "/dieta-sportowa-na-mase"
              }
            >
              <p>Dieta sportowa na masę</p>
            </Link>
            <Link to={city ? `/${city}/dieta-standard` : "/dieta-standard"}>
              <p>Dieta standard</p>
            </Link>
            <Link to={city ? `/${city}/dieta-weganska` : "/dieta-weganska"}>
              <p>Dieta wegańska</p>
            </Link>
            <Link
              to={
                city ? `/${city}/dieta-wegetarianska` : "/dieta-wegetarianska"
              }
            >
              <p>Dieta wegetariańska</p>
            </Link>
          </div>
          <div>
            <h4>Miasta</h4>
            {cities.map(city => (
              <Link
                key={city.value}
                to={city.value === "lodz" ? "/" : `/${city.value}`}
                onClick={() => city.value === "lodz" ? typeof window !== 'undefined' && window.localStorage.setItem('city', 'lodz') : null}
              >
                <p>{city.label}</p>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
