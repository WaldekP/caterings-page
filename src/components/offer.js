import React from "react"
import { Link } from "gatsby"
import dietsImage from "../images/diets/małe (1).jpg"
import dietsImage2 from "../images/diets/małe (2).jpg"
import dietsImage3 from "../images/diets/małe (3).jpg"
import dietsImage4 from "../images/diets/małe (4).jpg"
import offerStyles from "../styles/offer.module.scss"

const Offer = React.forwardRef(({ pageContext }, ref) => (
  <div>
    <h2>Oferta naszej diety pudełkowej - wybierz jedną z 8 diet z dowozem</h2>
    <div className={offerStyles.container} ref={ref}>
      {/*<Link to={`/${pageContext.slug ? pageContext.slug : ''}/dieta-paleo`}><img src={dietsImage}/></Link>*/}
      <div className={offerStyles.item1}>
        <div className={offerStyles.dietItem}>
          <img src={dietsImage2} />
          <h2>Dieta Paleo</h2>
          <p>Opis diety paleo jaka jest. Opis diety paleo jaka jest.</p>
        </div>
      </div>
      <div className={offerStyles.item2}>
        <div className={offerStyles.dietItem}>
          <img src={dietsImage2} />
          <h2>Dieta Paleo</h2>
          <p>Opis diety paleo jaka jest. Opis diety paleo jaka jest.</p>
        </div>
      </div>
      <div className={offerStyles.item3}>
        <div className={offerStyles.dietItem}>
          <img src={dietsImage2} />
          <h2>Dieta Paleo</h2>
          <p>Opis diety paleo jaka jest. Opis diety paleo jaka jest.</p>
        </div>
      </div>
      <div className={offerStyles.item4}>
        <div className={offerStyles.dietItem}>
          <img src={dietsImage2} />
          <h2>Dieta Paleo</h2>
          <p>Opis diety paleo jaka jest. Opis diety paleo jaka jest.</p>
        </div>
      </div>
      <div className={offerStyles.item5}>
        <div className={offerStyles.dietItem}>
          <img src={dietsImage2} />
          <h2>Dieta Paleo</h2>
          <p>Opis diety paleo jaka jest. Opis diety paleo jaka jest.</p>
        </div>
      </div>
      <div className={offerStyles.item6}>
        <div className={offerStyles.dietItem}>
          <img src={dietsImage2} />
          <h2>Dieta Paleo</h2>
          <p>Opis diety paleo jaka jest. Opis diety paleo jaka jest.</p>
        </div>
      </div>
      <div className={offerStyles.item7}>
        <div className={offerStyles.dietItem}>
          <img src={dietsImage2} />
          <h2>Dieta Paleo</h2>
          <p>Opis diety paleo jaka jest. Opis diety paleo jaka jest.</p>
        </div>
      </div>
      <div className={offerStyles.item8}>
        <div className={offerStyles.dietItem}>
          <img src={dietsImage2} />
          <h2>Dieta Paleo</h2>
          <p>Opis diety paleo jaka jest. Opis diety paleo jaka jest.</p>
        </div>
      </div>
    </div>
  </div>
))

export default Offer
