import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import Chatbot from "../components/chatbot"
import Offer from "../components/offer"
import { texts } from "../data/mainPage/texts"
import SEO from "../components/seo"

const IndexPage = ({ pageContext }) => {
  return (
    <Layout pageContext={pageContext}>
      <SEO title={`Catering dietetyczny Afterfit`} />
      <h1>{pageContext.city ? pageContext.city : "Lodz"}</h1>
      <p>
        Need a developer? <Link to="/contact">Contact me</Link>
      </p>
      <Chatbot />
      <Offer pageContext={pageContext} />
    </Layout>
  )
}

export default IndexPage
