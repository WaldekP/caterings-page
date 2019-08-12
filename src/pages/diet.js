import React from "react"
import Layout from "../components/layout"
import DietHero from "../components/dietHero"
import DietDescription from "../components/dietDescription"
import { diets } from "../data/diets"
import { cities } from "../data/cities"
import DietGallery from "../components/dietGallery"
import DietsFaq from '../components/dietsFaq'
import DietPricing from '../components/dietPricing'
import CallToAction from '../components/callToAction'


const Diet = ({pageContext}) => {

  const findDiet = () => {
    const dietSlug = pageContext.diet
    return diets.find(diet => diet.dietUrl === dietSlug)
  }

  const getCitySlug = () => {
    return pageContext.city ? pageContext.city : 'lodz'

  }

  const getDietAltTag = () => {
    const city = getCitySlug()
    const diet = pageContext.diet
    return {
      firstAlt: `${diet} - ${city} - catering dietetyczny`,
      secondAlt: `${diet} - ${city} - dieta pudełkowa`,
      thirdAlt: `${diet} - ${city} - dieta z dowozem`,
    }
  }
  const findCity = () => {
    const citySlug = getCitySlug()
    const cityObject =  cities.find(city => city.value === citySlug)
    return cityObject && cityObject.label
  }

  const findDietDescription = () => {
    const diet = findDiet()
    const city = getCitySlug()
    if (!(diet && city)) {
      return null
    }
    const descriptions = diet && diet.cityDescription[city] ? diet.cityDescription[city] : diet.cityDescription['lodz']
    console.log('descriptions', descriptions)
    return descriptions && descriptions.description
  }

  return (
    <Layout pageContext={pageContext}>
      <DietHero />
      <DietDescription diet={findDiet() && findDiet().fullName} city={findCity()} dietDescription={findDietDescription()} menu={findDiet() && findDiet().menu}/>
      <DietGallery getDietAltTag={getDietAltTag} dietGallery={findDiet() && findDiet().dietGallery}/>
      <DietsFaq pageContext={pageContext}/>
      <DietPricing pageContext={pageContext} diet={findDiet() && findDiet().fullName}/>
      <CallToAction cta="diet" />
    </Layout>
  )
}


export default Diet
