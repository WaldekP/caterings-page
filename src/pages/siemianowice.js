import React, { useState, useRef, useContext, useEffect } from "react"
import Layout from "../components/layout"
import Chatbot from "../components/chatbot"
import Offer from "../components/offer"
import SEO from "../components/seo"
import ValueProposition from "../components/valueProposition"
import Hero from "../components/hero"
import Pricing from "../components/pricing"
import CallToAction from "../components/callToAction"
import Testimonials from "../components/testimonials"
import Faq from "../components/faq"
import Contact from "../components/contact"
import indexStyles from '../styles/index.module.scss'
import MenuContext from "../context/menuContext"

const Siemianowice = ({ pageContext }) => {
  const { menuTab } = useContext(MenuContext)
  const valuePropositionRef = useRef(null);
  const chatbotRef = useRef(null);
  const offerRef = useRef(null);
  const pricingRef = useRef(null);
  const opinionsRef = useRef(null);
  const contactRef = useRef(null);
  useEffect(() => {
    if(menuTab.menuTab === 'valueProposition') {
      scrollToRef(valuePropositionRef)
    }
    if(menuTab.menuTab === 'chatbot') {
      scrollToRef(chatbotRef)
    }
    if(menuTab.menuTab === 'offer') {
      scrollToRef(offerRef)
    }
    if(menuTab.menuTab === 'pricing') {
      scrollToRef(pricingRef)
    }
    if(menuTab.menuTab === 'opinions') {
      scrollToRef(opinionsRef)
    }
    if(menuTab.menuTab === 'contact') {
      scrollToRef(contactRef)
    }
  })
  const scrollToRef = ref => {
      return window.scroll({ top: ref.current.offsetTop, behavior: 'smooth' })
    }
  ;
  return (
    <Layout pageContext={pageContext}>
      <SEO title={`Catering dietetyczny Afterfit`} />
      <div className={indexStyles.container}>
        <Hero/>
        <ValueProposition ref={valuePropositionRef}/>
        <Chatbot ref={chatbotRef}/>
        <Offer pageContext={pageContext} ref={offerRef}/>
        <CallToAction />
        <Pricing ref={pricingRef}/>
        <Testimonials ref={opinionsRef}/>
        <Faq/>
        <Contact ref={contactRef}/>
      </div>
    </Layout>
  )
}

export default Siemianowice
