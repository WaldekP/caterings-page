import React, { useEffect, useReducer, useState } from "react"
import Layout from "../components/common/layout"

const SmallCityTemplate = ({ pageContext, data }) => {
  return (
    <Layout pageContext={pageContext}>
      {/*<SEO*/}
      {/*  title={`${findDiet() &&*/}
      {/*  findDiet().fullName} - catering dietetyczny ${findCity()}`}*/}
      {/*  description={`${findDiet() &&*/}
      {/*  findDiet().fullName} - ${findCity()}. ${findDiet() && findDiet().metaDescription}`}*/}
      {/*  indexing={checkIfIndexingShouldBeOn()}*/}
      {/*/>*/}
      <h2>{pageContext.smallCity.fullName}</h2>
      <h2>{pageContext.city}</h2>
    </Layout>
  )
}

export default SmallCityTemplate
