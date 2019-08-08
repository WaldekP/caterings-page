import React from "react"
import valuePropositionStyles from "../styles/valueProposition.module.scss"
import firstValueProposition from "../images/valueProposition/img_elastycznosc.svg"
import secondValueProposition from "../images/valueProposition/img_roznorodnosc.svg"
import thirdValueProposition from "../images/valueProposition/img_jakosc.svg"
import { valuePropositionData } from "../data/mainPage/valueProposition"


const ValueProposition = React.forwardRef((props, ref) => {


  const handleValuePropositionTexts = () => {
    const { pageContext } = props;
    const city = pageContext && pageContext.city
    if (!city || !valuePropositionData[city]) {
      return valuePropositionData.lodz
    }
    return valuePropositionData[city]
  }
  return (
    <div ref={ref}>
      <h2 className={valuePropositionStyles.title}>
        Catering dietetyczny Afterfit - co nas wyróżnia
      </h2>
      <div className={valuePropositionStyles.container}>
        <div className={valuePropositionStyles.item}>
          <img src={firstValueProposition} />
          <h2>ELASTYCZNOŚĆ</h2>
          <p>{handleValuePropositionTexts().elasticity}</p>
        </div>
        <div className={valuePropositionStyles.item}>
        <img src={secondValueProposition} />
          <h2>RÓŻNORODNOŚĆ</h2>
          <p>{handleValuePropositionTexts().variety}</p>
        </div>
        <div className={valuePropositionStyles.item}>
        <img src={thirdValueProposition} />
          <h2>JAKOŚĆ</h2>
          <p>{handleValuePropositionTexts().quality}</p>
        </div>
      </div>
    </div>
  )
})

export default ValueProposition
