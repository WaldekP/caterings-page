import React, { useContext } from "react"
import PageContext from "../context/pageContext"
import Pricing from "./pricing"

const DietPricing = (props) => {
  const { calories } = useContext(PageContext)

  return <Pricing {...props}/>
}

export default DietPricing
