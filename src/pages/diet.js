import React, { useContext } from "react"
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
    return descriptions && descriptions.description
  }
  return (
    <Layout pageContext={pageContext}>
      <DietHero />
      <DietDescription diet={findDiet() && findDiet().fullName} city={findCity()} dietDescription={findDietDescription()}/>
      <DietGallery/>
      <DietsFaq pageContext={pageContext}/>
      <DietPricing pageContext={pageContext}/>
      <CallToAction cta="diet" />
    </Layout>
  )
}


export default Diet
