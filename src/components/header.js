import React, { Fragment, useEffect, useState, useContext } from "react"
import { Link, graphql, useStaticQuery, navigate } from "gatsby"
import headerStyles from "../styles/header.module.scss"
import commonStyles from "../styles/common.module.scss"
import { cities } from "../data/cities"
import logo from "../images/logo/afterfit_img_logo.svg"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import hamburgerMenu from "../images/Hamurger menu.png"

import PageContext from "../context/pageContext"

const Header = ({ pageContext }) => {
    const cityCookie = typeof window !== 'undefined' && JSON.parse(window.sessionStorage.getItem("city"))
    const citySlug = pageContext && pageContext.city
  const dietSlug = pageContext && pageContext.diet

  // const data = useStaticQuery(graphql`
  //   query {
  //     site {
  //       siteMetadata {
  //         title
  //       }
  //     }
  //   }
  // `)

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
    if (!citySlug) {
      return "lodz"
    }
    return citySlug
  }
  if (menuOverlay) {
    return (
      <div className={menuOverlay && headerStyles.overlay}>
        <div className={headerStyles.mobileMenuHeader}>
          <span>
            <Link to={citySlug ? `/${citySlug}` : "/"}>
              <img src={logo} />
            </Link>
          </span>
          <div
            className={headerStyles.hamburgerMenuClose}
            onClick={() => toggleMenu(false)}
          />
        </div>
        <div className={headerStyles.mobileMenu}>
          <button>Zamów</button>
          <ul className={headerStyles.navListMobile}>
            <li
              onClick={() => {
                toggleMenu(false)
                changeMenuTab("valueProposition")
                dietSlug && navigate(citySlug ? `/${citySlug}` : "/")
              }}
            >
              Co nas wyróżnia
            </li>
            <li
              onClick={() => {
                changeMenuTab("chatbot")
                toggleMenu(false)
                dietSlug && navigate(citySlug ? `/${citySlug}` : "/")
              }}
            >
              Dobierz dietę
            </li>
            <li
              onClick={() => {
                changeMenuTab("offer")
                toggleMenu(false)
                dietSlug && navigate(citySlug ? `/${citySlug}` : "/")
              }}
            >
              Oferta
            </li>
            <li
              onClick={() => {
                toggleMenu(false)
                changeMenuTab("pricing")
                dietSlug && navigate(citySlug ? `/${citySlug}` : "/")
              }}
            >
              Cennik
            </li>
            <li
              onClick={() => {
                toggleMenu(false)
                changeMenuTab("opinions")
                dietSlug && navigate(citySlug ? `/${citySlug}` : "/")
              }}
            >
              Opinie
            </li>
            <li
              onClick={() => {
                toggleMenu(false)
                changeMenuTab("contact")
                dietSlug && navigate(citySlug ? `/${citySlug}` : "/")
              }}
            >
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
          <div>
            <select
              onChange={({ target: { value } }) => {
                typeof window !== "undefined" &&
                  window.sessionStorage.setItem(
                    "city",
                    `${JSON.stringify(value)}`
                  )
                if (value === "lodz") {
                  changeMenuTab("")
                  return navigate(dietSlug ? `/${dietSlug}` : "/")
                }
                changeMenuTab("")
                return navigate(
                  dietSlug ? `/${value}/${dietSlug}` : `/${value}`
                )
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
      {/*<header*/}
      {/*  className={`${*/}
      {/*    yPosition < 100 ? (dietSlug ? headerStyles.dietHeader : headerStyles.header) : (dietSlug ? headerStyles.dietHeader : headerStyles.secondHeader)*/}
      {/*    }`}*/}
      {/*>*/}
      <header className={headerStyles.topHeader} style={{backgroundColor: dietSlug ? "transparent" : "#fbdae2"}}>
        <span>
          <Link to={citySlug ? `/${citySlug}` : "/"}>
            <img src={logo} className={headerStyles.topLogo}/>
          </Link>
        </span>
        <div className={headerStyles.topMenu}>
          <h3>Mój panel</h3>
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
      {/*<header*/}
      {/*  className={`${*/}
      {/*    yPosition < 100*/}
      {/*      ? dietSlug*/}
      {/*        ? headerStyles.dietHeader*/}
      {/*        : headerStyles.header*/}
      {/*      : dietSlug*/}
      {/*      ? headerStyles.dietHeader*/}
      {/*      : headerStyles.header*/}
      {/*  }`}*/}
      {/*>*/}
      <header
        className={headerStyles.header} style={{backgroundColor: dietSlug ? "transparent" : "#fbdae2"}}
      >
        <span>
          <Link to={citySlug ? `/${citySlug}` : "/"}>
            <img src={logo} className={headerStyles.logo}/>
          </Link>
        </span>
        <div
          className={headerStyles.hamburgerMenu}
          onClick={() => toggleMenu(true)}
        ></div>
        <div className={headerStyles.menu}>
          <ul className={headerStyles.navList}>
            <li
              onClick={() => {
                dietSlug && navigate(citySlug ? `/${citySlug}` : "/")
                changeMenuTab("valueProposition")
              }}
            >
              Co nas wyróżnia
            </li>
            <li
              onClick={() => {
                dietSlug && navigate(citySlug ? `/${citySlug}` : "/")
                changeMenuTab("chatbot")
              }}
            >
              Dobierz dietę
            </li>
            <li
              onClick={() => {
                dietSlug && navigate(citySlug ? `/${citySlug}` : "/")
                changeMenuTab("offer")
              }}
            >
              Oferta
            </li>
            <li
              onClick={() => {
                dietSlug && navigate(citySlug ? `/${citySlug}` : "/")
                changeMenuTab("pricing")
              }}
            >
              Cennik
            </li>
            <li
              onClick={() => {
                dietSlug && navigate(citySlug ? `/${citySlug}` : "/")
                changeMenuTab("opinions")
              }}
            >
              Opinie
            </li>
            <li
              onClick={() => {
                dietSlug && navigate(citySlug ? `/${citySlug}` : "/")
                changeMenuTab("contact")
              }}
            >
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
        <div className={headerStyles.menuRightPart}>
          {/*<button className={headerStyles.panelButton}>Panel</button>*/}
          <h4>Panel klienta</h4>
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
