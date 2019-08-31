import React from "react"
import heroStyles from "../styles/dietHero.module.scss"
import bac from "../images/diets/dietPageMainImages/Dieta odchudzająca catering dietetyczny AfterFit catering.jpg"

const DietHero = ({diet}) => {
  const getDietClass = () => {
    if (diet === 'dieta-odchudzajaca') {
      return heroStyles.dietWeightLoss
    }
    if (diet === 'dieta-paleo') {
      return heroStyles.dietPaleo
    }
    if (diet === 'dieta-sportowa-na-redukcje') {
      return heroStyles.dietSportReduction
    }
    if (diet === 'dieta-sportowa-na-mase') {
      return heroStyles.dietSportMass
    }
    if (diet === 'dieta-standard') {
      return heroStyles.dietStandard
    }
    if (diet === 'dieta-weganska') {
      return heroStyles.dietVegan
    }
    if (diet === 'dieta-wegetarianska') {
      return heroStyles.dietVege
    }
    if (diet === 'dieta-samuraja') {
      return heroStyles.dietSamurai
    }
    // if (diet === 'dieta-bezglutenowa') {
    //   return heroStyles.dietGlutenFree
    // }
    // if (diet === 'dieta-wege-fish') {
    //   return heroStyles.dietWegeFish
    // }
    // if (diet === 'dieta-bezlaktozy') {
    //   return heroStyles.dietNoLactose
    // }
    // if (diet === 'dieta-detox') {
    //   return heroStyles.dietDetox
    // }
    return heroStyles.dietWeightLoss
  }


  return (
      <div className={`${heroStyles.container} ${getDietClass()}`} />
  )
}

export default DietHero
