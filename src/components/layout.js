import React from "react"
import Header from './header';
import Footer from './footer'
import layoutStyles from "../styles/layout.module.scss"


const Layout = ({title, children, pageContext }) => (
  <div className={layoutStyles.container}>
    <div className={layoutStyles.content}>
      <Header pageContext={pageContext} title={title}/>
      {children}
    </div>
    <Footer/>
  </div>
)

export default Layout
