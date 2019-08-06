import React from "react"
import dietGalleryStyles from "../styles/dietGallery.module.scss"
import firstDietImage from "../images/diets/dieta-na-mase.jpg"

const DietGallery = ({getDietAltTag}) => {
  return (
    <div>
      <h2>Przykładowe potrawy</h2>
      <div className={dietGalleryStyles.container}>
        <div className={dietGalleryStyles.wrapper}>
          <img src={firstDietImage} alt={getDietAltTag().firstAlt}/>
          <img src={firstDietImage} alt={getDietAltTag().secondAlt}/>
          <img src={firstDietImage} alt={getDietAltTag().thirdAlt}/>
        </div>
      </div>
    </div>
  )
}

export default DietGallery
