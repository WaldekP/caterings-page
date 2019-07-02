/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/browser-apis/
 */

// You can delete this file if you're not using it
import React from "react"
import { MenuProvider } from "./src/context/menuContext"

export const wrapRootElement = ({ element }) => (
  <MenuProvider>{element}</MenuProvider>
)
