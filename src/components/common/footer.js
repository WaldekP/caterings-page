import React from "react"
import { Link } from "gatsby"
import footerStyles from "../../styles/footer.module.scss"
import logo from "../../images/logo/afterfit_img_logo.svg"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { cities } from "../../data/cities"

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
                rel="nofollow"
              >
                <span>
                  <FontAwesomeIcon icon={["fab", "facebook"]} />
                </span>
              </a>
              <a
                href="https://www.instagram.com/afterfitcatering"
                target="_blank"
                rel="nofollow"
              >
                <span>
                  <FontAwesomeIcon icon={["fab", "instagram"]} />
                </span>
              </a>
              <a
                href="https://www.youtube.com/channel/UCfm4X063UsfBGyxG82MJS1g"
                target="_blank"
                rel="nofollow"
              >
                <span>
                  <FontAwesomeIcon icon={["fab", "youtube"]} />
                </span>
              </a>
              <a
                href="https://pl.pinterest.com/afterfit/"
                target="_blank"
                rel="nofollow"
              >
                <span>
                  <FontAwesomeIcon icon={["fab", "pinterest"]} />
                </span>
              </a>
            </div>
            <p>Telefon: +48 42 715-80-85</p>
            <p>Email: zamowienia@afterfit-catering.pl</p>
            <p>Biuro obsługi: pn.- pt.: 9:00-18:00, so.: 10:00-15:00</p>
            <p>
              <a
                href="https://serwer1526119.home.pl/wp-content/uploads/2019/02/Regulamin-Cateringu-Dietetycznego-AfterFit.pdf"
                target="_blank"
                rel="nofollow"
              >
                Regulamin
              </a>
            </p>{" "}
            <p>
              <a
                href="https://serwer1526119.home.pl/wp-content/uploads/2019/02/Polityka-Prywatności-cateringu-dietetycznego-AfterFit.pdf"
                target="_blank"
                rel="nofollow"
              >
                Polityka prywatności
              </a>
            </p>
          </div>
          <div>
            <h4>Diety</h4>
            <Link
              to={city ? `/${city}/dieta-bezglutenowa` : "/dieta-bezglutenowa"}
            >
              <p>Dieta bezglutenowa</p>
            </Link>
            <Link
              to={city ? `/${city}/dieta-bezlaktozowa` : "/dieta-bezlaktozowa"}
            >
              <p>Dieta bezlaktozowa</p>
            </Link>
            <Link
              to={city ? `/${city}/dieta-dash` : "/dieta-dash"}
            >
              <p>Dieta DASH</p>
            </Link>
            <Link
              to={city ? `/${city}/dieta-detox` : "/dieta-detox"}
            >
              <p>Dieta detox</p>
            </Link>
            <Link
              to={city ? `/${city}/dieta-keto` : "/dieta-keto"}
            >
              <p>Dieta keto</p>
            </Link>
            <Link
              to={city ? `/${city}/dieta-niski-indeks` : "/dieta-niski-indeks"}
            >
              <p>Dieta niski indeks</p>
            </Link>
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
            <Link
              to={
                city ? `/${city}/dieta-wege-z-rybami` : "/dieta-wege-z-rybami"
              }
            >
              <p>Dieta wege z rybami</p>
            </Link>
          </div>
          <div>
            <h4>Miasta</h4>
            {cities
              .filter(cityName => cityName.footer)
              .map(city => (
                <Link
                  key={city.value}
                  to={city.value === "lodz" ? "/" : `/${city.value}`}
                  onClick={() =>
                    city.value === "lodz"
                      ? typeof window !== "undefined" &&
                        window.localStorage.setItem("city", "lodz")
                      : null
                  }
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
