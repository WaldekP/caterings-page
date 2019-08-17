import React from "react"
import heroStyles from "../styles/dietHero.module.scss"
import bac from "../images/diets/dietPageMainImages/Dieta odchudzająca catering dietetyczny AfterFit catering.jpg"

const DietHero = () => {
  return (
      <div className={`${heroStyles.container} ${heroStyles.dietWeightLoss}`} />
  )
}

export default DietHero
