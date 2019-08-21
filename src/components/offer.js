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
import { dietsDescription } from "../data/mainPage/dietsDescriptions"

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
      <h2>Oferta naszej diety pudełkowej - wybierz jedną z 8 diet z dowozem</h2>
      <div className={offerStyles.container} ref={ref}>
        {diets.map(diet => (
          <Link to={pageContext.city ? `/${pageContext.city}/${diet.dietUrl}` : `/${diet.dietUrl}`} key={diet.dietUrl}>
            <div className={offerStyles.dietItem} key={diet.dietUrl}>
              <img src={findDiet(diet.dietUrl)} alt={`Catering dietetyczny ${pageContext.city ? pageContext.city : 'lodz'} - ${diet.fullName}`}/>
              <h2 className={offerStyles.dietTitle}>{diet.fullName}</h2>
              <p>{diet.offerDescription}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
})

export default Offer
