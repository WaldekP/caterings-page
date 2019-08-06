import React from "react"
import dietDescriptionStyles from '../styles/dietDescription.module.scss'

const DietDescription = ({ diet, city, dietDescription, menu }) => {

  return (
    <div>
      <h2>{diet} - {city ? city : "Łódź"}</h2>
      <div className={dietDescriptionStyles.container}>
        <div className={dietDescriptionStyles.descriptionContainer}>{dietDescription && dietDescription.length > 0 ? dietDescription.map((description, i) => <p key={i}>{description}</p>) : <p>Test</p> }</div>
        <div className={dietDescriptionStyles.menuContainer}>
          <p>Przykładowe menu</p>
          <div>
            <p className={dietDescriptionStyles.mealName}>Śniadanie</p>
            <p>{menu.breakfast}</p>
          </div>
          <div>
            <p className={dietDescriptionStyles.mealName}>II Śniadanie</p>
            <p>{menu.secondBreakfast}</p>
          </div>
          <div>
            <p className={dietDescriptionStyles.mealName}>Śniadanie</p>
            <p>{menu.dinner}</p>
          </div>
          <div>
            <p className={dietDescriptionStyles.mealName}>Śniadanie</p>
            <p>{menu.tea}</p>
          </div>
          <div>
            <p className={dietDescriptionStyles.mealName}>Śniadanie</p>
            <p>{menu.supper}</p>
\          </div>
        </div>
      </div>

    </div>
  )
}
export default DietDescription
