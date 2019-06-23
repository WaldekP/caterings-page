import React from "react"
import { Link } from "gatsby";
import Layout from '../components/layout'

const AboutPage = () => (
  <Layout>
    <p>O mnie</p>
    <p><Link to="/contact"> Work with me</Link></p>
  </Layout>
)

export default AboutPage
