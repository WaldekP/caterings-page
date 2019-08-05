import React from "react"
import dietDescriptionStyles from '../styles/dietDescription.module.scss'

const DietDescription = ({ diet, city, dietDescription }) => {
  const findDescription = (diet) => {
    if (diet === 'dieta-samuraja') {
      return 'dietaSamuraja'
    }
    if (diet === 'dieta-odchudzajaca') {
      return 'dietaOdchudzajaca'
    }
    if (diet === 'dieta-paleo') {
      return 'dietaPaleo'
    }
    if (diet === 'dieta-sportowa-na-mase') {
      return 'dietaSportowaNaMase'
    }
    if (diet === 'dieta-sportowa-na-redukcje') {
      return 'dietaSportowaNaRedukcje'
    }
    if (diet === 'dieta-weganska') {
      return 'dietaWeganska'
    }
    if (diet === 'dieta-wegetarianska') {
      return 'dietaWegetarianska'
    }
    if (diet === 'dieta-standard') {
      return 'dietaStandard'
    }
  }
  return (
    <div>
      <h2>{diet} {city ? city : "Łódź"} - dla kogo?</h2>
      <div className={dietDescriptionStyles.container}>
        <div className={dietDescriptionStyles.descriptionContainer}>test</div>
        {/*<div className={dietDescriptionStyles.descriptionContainer}>{dietDescription.map((description, i) => <p key={i}>{description}</p>)}</div>*/}
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
