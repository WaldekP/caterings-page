import React, { useState, useEffect } from "react"
import { Link, graphql, useStaticQuery, navigate } from "gatsby"
import headerStyles from "../styles/header.module.scss"
import Select from "react-select"
import { cities } from "../data/cities"
import { diets } from "../data/diets"

const Header = ({ pageContext }) => {
  const citySlug = pageContext.city
  const dietSlug = pageContext.diet

  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <header className={headerStyles.header}>
      <h1>
        <Link className={headerStyles.title} to="/">
          {data.site.siteMetadata.title}
        </Link>
      </h1>
      <ul className={headerStyles.navList}>
        <li>
          <Link
            className={headerStyles.navItem}
            activeClassName={headerStyles.activeNav}
            to="/"
          >
            Main
          </Link>
        </li>
        <li>
          <Link
            className={headerStyles.navItem}
            activeClassName={headerStyles.activeNav}
            to="/about"
          >
            About
          </Link>
        </li>
        <li>
          <Link
            className={headerStyles.navItem}
            activeClassName={headerStyles.activeNav}
            to="/contact"
          >
            Contact
          </Link>
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
      <Select
        options={[...cities, { value: "lodz", label: "Łódź" }].sort(
          (prev, next) => {
            const prevCity = prev.label
            const nextCity = next.label
            return prevCity.localeCompare(nextCity)
          }
        )}
        value={cities.find(city => {
          if (!citySlug) {
            return city.value === "lodz"
          }
          return city.value === citySlug
        })}
        onChange={option => {
          sessionStorage.setItem("city", `${JSON.stringify(option.value)}`)
          if (option.value === "lodz") {
            console.log("aaaa", dietSlug)
            return navigate(dietSlug ? `/${dietSlug}` : "/")
          }
          console.log("bbbb")
          return navigate(
            dietSlug ? `/${option.value}/${dietSlug}` : `/${option.value}`
          )
        }}
      />
    </header>
  )
}

export default Header
