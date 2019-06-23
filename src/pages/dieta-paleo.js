import React, { useEffect } from "react"
import Layout from "../components/layout"
import { cities } from "../data/cities"
import { navigate } from "gatsby";


const Diet = () => {
  // useEffect(() => {
  //   const { slug, city }  = pageContext
  //   if (slug) {
  //     const slugCity = cities.find(dateCity => dateCity.value === slug)
  //     // sessionStorage.setItem('city', `${JSON.stringify(slugCity)}`)
  //     return  navigate(`/${city}/${slug}`)
  //   }
  //
  //
  // }, [])
  return (
    <Layout>
      <h1>Diata paleo zahardkodowana</h1>
      <p>To jest dieta</p>
    </Layout>
  )
}


export default Diet
