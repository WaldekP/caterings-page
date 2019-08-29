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

  const findUniqueLetters = () => {
    return cities.reduce((acc, curr) => {
      const firstLetter = curr.label[0]
      const isLetterAlreadyInArray = acc.includes(firstLetter)
      !isLetterAlreadyInArray && acc.push(firstLetter)
      return acc
    }, [])
  }

const findCitiesInTheLeftAndRightColumn = (column) => {
    const citiesLength = cities.length
    const citiesLenthDividedByTwo = Math.floor(cities.length / 2)
    if (column === 'left') {
      console.log('a')
      return cities.slice(0, citiesLenthDividedByTwo)
    } else {
      console.log('b')
      return cities.slice(citiesLenthDividedByTwo, citiesLength)
    }
}

  const filterEvenOrOddLetter = evenOrOdd => {
    if (evenOrOdd === "even") {
      return findUniqueLetters().filter((city, i) => (i + 1) % 2 === 0)
    }
    return findUniqueLetters().filter((city, i) => Math.abs((i + 1) % 2) === 1)
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
                      {findCitiesInTheLeftAndRightColumn('left')
                        .map((cityName, index) => (
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
                        ))}
                    </ul>
            <ul className={layoutStyles.cityList}>
              {findCitiesInTheLeftAndRightColumn('right')
                .map((cityName, index) => (
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
                ))}
            </ul>
            {/*<ul className={layoutStyles.overlayList}>*/}
            {/*  {filterEvenOrOddLetter("odd").map((letter, i) => {*/}
            {/*    return (*/}
            {/*      <li key={i}>*/}
            {/*        <h3>{letter.toUpperCase()}</h3>*/}
            {/*        <ul className={layoutStyles.cityList}>*/}
            {/*          {cities*/}
            {/*            .filter(city => city.label[0] === letter)*/}
            {/*            .map((cityName, index) => (*/}
            {/*              <Link to={getLinkUrl(cityName.value)} key={index}>*/}
            {/*                {" "}*/}
            {/*                <li*/}
            {/*                  className={layoutStyles.city}*/}
            {/*                  onClick={() => {*/}
            {/*                    toggleOverlay(false)*/}
            {/*                    typeof window !== "undefined" &&*/}
            {/*                      window.localStorage.setItem("city", cityName.value)*/}
            {/*                  }}*/}
            {/*                >*/}
            {/*                  {" "}*/}
            {/*                  {cityName.label}*/}
            {/*                </li>*/}
            {/*              </Link>*/}
            {/*            ))}*/}
            {/*        </ul>*/}
            {/*      </li>*/}
            {/*    )*/}
            {/*  })}*/}
            {/*</ul>*/}
            {/*<ul className={layoutStyles.overlayList}>*/}
            {/*  {filterEvenOrOddLetter("even").map((letter, i) => {*/}
            {/*    return (*/}
            {/*      <li>*/}
            {/*        <h3>{letter.toUpperCase()}</h3>*/}
            {/*        <ul className={layoutStyles.cityList}>*/}
            {/*          {cities*/}
            {/*            .filter(city => city.label[0] === letter)*/}
            {/*            .map((cityName, index) => (*/}
            {/*              <Link to={getLinkUrl(cityName.value)} key={index}>*/}
            {/*                {" "}*/}
            {/*                <li*/}
            {/*                  onClick={() => {*/}
            {/*                    toggleOverlay(false)*/}
            {/*                    typeof window !== "undefined" &&*/}
            {/*                    window.localStorage.setItem("city", cityName.value)*/}
            {/*                  }}*/}
            {/*                  className={layoutStyles.city}*/}
            {/*                >*/}
            {/*                  {" "}*/}
            {/*                  {cityName.label}*/}
            {/*                </li>*/}
            {/*              </Link>*/}
            {/*            ))}*/}
            {/*        </ul>*/}
            {/*      </li>*/}
            {/*    )*/}
            {/*  })}*/}
            {/*</ul>*/}
            {/*<ul className={layoutStyles.overlayMobileList}>*/}
            {/*  {findUniqueLetters().map((letter, i) => {*/}
            {/*    return (*/}
            {/*      <li key={i}>*/}
            {/*        <h3>{letter.toUpperCase()}</h3>*/}
            {/*        <ul className={layoutStyles.cityList}>*/}
            {/*          {cities*/}
            {/*            .filter(city => city.label[0] === letter)*/}
            {/*            .map((cityName, index) => (*/}
            {/*              <Link to={getLinkUrl(cityName.value)} key={index}>*/}
            {/*                {" "}*/}
            {/*                <li*/}
            {/*                  onClick={() => {*/}
            {/*                    toggleOverlay(false)*/}
            {/*                    typeof window !== "undefined" &&*/}
            {/*                    window.localStorage.setItem("city", cityName.value)*/}
            {/*                  }}*/}
            {/*                  className={layoutStyles.city}*/}
            {/*                >*/}
            {/*                  {" "}*/}
            {/*                  {cityName.label}*/}
            {/*                </li>*/}
            {/*              </Link>*/}
            {/*            ))}*/}
            {/*        </ul>*/}
            {/*      </li>*/}
            {/*    )*/}
            {/*  })}*/}
            {/*</ul>*/}
          </div>
        </div>
      </div>
      <div className={layoutStyles.container} style={typeof overlay !== "undefined" && overlay ? {overflow: 'hidden'}: null}>
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
