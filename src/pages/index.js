import React from "react"

import MainPage from "../templates/mainPage"
import { graphql, useStaticQuery } from "gatsby"

const IndexPage = ({ pageContext }) => {
  const data = useStaticQuery(graphql`
    query MyFaqLodzQuery {
      allContentfulFaqLodz {
        edges {
          node {
            slug
            question
            category
              order
            childContentfulFaqLodzAnswerRichTextNode {
              json
            }
          }
        }
      }
    }
  `)
  return <MainPage pageContext={pageContext} faqLodzData={data} />
}

export default IndexPage
