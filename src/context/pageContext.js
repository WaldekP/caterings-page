import React, { useState } from 'react'

const PageContext = React.createContext({})

const PageProvider = ({children}) => {
  const [menuTab, changeMenuTab] = useState()
  const [calories, changeCalories] = useState()
  const [overlay, toggleOverlay] = useState(true)
  return (
    <PageContext.Provider
      value={{menuTab, changeMenuTab, calories, changeCalories, overlay, toggleOverlay}}
      >
      {children}
    </PageContext.Provider>
  )
}

export default PageContext

export { PageProvider }
