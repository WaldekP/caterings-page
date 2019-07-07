import React from "react"
import { Link } from "gatsby"
import offerStyles from "../styles/offer.module.scss"
import { diets } from "../data/diets"
import slimDiet from "../images/diets/dieta-odchudzajaca.jpg"
import paleoDiet from "../images/diets/dieta-paleo.jpg"
import standardDiet from "../images/diets/dieta-standard.jpg"
import samurajDiet from "../images/diets/dieta-samuraja.jpg"
import vegeDiet from "../images/diets/dieta-wegetarianska.jpg"
import vegaDiet from "../images/diets/dieta-weganska.jpg"
import reductionDiet from "../images/diets/dieta-na-redukcje.jpg"
import massDiet from "../images/diets/dieta-na-mase.jpg"

const Offer = React.forwardRef(({ pageContext }, ref) => {
  const findDiet = diet => {
    if (diet === 'dieta-samuraja') {
      return samurajDiet
    }
    if (diet === 'dieta-odchudzajaca') {
      return slimDiet
    }
    if (diet === 'dieta-paleo') {
      return paleoDiet
    }
    if (diet === 'dieta-sportowa-na-mase') {
      return massDiet
    }
    if (diet === 'dieta-sportowa-na-redukcje') {
      return reductionDiet
    }
    if (diet === 'dieta-weganska') {
      return vegaDiet
    }
    if (diet === 'dieta-wegetarianska') {
      return vegeDiet
    }
    if (diet === 'dieta-standard') {
      return standardDiet
    }
  }
  return (
    <div>
      <h2>Oferta naszej diety pudełkowej - wybierz jedną z 8 diet z dowozem</h2>
      <div className={offerStyles.container} ref={ref}>
        {diets.map(diet => (
          <Link to={pageContext.city ? `/${pageContext.city}/${diet.dietUrl}` : `/${diet.dietUrl}`}>
            <div key={diet.dietUrl} className={offerStyles.dietItem}>
              <img src={findDiet(diet.dietUrl)} />
              <p>{diet.fullName}</p>
              <p>Opis diety paleo jaka jest. Opis diety paleo jaka jest.</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
})

export default Offer
