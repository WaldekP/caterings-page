import React, { Fragment, useEffect, useContext } from "react"
import Header from "./header"
import Footer from "./footer"
import layoutStyles from "../styles/layout.module.scss"
import { cities } from "../data/cities"
import { Link, navigate } from "gatsby"
import { library } from "@fortawesome/fontawesome-svg-core"
import { fab } from "@fortawesome/free-brands-svg-icons"
import {
  faCheckSquare,
  faCircle,
  faWindowClose,
} from "@fortawesome/free-solid-svg-icons"
import PageContext from "../context/pageContext"
import CookieConsent from "react-cookie-consent"

library.add(fab, faCheckSquare, faCircle, fab, faWindowClose)

const Layout = ({ title, children, pageContext }) => {
  const { overlay, toggleOverlay } = useContext(PageContext)
  const cityCookie2 =
    typeof window !== "undefined" && window.localStorage.getItem("city")
  const citySlug = pageContext && pageContext.city
  const dietSlug = pageContext && pageContext.diet
  // redirect from main page when the cookie is set

  useEffect(() => {
    if (!citySlug && cityCookie2) {
      if (cityCookie2 === "lodz") {
        toggleOverlay(false)
        navigate(dietSlug ? `/${dietSlug}` : `/`)
      }
      if (cityCookie2 !== "lodz") {
        console.log("kurwa 2")
        navigate(dietSlug ? `/${cityCookie2}/${dietSlug}` : `/${cityCookie2}`)
      }
    }
    if (citySlug) {
      typeof window !== "undefined" &&
        window.localStorage.setItem("city", citySlug)
    }
  }, [])
  const getLinkUrl = city => {
    if (city === "lodz") {
      if (dietSlug) {
        return `/${dietSlug}`
      }
      return "/"
    }
    if (dietSlug) {
      return `/${city}/${dietSlug}`
    }
    return `/${city}`
  }

  return (
    <Fragment>
      <div
        className={layoutStyles.overlay}
        style={
          (typeof overlay !== "undefined" && !overlay) || citySlug
            ? { display: "none" }
            : null
        }
      >
        <div className={layoutStyles.overlayContent}>
          <h2>Wybierz miasto:</h2>

          {/*}}>Zostaw ciastko</button>*/}
          {/*<p>{getCookie('user')}</p>*/}
          <ul className={layoutStyles.overlayList}>
            {cities
              // .sort((prev, next) => {
              //   const prevCity = prev.label
              //   const nextCity = next.label
              //   return prevCity.localeCompare(nextCity)
              // })
              .map(city => (
                <Link className={layoutStyles.link} to={getLinkUrl(city.value)}>
                  <li
                    className={layoutStyles.overlayItem}
                    onClick={() => {
                      toggleOverlay(false)
                      typeof window !== "undefined" &&
                        window.localStorage.setItem("city", city.value)
                    }}
                    key={city.value}
                  >
                    {city.label}
                  </li>
                </Link>
              ))}
          </ul>
        </div>
      </div>
      <div className={layoutStyles.container}>
        <div className={layoutStyles.content}>
          <Header pageContext={pageContext} title={title} />
          {children}
          <CookieConsent
            location="bottom"
            buttonText="Zgoda"
            cookieName="afterfit-consent"
            style={{
              background: "#112682",
              fontFamily: "'Work Sans', sans-serif",
            }}
            buttonStyle={{
              backgroundColor: "#FFFFFF",
              color: "#112682",
              fontSize: "15px",
              borderRadius: "20px",
              height: "40px",
              width: "130px",
              fontWeight: "bold",
              cursor: "pointer",
            }}
            expires={150}
          >
            Ta strona korzysta z ciasteczek, aby świadczyć usługi na najwyższym
            poziomie. Dalsze korzystanie ze strony oznacza, że zgadzasz się na
            ich użycie.
          </CookieConsent>
        </div>
        <Footer pageContext={pageContext} />
      </div>
    </Fragment>
  )
}

export default Layout
