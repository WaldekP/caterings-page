import React, { Fragment, useEffect, useContext } from "react"
import Header from "./header"
import Footer from "./footer"
import layoutStyles from "../styles/layout.module.scss"
import { cities } from "../data/cities"
import { Link, navigate } from "gatsby"
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { faCheckSquare, faCircle, faWindowClose } from '@fortawesome/free-solid-svg-icons'
import PageContext from '../context/pageContext'

library.add(fab, faCheckSquare, faCircle, fab, faWindowClose)

const Layout = ({title, children, pageContext }) => {
  const getCookie = (cname) => {
    if (typeof window !== "undefined") {
      var name = cname + "=";
      var decodedCookie = decodeURIComponent(document.cookie);
      var ca = decodedCookie.split(';');
      for(var i = 0; i <ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') {
          c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
          return c.substring(name.length, c.length);
        }
      }
      return "";
    }
  }

  const {overlay, toggleOverlay } = useContext(PageContext)
  const cityCookie = typeof document !== 'undefined' && getCookie('city-afterfit')
  const citySlug = pageContext && pageContext.city
  const dietSlug = pageContext && pageContext.diet
  // redirect from main page when the cookie is set

  useEffect(() => {
    if (!citySlug && cityCookie) {
      if (cityCookie !== 'lodz') {
        navigate(dietSlug ? `/${cityCookie}/${dietSlug}` :`/${cityCookie}`)
      }
      if (cityCookie === 'lodz') {
        navigate(dietSlug ? `/${dietSlug}` :`/`)
      }
    }
    if (citySlug && typeof document !== 'undefined') {
      return document.cookie = `city-afterfit=${citySlug}`
    }
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

  // const placeCityCookie = city => {
  //   return typeof window !== 'undefined' && window.sessionStorage.setItem("city", JSON.stringify(city))
  // }

  const placeCookie = city => {
    if (typeof document !== "undefined") {
      return document.cookie = `city-afterfit=${city}`
    }
  }

  return (
    <Fragment>
      {console.log('cityCookie', cityCookie)}
      {console.log('citySlug', citySlug)}
      {/*{cityCookie === "lodz" && !citySlug ? null : !cityCookie && !citySlug && <div className={ layoutStyles.overlay}>*/}
      {/*    <div className={layoutStyles.overlayContent}>*/}
      {/*      <h2>Wybierz miasto:</h2>*/}
      {/*      <ul className={layoutStyles.overlayList}>*/}
      {/*        {[...cities, { value: "lodz", label: "Łódź" }]*/}
      {/*          .sort((prev, next) => {*/}
      {/*            const prevCity = prev.label*/}
      {/*            const nextCity = next.label*/}
      {/*            return prevCity.localeCompare(nextCity)*/}
      {/*          })*/}
      {/*          .map(city => (*/}
      {/*            <li*/}
      {/*              className={layoutStyles.overlayItem}*/}
      {/*              onClick={() => placeCityCookie(city.value)}*/}
      {/*              key={city.value}*/}
      {/*            >*/}
      {/*              <Link className={layoutStyles.link} to={getLinkUrl(city.value)}>*/}
      {/*                {city.label}*/}
      {/*              </Link>*/}
      {/*            </li>*/}
      {/*          ))}*/}
      {/*      </ul>*/}
      {/*    </div>*/}
      {/*  </div>}*/}
      <div className={layoutStyles.overlay} style={(typeof document !== 'undefined' && cityCookie) || (typeof overlay !== 'undefined' && !overlay) || citySlug ? {display: 'none'} : null}>
        {console.log('overlay', overlay)}
        <div className={layoutStyles.overlayContent}>
          <h2>Wybierz miasto:</h2>

          {/*}}>Zostaw ciastko</button>*/}
          {/*<p>{getCookie('user')}</p>*/}
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
                        onClick={() => {
                          toggleOverlay(false)
                          placeCookie(city.value)
                        }}
                        key={city.value}
                    >
                      <Link className={layoutStyles.link} to={getLinkUrl(city.value)}>
                        {city.label}
                      </Link>
                    </li>
                ))}
          </ul>
        </div>
      </div>
      <div className={layoutStyles.container}>
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
