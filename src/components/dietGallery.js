import React from "react"
import dietGalleryStyles from "../styles/dietGallery.module.scss"
import firstImage from "../images/diets/dietsGalleries/weightLoss/3.jpg"
import secondImage from "../images/diets/dietsGalleries/weightLoss/5.jpg"
import thirdImage from "../images/diets/dietsGalleries/weightLoss/9.jpg"

const DietGallery = ({getDietAltTag}) => {
  return (
    <div>
      <h2>Przykładowe potrawy</h2>
      <div className={dietGalleryStyles.container}>
        <div className={dietGalleryStyles.wrapper}>
          <img src={firstImage} alt={getDietAltTag().firstAlt}/>
          <img src={secondImage} alt={getDietAltTag().secondAlt}/>
          <img src={thirdImage} alt={getDietAltTag().thirdAlt}/>
        </div>
      </div>
    </div>
  )
}

export default DietGallery
