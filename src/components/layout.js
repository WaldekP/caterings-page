import React, { Fragment, useEffect } from "react"
import Header from "./header"
import Footer from "./footer"
import layoutStyles from "../styles/layout.module.scss"
import { cities } from "../data/cities"
import { Link, navigate } from "gatsby"

const Layout = ({title, children, pageContext }) => {
  const cityCookie = typeof sessionStorage !== 'undefined' && JSON.parse(sessionStorage.getItem("city"))
  const citySlug = pageContext && pageContext.city
  const dietSlug = pageContext && pageContext.diet
  // redirect from main page when the cookie is set
  useEffect(() => !citySlug && cityCookie && cityCookie !== 'lodz' && navigate(dietSlug ? `/${cityCookie}/${dietSlug}` :`/${cityCookie}`), [])
  useEffect(() => citySlug && typeof sessionStorage !== 'undefined' && sessionStorage.setItem('city', JSON.stringify(citySlug)), [])
  const getLinkUrl = (city) => {
    if (city === 'lodz') {
      if (dietSlug) {
        return `/${dietSlug}`
      }
      return '/'
    }
    if (dietSlug) {
      return `/${city}/${dietSlug}`
    }
    return `/${city}`
  }

  const placeCityCookie = city => {
    return typeof window !== 'undefined' && window.sessionStorage.setItem("city", JSON.stringify(city))
  }

  return (
    <Fragment>
      {!cityCookie && !citySlug && <div className={layoutStyles.overlay}>
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
                    <Link to={getLinkUrl(city.value)}>
                      {city.label}
                    </Link>
                  </li>
                ))}
            </ul>
          </div>
        </div>}
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
