import React, { useEffect, useReducer, useState } from "react"
import Layout from "../components/common/layout"
import DietHero from "../components/diets/dietHero"
import DietDescription from "../components/diets/dietDescription"
import { diets } from "../data/diets"
import { cities } from "../data/cities"
import DietGallery from "../components/diets/dietGallery"
import DietsFaq from "../components/diets/dietsFaq"
import DietPricing from "../components/diets/dietPricing"
import CallToAction from "../components/common/callToAction"
import SEO from "../components/mainPage/seo"
import axios from "axios"
import { DateTime } from 'luxon'
import { graphql } from "gatsby"
import DietLongDescription from '../components/diets/dietLongDescription'

export const query = graphql`
    query MyDietDataQuery($diet: String!) {
        allContentfulDietData(filter: {diet: {eq: $diet}}) {
            edges {
                node {
                    childContentfulDietDataDietDescriptionRichTextNode {
                        json
                    }
                    city
                    diet
                }
            }
        }
        allContentfulLongDietDescription(filter: {diet: {eq: $diet}}) {
            edges {
                node {
                    diet
                    childContentfulLongDietDescriptionContentRichTextNode {
                        json
                    }
                }
            }
        }
    }
`

const DietTemplate = ({ pageContext, data }) => {

  const [dayOffset, changeDayOffset] = useState(0)

  const [state, dispatch] = useReducer((state, action) => {
    switch(action.type) {
      case 'STORE_MENUS':
        return action.menus
      default:
        return state;
    }
  }, {})

  useEffect( () => {
    axios(`/.netlify/functions/currentMenus?menus=${JSON.stringify(getMenusObject())}`, {
      method:'POST',
      body: JSON.stringify({
        url: getMenusObject()
      })
    }).then(results => {
      if (results.status === 200) {
        dispatch({
          type: 'STORE_MENUS', menus: results.data
        })
      }
    })
  }, [])


  const disableMenuDateChange = direction => {
    if (direction === 'up' && dayOffset >= 5) {
      return true
    }
    if (direction === 'down' && dayOffset <= -7) {
      return true
    }
    return false
  }

  const getDay = () => {
    return getDateObject().toISODate()
  }

  const getDateObject = () => {
    return DateTime.local().plus({days: dayOffset})
  }

  const getDatesArray = () => {
    let days = [DateTime.local().toISODate()];

    for (let j = 0; j < 7; j++) {
      days.push(DateTime.local().minus({days: j + 1 }).toISODate())
    }

    for (let i = 0; i < 5; i++) {
      days.push(DateTime.local().plus({days: i + 1 }).toISODate())
    }
    return days
  }

  const findDiet = () => {
    const dietSlug = pageContext.diet
    return diets.find(diet => diet.dietUrl === dietSlug)
  }

  const getMenusObject = () => {
    const dietId = findDiet() && findDiet().dietId
    const dates = getDatesArray()
    return {
      dietId,
      dates,
    }
  }

  const getParsedDay = () => {
    const date = getDateObject().setLocale('pl').toFormat("DDDD")
    // const spreadedDataLength = [...data].length
    // const data1 = date.splice(0, spreadedDataLength - 4)
    return date.charAt(0).toUpperCase() + date.slice(1, date.length - 4)
  }


  const getCitySlug = () => {
    return pageContext.city ? pageContext.city : "lodz"
  }

  const getDietData = () => {
    const citySlug = getCitySlug()
    const dietData = data.allContentfulDietData.edges.filter(node => node.node.city === citySlug)
    return dietData
  }

  const getLongDescription = () => {
    const longDescription = data.allContentfulLongDietDescription.edges

    if (getCitySlug() === 'lodz' && longDescription.length > 0) {
      return longDescription
    }

    return null
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

  const getCurrentMenu = () => {
    const day = getDay(dayOffset)
    if (!state[day]) {
      return []
    }
    return state[day].sort((prev, next) => prev.priority - next.priority)
  }

  const parseCurrentMenu = () => {
    const menus = getCurrentMenu()
    return menus && menus.reduce((acc, curr) => {
      if(curr.priority === 1) {
        acc['breakfast'] = curr.menuMealName
      }
      if(curr.priority === 2) {
        acc['secondBreakfast'] = curr.menuMealName
      }
      if(curr.priority === 3) {
        acc['dinner'] = curr.menuMealName
      }
      if(curr.priority === 4) {
        acc['tea'] = curr.menuMealName
      }
      if(curr.priority === 5) {
        acc['supper'] = curr.menuMealName
      }
      return acc
    }, {})
  }

  console.log('getLongDescription', getLongDescription())
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
        menu={getCurrentMenu().length > 1 ? parseCurrentMenu() : findDiet() && findDiet().menu}
        changeDayOffset={changeDayOffset}
        dayOffset={dayOffset}
        parsedDay={getParsedDay(dayOffset)}
        disableMenuDateChange={disableMenuDateChange}
        getDietData={getDietData}
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
      {getLongDescription() && <DietLongDescription longDescription={getLongDescription()[0].node}/>}
    </Layout>
  )
}

export default DietTemplate
