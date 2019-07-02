import React from "react"
import valuePropositionStyles from "../styles/valueProposition.module.scss"
import firstValueProposition from "../images/valueProposition/img_elastycznosc.svg"
import secondValueProposition from "../images/valueProposition/img_roznorodnosc.svg"
import thirdValueProposition from "../images/valueProposition/img_jakosc.svg"

const ValueProposition = React.forwardRef((props, ref) => {
  return (
    <div ref={ref}>
      <h2 className={valuePropositionStyles.title}>
        Catering dietetyczny Afterfit - co nas wyróżnia
      </h2>
      <div className={valuePropositionStyles.container}>
        <div className={valuePropositionStyles.item}>
          <img src={firstValueProposition} />
          <h2>ELASTYCZNOŚC</h2>
          <p>Lorem ipsume lorem ipsum lorem ipsum lorem ipsum lorem ipsum Lorem ipsume lorem ipsum lorem ipsum lorem ipsum lorem ipsum Lorem ipsume lorem ipsum lorem ipsum lorem ipsum lorem ipsum</p>
        </div>
        <div className={valuePropositionStyles.item}>
        <img src={secondValueProposition} />
          <h2>RÓŻNORODNOŚC</h2>
          <p>Lorem ipsume lorem ipsum lorem ipsum lorem ipsum lorem ipsum</p>
        </div>
        <div className={valuePropositionStyles.item}>
        <img src={thirdValueProposition} />
          <h2>JAKOŚC</h2>
          <p>Lorem ipsume lorem ipsum lorem ipsum lorem ipsum lorem ipsum</p>
        </div>
      </div>
    </div>
  )
})

export default ValueProposition
