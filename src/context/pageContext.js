import React, { useState } from 'react'

const PageContext = React.createContext({})

const PageProvider = ({children}) => {
  const [menuTab, changeMenuTab] = useState()
  const [calories, changeCalories] = useState()
  return (
    <PageContext.Provider
      value={{menuTab, changeMenuTab, calories, changeCalories}}
      >
      {children}
    </PageContext.Provider>
  )
}

export default PageContext

export { PageProvider }
