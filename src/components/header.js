import React, { Fragment, useEffect, useState, useContext } from "react"
import { Link, navigate } from "gatsby"
import headerStyles from "../styles/header.module.scss"
import commonStyles from "../styles/common.module.scss"
import { cities } from "../data/cities"
import logo from "../images/logo/afterfit_img_logo.svg"

import PageContext from "../context/pageContext"

const Header = ({ pageContext }) => {
  const citySlug = pageContext && pageContext.city
  const dietSlug = pageContext && pageContext.diet

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
    if (citySlug) {
      return cities.find(city => city.value === citySlug).value
    }
    return "lodz"
  }

  return (
    <Fragment>
      {/*mobile menu*/}
      {menuOverlay && (
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
            <div className={headerStyles.mobileButtonsWrapper}>
              <a
                href="https://afterfit-catering.pl/zamowienie"
                target="_blank"
                rel="noopener"
              >
                <button>Zamów</button>
              </a>
              <button className={headerStyles.panelButton}>
                <a href="https://panel.dietly.pl/logowanie-catering?company=afterfit">
                  Panel
                </a>
              </button>
            </div>
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
                <Link className={headerStyles.navItem} to="/blog">
                  Blog
                </Link>
              </li>
            </ul>
            <div>
              <select
                onChange={({ target: { value } }) => {
                  console.log("ccccc")
                  typeof window !== "undefined" &&
                    window.localStorage.setItem("city", value)
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
                {cities
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
      )}
      {/*this header is for medium screens*/}
      <header
        className={headerStyles.topHeader}
        style={{ backgroundColor: dietSlug ? "transparent" : "#fbdae2" }}
      >
        <span>
          <Link to={citySlug ? `/${citySlug}` : "/"}>
            <img src={logo} className={headerStyles.topLogo} />
          </Link>
        </span>
        <div className={headerStyles.topMenu}>
          <h3>
            <a
              href="https://panel.dietly.pl/logowanie-catering?company=afterfit"
              target="_blank"
              rel="noopener"
            >
              Panel klienta
            </a>
          </h3>
          <select
            onChange={({ target: { value } }) => {
              typeof window !== "undefined" &&
                window.localStorage.setItem("city", value)
              if (value === "lodz") {
                return navigate(dietSlug ? `/${dietSlug}` : "/")
              }
              return navigate(dietSlug ? `/${value}/${dietSlug}` : `/${value}`)
            }}
            value={findCity()}
          >
            {cities
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
      <header
        className={headerStyles.header}
        style={{ backgroundColor: dietSlug ? "transparent" : "#fbdae2" }}
      >
        <span>
          <Link to={citySlug ? `/${citySlug}` : "/"}>
            <img src={logo} className={headerStyles.logo} />
          </Link>
        </span>
        <div
          className={headerStyles.hamburgerMenu}
          onClick={() => toggleMenu(true)}
        />
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
              <Link className={headerStyles.navItem} to="/blog">
                Blog
              </Link>
            </li>
          </ul>
          <a
            href="https://afterfit-catering.pl/zamowienie"
            target="_blank"
            rel="noopener"
          >
            <button className={commonStyles.button}>Zamów</button>
          </a>
        </div>
        <div className={headerStyles.menuRightPart}>
          <h3>
            <a
              href="https://panel.dietly.pl/logowanie-catering?company=afterfit"
              target="_blank"
              rel="noopener"
            >
              Panel klienta
            </a>
          </h3>
          <select
            onChange={({ target: { value } }) => {
              typeof window !== "undefined" &&
                window.localStorage.setItem("city", value)
              if (value === "lodz") {
                return navigate(dietSlug ? `/${dietSlug}` : "/")
              }
              return navigate(dietSlug ? `/${value}/${dietSlug}` : `/${value}`)
            }}
            value={findCity()}
          >
            {cities
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
