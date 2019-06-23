import React from "react"
import { graphql, Link, useStaticQuery } from "gatsby"
import Layout from '../components/layout'
import Chatbot from '../components/chatbot'
import Offer from "../components/offer"


const Warszawa = () => {
  const data = useStaticQuery(graphql`query {
  site {
    pathPrefix
  }
}`)
  console.log('data', data)
  return (
    <Layout>
      <h1>Hello</h1>
      <p>I'm Waldek</p>
      <p>Need a developer? <Link to="/contact">Contact me</Link></p>
      <Chatbot />
      <Offer/>
    </Layout>
  )
}

export default Warszawa
