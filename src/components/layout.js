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
      console.log("city", city)
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

  const findCitiesInTheLeftAndRightColumn = column => {
    const citiesLength = cities.length
    const citiesLenthDividedByTwo = Math.floor(cities.length / 2)
    if (column === "left") {
      return cities.slice(0, citiesLenthDividedByTwo)
    } else {
      return cities.slice(citiesLenthDividedByTwo, citiesLength)
    }
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
          <div className={layoutStyles.overlayWrapper}>
            <ul className={layoutStyles.cityList}>
              {findCitiesInTheLeftAndRightColumn("left").map(
                (cityName, index) => (
                  <Link to={getLinkUrl(cityName.value)} key={index}>
                    {" "}
                    <li
                      className={layoutStyles.city}
                      onClick={() => {
                        toggleOverlay(false)
                        typeof window !== "undefined" &&
                          window.localStorage.setItem("city", cityName.value)
                      }}
                    >
                      {" "}
                      {cityName.label}
                    </li>
                  </Link>
                )
              )}
            </ul>
            <ul className={layoutStyles.cityList}>
              {findCitiesInTheLeftAndRightColumn("right").map(
                (cityName, index) => (
                  <Link to={getLinkUrl(cityName.value)} key={index}>
                    {" "}
                    <li
                      className={layoutStyles.city}
                      onClick={() => {
                        toggleOverlay(false)
                        typeof window !== "undefined" &&
                          window.localStorage.setItem("city", cityName.value)
                      }}
                    >
                      {" "}
                      {cityName.label}
                    </li>
                  </Link>
                )
              )}
            </ul>
          </div>
          <div className={layoutStyles.mobileWrapper}>
            <h3>Popularne miasta:</h3>
              <ul className={layoutStyles.mobileCityList}>
                {cities.filter(city => city.popular).map((cityName, index) => (
                  <Link to={getLinkUrl(cityName.value)} key={index}>
                    {" "}
                    <li
                      className={layoutStyles.mobileCity}
                      onClick={() => {
                        toggleOverlay(false)
                        typeof window !== "undefined" &&
                        window.localStorage.setItem("city", cityName.value)
                      }}
                    >
                      {" "}
                      {cityName.label}
                    </li>
                  </Link>
                ))}
            </ul>
            <h3>Wszystkie miasta:</h3>
            <ul className={layoutStyles.mobileCityList}>
              {cities.map((cityName, index) => (
                <Link to={getLinkUrl(cityName.value)} key={index}>
                  {" "}
                  <li
                    className={layoutStyles.mobileCity}
                    onClick={() => {
                      toggleOverlay(false)
                      typeof window !== "undefined" &&
                        window.localStorage.setItem("city", cityName.value)
                    }}
                  >
                    {" "}
                    {cityName.label}
                  </li>
                </Link>
              ))}
            </ul>
          </div>
        </div>
      </div>
      <div
        className={layoutStyles.container}
        style={
          typeof overlay !== "undefined" && overlay
            ? { overflow: "hidden" }
            : null
        }
      >
        <div className={layoutStyles.content}>
          <Header pageContext={pageContext} title={title} />
          {children}
          {console.log('overlay', overlay)}
          {(citySlug || !overlay) && <CookieConsent
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
          </CookieConsent>}
        </div>
        <Footer pageContext={pageContext} />
      </div>
    </Fragment>
  )
}

export default Layout
