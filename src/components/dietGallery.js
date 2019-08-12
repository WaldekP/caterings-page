import React from "react"
import dietGalleryStyles from "../styles/dietGallery.module.scss"

const DietGallery = ({getDietAltTag, dietGallery}) => {

  return (
    <div>
      <h2>Przykładowe potrawy</h2>
      <div className={dietGalleryStyles.container}>
        <div className={dietGalleryStyles.wrapper}>
          <img src={dietGallery[1]} alt={getDietAltTag().firstAlt}/>
          <img src={dietGallery[2]} alt={getDietAltTag().secondAlt}/>
          <img src={dietGallery[3]} alt={getDietAltTag().thirdAlt}/>
        </div>
      </div>
    </div>
  )
}

export default DietGallery
