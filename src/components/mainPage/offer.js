import React from "react"
import { Link } from "gatsby"
import offerStyles from "../../styles/offer.module.scss"
import { diets } from "../../data/diets"
import slimDiet from "../../images/diets/dieta-odchudzajaca.jpg"
import paleoDiet from "../../images/diets/dieta-paleo.jpg"
import vegeWithFish from "../../images/diets/dieta-wege-z-rybami.jpg"
import samurajDiet from "../../images/diets/dieta-samuraja.jpg"
import vegeDiet from "../../images/diets/dieta-wegetarianska.jpg"
import vegaDiet from "../../images/diets/dieta-weganska.jpg"
import reductionDiet from "../../images/diets/dieta-na-redukcje.jpg"
import standardDiet from "../../images/diets/dieta-standard.jpg"
import glutennFreeDiet from "../../images/diets/dieta-bezglutenowa.jpg"
import detoxDiet from "../../images/diets/dieta-detox.jpg"
import lowIgDiet from "../../images/diets/Dieta-niski-indeks.jpg"
import lactoseFreeDiet from "../../images/diets/dieta-bezlaktozowa.jpg"
import ketoDiet from '../../images/diets/dieta-keto.jpg'
import dashDiet from '../../images/diets/dieta-dash.jpg'
import dietHome from '../../images/diets/dieta-domowa.jpg'

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
    if (diet === 'dieta-standard') {
      return standardDiet
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
    if (diet === 'dieta-wege-z-rybami') {
      return vegeWithFish
    }
    if (diet === 'dieta-bezlaktozowa') {
      return lactoseFreeDiet
    }
    if (diet === 'dieta-bezglutenowa') {
      return glutennFreeDiet
    }
    if (diet === 'dieta-niski-indeks') {
      return lowIgDiet
    }
    if (diet === 'dieta-detox') {
      return detoxDiet
    }
    if (diet === 'dieta-keto') {
      return ketoDiet
    }
    if (diet === 'dieta-dash') {
      return dashDiet
    }
    if (diet === 'dieta-domowa') {
      return dietHome
    }
  }

  return (
    <div>
      <h2>Oferta naszej diety pudełkowej - wybierz jedną z 12 diet z dowozem</h2>
      <div className={offerStyles.container} ref={ref}>
        {[...diets].sort((prev, next) => prev['fullName'].localeCompare(next['fullName'])).map(diet => (
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
