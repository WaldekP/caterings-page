import React, { useRef, useContext, useEffect } from "react"
import Layout from "../components/common/layout"
import Chatbot from "../components/mainPage/chatbot"
import Offer from "../components/mainPage/offer"
import SEO from "../components/mainPage/seo"
import ValueProposition from "../components/mainPage/valueProposition"
import Hero from "../components/mainPage/hero"
import Pricing from "../components/mainPage/pricing"
import CallToAction from "../components/common/callToAction"
import Testimonials from "../components/mainPage/testimonials"
import Faq from "../components/mainPage/faq"
import Contact from "../components/mainPage/contact"
import indexStyles from "../styles/index.module.scss"
import PageContext from "../context/pageContext"
import { cities } from "../data/cities"
import { graphql } from "gatsby"

export const query = graphql`
    query MyFaqQuery($city: String!) {
        allContentfulFirstFaqForOtherCities(filter: {slug: {eq: $city}}) {
            edges {
                node {
                    category
                    slug
                    childContentfulFirstFaqForOtherCitiesAnswerRichTextNode {
                        json
                    }
                    question
                    order
                }
            }
        }
       allContentfulFaqLodz(filter: {slug: {eq: "lodz"}}) {
           edges {
               node {
                    category
                    slug
                    childContentfulFaqLodzAnswerRichTextNode {
                        json
                   }
                   question
                   order
               }
           }
       }
    }
`

const MainPage = ({ data, pageContext, faqLodzData }) => {

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

  const otherCityFirstFaq = () => {
    if (pageContext.city) {
      return data.allContentfulFirstFaqForOtherCities.edges.length === 1 && data.allContentfulFirstFaqForOtherCities.edges[0]
    }
  }

  const getFaqNodes = () => {
    const lodzData = data ? data : faqLodzData
    return lodzData.allContentfulFaqLodz.edges
  }

  const getUpdatedFaqNodes = () => {
    return getFaqNodes().map(node => {
      if (node.node.category === 'general' && parseFloat(node.node.order) === 1) {
        return otherCityFirstFaq() ? otherCityFirstFaq() : node
      }
      return node
    })
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
        <ValueProposition
          ref={valuePropositionRef}
          pageContext={pageContext}
          findCity={findCity}
        />
        <Chatbot ref={chatbotRef} pageContext={pageContext} />
        <Offer pageContext={pageContext} ref={offerRef} />
        <CallToAction cta="catering" />
        <Pricing pageContext={pageContext} ref={pricingRef} />
        <Testimonials ref={opinionsRef} />
        <Faq
          ref={contactRef}
          pageContext={pageContext}
          faqNodes={getUpdatedFaqNodes()}
          otherCityFirstFaq={otherCityFirstFaq}
        />
        <Contact ref={contactRef} />
      </div>
    </Layout>
  )
}

export default MainPage
