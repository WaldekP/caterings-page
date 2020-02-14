import React, { Fragment } from "react"
import callToActionStyles from '../../styles/callToAction.module.scss'
import firstPattern from '../../images/patterns/img_zacznij-jesc-zdrowo-1.svg'
import secondPattern from '../../images/patterns/img_zacznij-jesc-zdrowo-2.svg'
import { Link } from "gatsby"

const CallToAction = ({cta}) => {
  const renderCtaMessage = () => {
    if (cta === 'catering') {
      return 'Zamów catering dietetyczny dopasowany do Ciebie'
    }
    if (cta === 'diet') {
      return 'Zamów dietę pudełkową dopasowaną do Ciebie'
    }
  }
  return (
    <Fragment>
      <div className={callToActionStyles.container}>
        <img className={callToActionStyles.firstPattern} src={firstPattern} />
        <img className={callToActionStyles.secondPattern} src={secondPattern} />
        <div className={callToActionStyles.textsContainer}>
          <h2>{renderCtaMessage()}</h2>
          <a
            href="https://afterfit-catering.pl/zamowienie"
            target="_blank"
            rel="noopener"
          >
            <button>Zamów dietę</button>
          </a>
          <p>Zobacz wymarzone efekty w krótkim czasie </p>
        </div>
      </div>
    </Fragment>
  )
}

export default CallToAction
