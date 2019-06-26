import React, { useState, useEffect } from "react"
import { Link, graphql, useStaticQuery, navigate } from "gatsby";
import headerStyles from '../styles/header.module.scss';
import Select from 'react-select';
import { cities } from "../data/cities"
import { diets } from "../data/diets"


const Header = ({pageContext}) => {
  const [city, changeCity] = useState()

  // its used when changing city in teh select
  // useEffect(() => {
  //   if (window.location.href.includes('dieta')) {
  //     console.log('aaa')
  //     const splittedSlug = window.location.href.split('/')[4]
  //     if (!splittedSlug) {
  //       console.log('cccc')
  //       return navigate(`/dieta-paleo`)
  //     }
  //     const splittedNextSlug = splittedSlug.split('-')[1]
  //     const splittedDiet = diets.find(diet => diet === splittedNextSlug)
  //     if (city && city.value === 'lodz') {
  //       return city && navigate(`/dieta-${splittedDiet}`)
  //     }
  //     return city && navigate(`/${city.value}/dieta-${splittedDiet}`)
  //   }
  //   if (city && city.value === 'lodz') {
  //     return navigate("/")
  //   }
  //   return city && navigate(`/${city.value}`)
  // }, [city])
  // // its used when the page loads
  // useEffect(() => {
  //   if (window.location.href.includes('blog')) {
  //     return undefined
  //   }
  //   if (window.location.href.includes('dieta')) {
  //     console.log('bbb')
  //     const splittedHref = window.location.href.split('/')
  //     console.log('splittedHref[3]', splittedHref[3])
  //     if (splittedHref[3].includes('dieta')) {
  //       const lodz = cities.find(city => city.value === 'lodz')
  //       changeCity(lodz)
  //       return sessionStorage.setItem('city', `${JSON.stringify(lodz)}`)
  //     }
  //     const splittedHrefCity = splittedHref[3]
  //     console.log('window.location.href', window.location.href.split('/'))
  //     const hrefCity = cities.find(dateCity => dateCity.value === splittedHrefCity)
  //     changeCity(hrefCity)
  //     return sessionStorage.setItem('city', `${JSON.stringify(hrefCity)}`)
  //   }
  //   const storagedCity = sessionStorage.getItem('city')
  //   if (pageContext && pageContext.slug) {
  //     const slugCity = cities.find(dateCity => dateCity.value === pageContext.slug)
  //     changeCity(slugCity)
  //     sessionStorage.setItem('city', `${JSON.stringify(slugCity)}`)
  //     return  navigate(`/${pageContext.slug}`)
  //   }
  //   // if (pageContext && !pageContext.slug) {
  //   //
  //   // }
  //   if (storagedCity && window.location.href === "http://localhost:8000/") {
  //     console.log()
  //     const parsedCity = JSON.parse(storagedCity)
  //     if (parsedCity.value === 'lodz') {
  //       return navigate("/")
  //     }
  //     return navigate(`/${parsedCity.value}`)
  //   }
  //
  //   // doesnt have cookie and main page
  //   if ((!storagedCity && window.location.href === "http://localhost:8000/")) {
  //     console.log('storagedCity', storagedCity)
  //     return undefined
  //   }
  //   return changeCity({ value: 'wroclaw', label: 'Wrocław' })
  // }, [])
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

      <h1><Link className={headerStyles.title} to="/">{data.site.siteMetadata.title}</Link></h1>
      <ul className={headerStyles.navList}>
        <li><Link className={headerStyles.navItem} activeClassName={headerStyles.activeNav} to="/">Main</Link></li>
        <li><Link className={headerStyles.navItem} activeClassName={headerStyles.activeNav} to="/about">About</Link></li>
        <li><Link className={headerStyles.navItem} activeClassName={headerStyles.activeNav} to="/contact">Contact</Link></li>
        <li><Link className={headerStyles.navItem} activeClassName={headerStyles.activeNav} to="/blog">Blog</Link></li>
      </ul>
      <Select
        options={cities}
        value={city}
        onChange={(option) => {
          changeCity(option)
          sessionStorage.setItem('city', `${JSON.stringify(option.value)}`)
        } }
      />
    </header>
  )
}


export default Header
