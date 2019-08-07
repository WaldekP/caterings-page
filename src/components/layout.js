import React, { Fragment, useEffect } from "react"
import Header from "./header"
import Footer from "./footer"
import layoutStyles from "../styles/layout.module.scss"
import { cities } from "../data/cities"
import { Link, navigate } from "gatsby"
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { faCheckSquare, faCircle, faWindowClose } from '@fortawesome/free-solid-svg-icons'

library.add(fab, faCheckSquare, faCircle, fab, faWindowClose)

const Layout = ({title, children, pageContext }) => {
  const cityCookie = typeof window !== 'undefined' && JSON.parse(window.sessionStorage.getItem("city"))
  const citySlug = pageContext && pageContext.city
  const dietSlug = pageContext && pageContext.diet
  // redirect from main page when the cookie is set
  // useEffect(() => !citySlug && cityCookie && cityCookie !== 'lodz' && navigate(dietSlug ? `/${cityCookie}/${dietSlug}` :`/${cityCookie}`), [])
  useEffect(() => {
      citySlug && typeof window !== 'undefined' && window.sessionStorage.setItem('city', JSON.stringify(citySlug))
  }, [])
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
            <h2>Wybierz miasto:</h2>
            <ul className={layoutStyles.overlayList}>
              {[...cities, { value: "lodz", label: "Łódź" }]
                .sort((prev, next) => {
                  const prevCity = prev.label
                  const nextCity = next.label
                  return prevCity.localeCompare(nextCity)
                })
                .map(city => (
                  <li
                    className={layoutStyles.overlayItem}
                    onClick={() => placeCityCookie(city.value)}
                    key={city.value}
                  >
                    <Link className={layoutStyles.link} to={getLinkUrl(city.value)}>
                      {city.label}
                    </Link>
                  </li>
                ))}
            </ul>
          </div>
        </div>}
      <div className={layoutStyles.container}>
          {console.log('pageContext', pageContext)}
        <div className={layoutStyles.content}>
          <Header pageContext={pageContext} title={title} />
          {children}
        </div>
        <Footer pageContext={pageContext}/>
      </div>
    </Fragment>
  )
}

export default Layout
