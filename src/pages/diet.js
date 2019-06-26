import React, { useEffect } from "react"
import Layout from "../components/layout"
import { cities } from "../data/cities"
import { navigate } from "gatsby";


const Diet = ({pageContext}) => {
  return (
    <Layout pageContext={pageContext}>
      <h1>{pageContext.diet}</h1>
    </Layout>
  )
}


export default Diet
