import React, { Fragment } from "react"
import Header from "./header"
import Footer from "./footer"
import layoutStyles from "../styles/layout.module.scss"
import { cities } from "../data/cities"
import { Link } from "gatsby"

const Layout = ({title, children, pageContext }) => {
  const city = sessionStorage.getItem("city")

  const placeCityCookie = city => {
    return window.sessionStorage.setItem("city", city)
  }

  return (
    <Fragment>
      {!city && (
        <div className={layoutStyles.overlay}>
          <div className={layoutStyles.overlayContent}>
            <h1>Wybierz miasto</h1>
            <ul>
              {[...cities, { value: "lodz", label: "Łódź" }]
                .sort((prev, next) => {
                  const prevCity = prev.label
                  const nextCity = next.label
                  return prevCity.localeCompare(nextCity)
                })
                .map(city => (
                  <li
                    onClick={() => placeCityCookie(city.value)}
                    key={city.value}
                  >
                    <Link to={city.label === "lodz" ? "/" : `/${city.value}`}>
                      {city.label}
                    </Link>
                  </li>
                ))}
            </ul>
          </div>
        </div>
      )}
      <div className={layoutStyles.container}>
        <div className={layoutStyles.content}>
          <Header pageContext={pageContext} title={title} />
          {children}
        </div>
        <Footer />
      </div>
    </Fragment>
  )
}

export default Layout
