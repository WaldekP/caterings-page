import React from "react"
import dietDescriptionStyles from "../styles/dietDescription.module.scss"

const DietDescription = ({ diet, city, dietDescription, menu }) => {
  return (
    <div>
      <h1 className={dietDescriptionStyles.title}>
        {" "}
        {diet} - {city}
      </h1>
      <div className={dietDescriptionStyles.container}>
        <div className={dietDescriptionStyles.descriptionContainer}>
          {dietDescription && dietDescription.length > 0 ? (
            dietDescription.map((description, i) => (
              <p key={i}>{description}</p>
            ))
          ) : (
            <p>Test</p>
          )}
        </div>
        <div className={dietDescriptionStyles.menuContainer}>
          <p>Przykładowe menu</p>
          <div>
            <p className={dietDescriptionStyles.mealName}>Śniadanie</p>
            <p>{menu ? menu.breakfast : null}</p>
          </div>
          <div>
            <p className={dietDescriptionStyles.mealName}>II Śniadanie</p>
            <p>{menu ? menu.secondBreakfast : null}</p>
          </div>
          <div>
            <p className={dietDescriptionStyles.mealName}>Obiad</p>
            <p>{menu ? menu.dinner : null}</p>
          </div>
          <div>
            <p className={dietDescriptionStyles.mealName}>Podwieczorek</p>
            <p>{menu ? menu.tea : null}</p>
          </div>
          <div>
            <p className={dietDescriptionStyles.mealName}>Kolacja</p>
            <p>{menu ? menu.supper : null}</p>
          </div>
        </div>
      </div>
    </div>
  )
}
export default DietDescription
