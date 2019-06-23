import React, { useEffect } from "react"
import Layout from "../components/layout"
import { cities } from "../data/cities"
import { navigate } from "gatsby";


const Diet = ({pageContext}) => {
  return (
      <Layout>
        <h1>{pageContext.slug}</h1>
        <p>To jest dieta</p>
      </Layout>
  )
}


export default Diet
