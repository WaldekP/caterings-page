import React from "react"
import footerStyles from '../styles/footer.module.scss'
import { graphql, useStaticQuery } from "gatsby"

const Footer = () => {
  const data = useStaticQuery(graphql`
  query {
  site {
    siteMetadata {
      author
    }
  }
}
  `)
  return (
    <footer>
      <div className={footerStyles.container}>
        <p>Autor: {data.site.siteMetadata.author}</p>
        <p>Menu</p>
        <p>Diety</p>
        <p>Miasta</p>
      </div>
    </footer>
  )
}


export default Footer
