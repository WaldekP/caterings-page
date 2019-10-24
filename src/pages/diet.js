import React from "react"
import Layout from "../components/layout"
import DietHero from "../components/dietHero"
import DietDescription from "../components/dietDescription"
import { diets } from "../data/diets"
import { cities } from "../data/cities"
import DietGallery from "../components/dietGallery"
import DietsFaq from "../components/dietsFaq"
import DietPricing from "../components/dietPricing"
import CallToAction from "../components/callToAction"
import SEO from "../components/seo"

const Diet = ({ pageContext }) => {
  const findDiet = () => {
    const dietSlug = pageContext.diet
    return diets.find(diet => diet.dietUrl === dietSlug)
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

  const getDietSlug = () => {
    return pageContext && pageContext.diet
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

  const findDietDescription = () => {
    const diet = findDiet()
    const city = getCitySlug()
    if (!(diet && city)) {
      return null
    }

    let descriptions;

    if (!diet.cityDescription[city]) {
      descriptions = diet.cityDescription["lodz"]
    }

    if (diet.cityDescription[city]) {
      descriptions = diet.cityDescription[city]
    }

    if (city === "aglomeracja-slaska") {
      descriptions = diet.cityDescription["aglomeracjaSlaska"] ?
        diet.cityDescription["aglomeracjaSlaska"] :
        diet.cityDescription["lodz"]
    }

    if (city === "gorzow-wielkopolski") {
      descriptions = diet.cityDescription["gorzowWielkopolski"] ?
        diet.cityDescription["gorzowWielkopolski"] : diet.cityDescription["lodz"]
    }

    if (city === "bielsko-biala") {
      descriptions = diet.cityDescription["bielskoBiala"] ?
        diet.cityDescription["bielskoBiala"] :
        diet.cityDescription["lodz"]
    }

    if (!city) {
     descriptions = diet.cityDescription["lodz"]
    }

    return descriptions && descriptions.description
  }

  return (
    <Layout pageContext={pageContext}>
      <SEO
        title={`${findDiet() &&
          findDiet().fullName} - catering dietetyczny ${findCity()}`}
        description={`${findDiet() &&
        findDiet().fullName} - ${findCity()}. ${findDiet() && findDiet().metaDescription}`}
        indexing={checkIfIndexingShouldBeOn()}
      />
      <DietHero diet={pageContext && getDietSlug()} />
      <DietDescription
        diet={findDiet() && findDiet().fullName}
        city={findCity()}
        dietDescription={findDietDescription()}
        menu={findDiet() && findDiet().menu}
      />
      <DietGallery
        getDietAltTag={getDietAltTag}
        dietGallery={findDiet() && findDiet().dietGallery}
      />
      <DietsFaq
        pageContext={pageContext}
        dietQuestions={
          findDiet() &&
          findDiet().questions &&
          Object.values(findDiet().questions)
        }
      />
      <DietPricing
        pageContext={pageContext}
        diet={findDiet() && findDiet().fullName}
      />
      <CallToAction cta="diet" />
    </Layout>
  )
}

export default Diet
