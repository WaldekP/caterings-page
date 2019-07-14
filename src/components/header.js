import React, { Fragment, useEffect, useState, useContext } from "react"
import { Link, graphql, useStaticQuery, navigate } from "gatsby"
import headerStyles from "../styles/header.module.scss"
import commonStyles from "../styles/common.module.scss"
import { cities } from "../data/cities"
import logo from "../images/logo/afterfit_img_logo.svg"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import PageContext from "../context/pageContext"

const Header = ({ pageContext }) => {
  const citySlug = pageContext && pageContext.city
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

  const [yPosition, changePosition] = useState(
    typeof window !== "undefined" && window.scrollY
  )

  const [menuOverlay, toggleMenu] = useState(false)

  const handleScroll = () => {
    if (typeof window !== "undefined") {
      return changePosition(window.scrollY)
    }
  }
  const { changeMenuTab } = useContext(PageContext)

  useEffect(() => {
    if (typeof window !== "undefined") {
      window.addEventListener("scroll", handleScroll)
    }
  }, [])

  const findCity = () => {
    console.log("citySlug", citySlug)
    if (!citySlug) {
      return "lodz"
    }
    return citySlug
  }
  if (menuOverlay) {
    return (
      <div className={menuOverlay && headerStyles.overlay}>
        <div className={headerStyles.mobileMenuHeader}>
          <span onClick={() => toggleMenu(false)}><FontAwesomeIcon icon="window-close" /></span>
          <span>
            <Link to={citySlug ? `/${citySlug}` : "/"}>
              <img src={logo} />
            </Link>
          </span>{" "}
        </div>
        <div className={headerStyles.mobileMenu}>
          <button>Zamów</button>
          <ul className={headerStyles.navListMobile}>
            <li onClick={() => changeMenuTab("valueProposition")}>
              Co nas wyróżnia
            </li>
            <li onClick={() => changeMenuTab("chatbot")}>Dobierz dietę</li>
            <li
              onClick={() => {
                changeMenuTab("offer")
              }}
            >
              Oferta
            </li>
            <li onClick={() => changeMenuTab("pricing")}>Cennik</li>
            <li onClick={() => changeMenuTab("opinions")}>Opinie</li>
            <li onClick={() => changeMenuTab("contact")}>Kontakt</li>
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
          <div>
            <select
              onChange={({ target: { value } }) => {
                typeof window !== "undefined" &&
                window.sessionStorage.setItem(
                  "city",
                  `${JSON.stringify(value)}`
                )
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
                  <option value={city.value} key={city.value}>
                    {city.label}
                  </option>
                ))}
            </select>
          </div>
        </div>
      </div>
    )
  }

  return (
    <Fragment>
      <header
        className={`${
          yPosition < 60 ? headerStyles.header : headerStyles.secondHeader
        }`}
      >
        <span>
          <Link to={citySlug ? `/${citySlug}` : "/"}>
            <img src={logo} />
          </Link>
        </span>
        <div
          className={headerStyles.hamburgerMenu}
          onClick={() => toggleMenu(true)}
        >
          HAMBURGER
        </div>
        <div className={headerStyles.menu}>
          <ul className={headerStyles.navList}>
            <li onClick={() => changeMenuTab("valueProposition")}>
              Co nas wyróżnia
            </li>
            <li onClick={() => changeMenuTab("chatbot")}>Dobierz dietę</li>
            <li
              onClick={() => {
                changeMenuTab("offer")
              }}
            >
              Oferta
            </li>
            <li onClick={() => changeMenuTab("pricing")}>Cennik</li>
            <li onClick={() => changeMenuTab("opinions")}>Opinie</li>
            <li onClick={() => changeMenuTab("contact")}>Kontakt</li>
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
              typeof window !== "undefined" &&
                window.sessionStorage.setItem(
                  "city",
                  `${JSON.stringify(value)}`
                )
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
                <option value={city.value} key={city.value}>
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
