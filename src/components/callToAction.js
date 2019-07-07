import React, { Fragment } from "react"
import callToActionStyles from '../styles/callToAction.module.scss'
import commonStyles from '../styles/common.module.scss'
import firstPattern from '../images/patterns/img_zacznij-jesc-zdrowo-1.svg'
import secondPattern from '../images/patterns/img_zacznij-jesc-zdrowo-2.svg'

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
        <h2>{renderCtaMessage()}</h2>
        <button className={commonStyles.button}>Zamów dietę</button>
        <p>Zobacz wymarzone efekty w krótkim czasie </p>
      </div>
    </Fragment>
  )
}

export default CallToAction
