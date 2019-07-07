import React from "react"
import dietDescriptionStyles from '../styles/dietDescription.module.scss'

const DietDescription = ({ diet, city, dietDescription }) => {
  return (
    <div>
      <h1>{diet} {city ? city : "Łódź"} - dla kogo?</h1>
      <div className={dietDescriptionStyles.container}>
        <div className={dietDescriptionStyles.descriptionContainer}><p>{dietDescription}</p></div>
        <div className={dietDescriptionStyles.menuContainer}>
          <p>Przykładowe menu</p>
          <div>
            <p className={dietDescriptionStyles.mealName}>Śniadanie</p>
            <p>Owsianska na mleczku migdałowym z brzoskwiniami i miodem</p>
          </div>
          <div>
            <p className={dietDescriptionStyles.mealName}>II Śniadanie</p>
            <p>Babeczki szpinakowe z serem gorgonzola</p>
          </div>
          <div>
            <p className={dietDescriptionStyles.mealName}>Śniadanie</p>
            <p>Pstrąg w pikantnym sosie z mango podany z ryżem brązowym</p>
          </div>
          <div>
            <p className={dietDescriptionStyles.mealName}>Śniadanie</p>
            <p>Ciasto śliwkowe pod kruszonką</p>
          </div>
          <div>
            <p className={dietDescriptionStyles.mealName}>Śniadanie</p>
            <p>Węgierski gulasz z kluseczkami pół-francuskimi</p>
          </div>
        </div>
      </div>

    </div>
  )
}
export default DietDescription
