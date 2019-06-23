import React from 'react';
import { Link } from "gatsby";
import dietsImage from '../images/diets/małe (1).jpg'
import dietsImage2 from '../images/diets/małe (2).jpg'
import dietsImage3 from '../images/diets/małe (3).jpg'
import dietsImage4 from '../images/diets/małe (4).jpg'
import offerStyles from '../styles/offer.module.scss'

const Offer = ({ pageContext }) => (
  <div className={offerStyles.container}>
    {/*<Link to={`/${pageContext.slug ? pageContext.slug : ''}/dieta-paleo`}><img src={dietsImage}/></Link>*/}
    <img src={dietsImage2}/>
    <img src={dietsImage3}/>
    <img src={dietsImage4}/>
  </div>
)

export default Offer
