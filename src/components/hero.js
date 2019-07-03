import React from "react"
import heroStyles from "../styles/hero.module.scss"

const Hero = () => {
  return (
    <div className={heroStyles.container}>
      <div className={heroStyles.wrapper}>
        <div className={heroStyles.titleWrapper}>
          <h1>
            Catering dietetyczny <br />
            Afterfit
          </h1>
          <h3>Odkryj smak pasji i zaangażowania</h3>
          <button>Zamów dietę</button>
        </div>
      </div>
    </div>
  )
}

export default Hero
