import React, { Fragment, useEffect, useState, useContext } from "react"
import { Link, graphql, useStaticQuery, navigate } from "gatsby"
import headerStyles from "../styles/header.module.scss"
import commonStyles from "../styles/common.module.scss"
import { cities } from "../data/cities"
import { diets } from "../data/diets"

import MenuContext from "../context/menuContext"

const Header = ({ pageContext }) => {
  console.log('pageContext', pageContext)
  const citySlug = pageContext && pageContext.city
  console.log('to jest citySlug header', citySlug)
  const dietSlug = pageContext && pageContext.diet

  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  const [yPosition, changePosition] = useState(typeof window !== 'undefined' && window.scrollY)

  const handleScroll = () => {
    if (typeof window !== 'undefined') {
      return changePosition(window.scrollY)
    }
  }
  const { menuTab, changeMenuTab } = useContext(MenuContext)

  useEffect(() => {
    if (typeof window !== 'undefined') {
      window.addEventListener("scroll", handleScroll)
    }
  }, [])

  const findCity = () => {
    if (!citySlug) {
      return "lodz"
    }
    return citySlug
  }

  return (
    <Fragment>
      {/*<header className={headerStyles.header}>*/}
      {/*  <h1>*/}
      {/*    <Link className={headerStyles.title} to="/">*/}
      {/*      {data.site.siteMetadata.title}*/}
      {/*    </Link>*/}
      {/*  </h1>*/}
      {/*  <div className={headerStyles.topMenuRightPart}>*/}
      {/*  <button>Panel klienta</button>*/}
      {/*  <Select*/}
      {/*    options={[...cities, { value: "lodz", label: "Łódź" }].sort(*/}
      {/*      (prev, next) => {*/}
      {/*        const prevCity = prev.label*/}
      {/*        const nextCity = next.label*/}
      {/*        return prevCity.localeCompare(nextCity)*/}
      {/*      }*/}
      {/*    )}*/}
      {/*    value={cities.find(city => {*/}
      {/*      if (!citySlug) {*/}
      {/*        return city.value === "lodz"*/}
      {/*      }*/}
      {/*      return city.value === citySlug*/}
      {/*    })}*/}
      {/*    onChange={option => {*/}
      {/*      sessionStorage.setItem("city", `${JSON.stringify(option.value)}`)*/}
      {/*      if (option.value === "lodz") {*/}
      {/*        console.log("aaaa", dietSlug)*/}
      {/*        return navigate(dietSlug ? `/${dietSlug}` : "/")*/}
      {/*      }*/}
      {/*      console.log("bbbb")*/}
      {/*      return navigate(*/}
      {/*        dietSlug ? `/${option.value}/${dietSlug}` : `/${option.value}`*/}
      {/*      )*/}
      {/*    }}*/}
      {/*  />*/}
      {/*  </div>*/}
      {/*</header>*/}
      <header
        className={
          yPosition < 68 ? headerStyles.secondHeader : headerStyles.thirdHeader
        }
      >
        <span>
          <Link className={headerStyles.title} to="/">
            {data.site.siteMetadata.title}
          </Link>
        </span>
        <div className={headerStyles.menu}>
          <ul className={headerStyles.navList}>
            <li onClick={() => changeMenuTab({ menuTab: "valueProposition" })}>
              Co nas wyróżnia
            </li>
            <li onClick={() => changeMenuTab({ menuTab: "chatbot" })}>
              Dobierz dietę
            </li>
            <li onClick={() => changeMenuTab({ menuTab: "offer" })}>Oferta</li>
            <li onClick={() => changeMenuTab({ menuTab: "pricing" })}>
              Cennik
            </li>
            <li onClick={() => changeMenuTab({ menuTab: "opinions" })}>
              Opinie
            </li>
            <li onClick={() => changeMenuTab({ menuTab: "contact" })}>
              Kontakt
            </li>
            <li>
              <Link
                className={headerStyles.navItem}
                activeClassName={headerStyles.activeNav}
                to="/blog"
              >
                Blog
              </Link>
            </li>
          </ul>
          <button className={commonStyles.button}>Zamów</button>
        </div>
        <div className={headerStyles.topMenuRightPart}>
          <button className={headerStyles.panelButton}>Panel klienta</button>
          <select
            onChange={({ target: { value } }) => {
              typeof window !== 'undefined' && window.sessionStorage.setItem("city", `${JSON.stringify(value)}`)
              if (value === "lodz") {
                return navigate(dietSlug ? `/${dietSlug}` : "/")
              }
              return navigate(dietSlug ? `/${value}/${dietSlug}` : `/${value}`)
            }}
            value={findCity()}
          >
            {[...cities, { value: "lodz", label: "Łódź" }]
              .sort((prev, next) => {
                const prevCity = prev.label
                const nextCity = next.label
                return prevCity.localeCompare(nextCity)
              })
              .map(city => (
                <option
                  value={city.value}
                  key={city.value}>
                  {city.label}
                </option>
              ))}
          </select>
        </div>
      </header>
    </Fragment>
  )
}
export default Header
