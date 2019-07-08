import React, { useContext, useEffect, useState } from "react"
import heroStyles from "../styles/hero.module.scss"

const Hero = () => {
  const [yPosition, changePosition] = useState(
    typeof window !== "undefined" && window.scrollY
  )

  const handleScroll = () => {
    if (typeof window !== "undefined") {
      return changePosition(window.scrollY)
    }
  }

  useEffect(() => {
    if (typeof window !== "undefined") {
      window.addEventListener("scroll", handleScroll)
    }
  }, [])

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
