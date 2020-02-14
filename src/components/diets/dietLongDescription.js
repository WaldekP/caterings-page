import React from "react"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"
import longDescriptionStyles from '../../styles/longDescription.module.scss'

const DietLongDescription = ({longDescription}) => {
  return (
    <div className={longDescriptionStyles.container}>
      <div>
      {documentToReactComponents(longDescription.childContentfulLongDietDescriptionContentRichTextNode.json)}
      </div>
    </div>
  )
}
export default DietLongDescription
