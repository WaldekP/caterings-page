import React from "react"
import dietDescriptionStyles from "../styles/dietDescription.module.scss"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faAngleLeft, faAngleRight } from "@fortawesome/free-solid-svg-icons"

const DietDescription = ({
  diet,
  city,
  dietDescription,
  menu,
  changeDayOffset,
  dayOffset,
  parsedDay,
  disableMenuDateChange,
}) => {
  return (
    <div>
      <h1 className={dietDescriptionStyles.title}>
        {" "}
        {diet} - {city}
      </h1>
      <div className={dietDescriptionStyles.container}>
        <div className={dietDescriptionStyles.descriptionContainer}>
          {dietDescription &&
            dietDescription.length > 0 &&
            dietDescription.map((description, i) => (
              <p key={i}>{description}</p>
            ))}
        </div>
        <div className={dietDescriptionStyles.menuContainer}>
          <div className={dietDescriptionStyles.menuDate}>
            <span
              style={disableMenuDateChange('down') ?  {
              color: 'grey'
            } : null} onClick={() => !disableMenuDateChange('down') && changeDayOffset(dayOffset - 1)}>
              <FontAwesomeIcon icon={faAngleLeft} />
            </span>
            <p>{parsedDay}</p>
            <span
              style={disableMenuDateChange('up') ?  {
                color: 'grey'
              } : null}
              onClick={() => !disableMenuDateChange('up') && changeDayOffset(dayOffset + 1)}>
              <FontAwesomeIcon icon={faAngleRight} />
            </span>
          </div>
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
