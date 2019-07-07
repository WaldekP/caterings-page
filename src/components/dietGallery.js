import React from "react"
import dietGalleryStyles from '../styles/dietGallery.module.scss'
import firstDeitImage from '../images/diets/dieta-na-mase.jpg'

const DietGallery = () => {
  return (
    <div>
      <h2>Przykładowe potrawy</h2>
      <div className={dietGalleryStyles.container}>
        <div className={dietGalleryStyles.wrapper}>
        <img src={firstDeitImage} />
        <img src={firstDeitImage} />
        <img src={firstDeitImage} />
        </div>
      </div>
    </div>
  )
}

export default DietGallery
