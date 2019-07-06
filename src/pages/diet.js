import React, { useContext } from "react"
import Layout from "../components/layout"
import PageContext from "../context/pageContext"


const Diet = ({pageContext}) => {
  const { calories } = useContext(PageContext)
  return (
    <Layout pageContext={pageContext}>
      <h2>{pageContext.diet}</h2>
      <p>Wybrana kalorycznosc to {calories}</p>
    </Layout>
  )
}


export default Diet
