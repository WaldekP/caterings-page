import React, { useState } from 'react'

const MenuContext = React.createContext({})

const MenuProvider = ({children}) => {
  const [menuTab, changeMenuTab] = useState({menuTab: 'blabla'})
  return (
    <MenuContext.Provider
      value={{menuTab, changeMenuTab}}
      >
      {children}
    </MenuContext.Provider>
  )
}

export default MenuContext

export { MenuProvider }
