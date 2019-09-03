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
import indexStyles from "../styles/index.module.scss"
import PageContext from "../context/pageContext"
import { cities } from "../data/cities"

const IndexPage = ({ pageContext }) => {
  const { menuTab } = useContext(PageContext)
  const valuePropositionRef = useRef(null)
  const chatbotRef = useRef(null)
  const offerRef = useRef(null)
  const pricingRef = useRef(null)
  const opinionsRef = useRef(null)
  const contactRef = useRef(null)
  useEffect(() => {
    if (menuTab === "valueProposition") {
      scrollToRef(valuePropositionRef)
    }
    if (menuTab === "chatbot") {
      scrollToRef(chatbotRef)
    }
    if (menuTab === "offer") {
      scrollToRef(offerRef)
    }
    if (menuTab === "pricing") {
      scrollToRef(pricingRef)
    }
    if (menuTab === "opinions") {
      scrollToRef(opinionsRef)
    }
    if (menuTab === "contact") {
      scrollToRef(contactRef)
    }
  })
  const scrollToRef = ref => {
    return window.scroll({ top: ref.current.offsetTop, behavior: "smooth" })
  }
  const getCitySlug = () => {
    return pageContext.city ? pageContext.city : "lodz"
  }

  const checkIfIndexingShouldBeOn = () => {
    const citySlug = getCitySlug()
    const cityObject = cities.find(city => city.value === citySlug)
    if (!cityObject) {
      return false
    }
    return cityObject.indexing
  }

  const findCity = () => {
    const citySlug = getCitySlug()
    const cityObject = cities.find(city => city.value === citySlug)
    if (cityObject) {
      if (cityObject.label === "Agl. śląska") {
        return "Aglomeracja śląska (Bytom, Gliwice, Katowice, Zabrze)"
      }
      if (cityObject.label === "Trójmiasto") {
        return "Trójmiasto (Gdynia, Gdańsk, Sopot)"
      }
      return cityObject.label
    }
    return cityObject && cityObject.label
  }
  const getMetaDescription = () => {
    return `Catering dietetyczny AfterFit - ${findCity()}. Zbilansowana dieta pudełkowa z dostawą do domu dla wymagających.`
  }
  return (
    <Layout pageContext={pageContext}>
      <SEO
        title={`Afterfit catering dietetyczny ${findCity()}, dieta pudełkowa z dowozem `}
        description={getMetaDescription()}
        indexing={checkIfIndexingShouldBeOn()}
      />
      <div className={indexStyles.container}>
        <Hero />
        <ValueProposition ref={valuePropositionRef} pageContext={pageContext} findCity={findCity}/>
        <Chatbot ref={chatbotRef} pageContext={pageContext} />
        <Offer pageContext={pageContext} ref={offerRef} />
        <CallToAction cta="catering" />
        <Pricing pageContext={pageContext} ref={pricingRef} />
        <Testimonials ref={opinionsRef} />
        <Faq ref={contactRef} pageContext={pageContext} />
        <Contact ref={contactRef} />
      </div>
    </Layout>
  )
}

export default IndexPage
