import React, { createContext, useState } from 'react'

// eslint-disable-next-line react-refresh/only-export-components
export const toggleContext = createContext()

const ToggleContext = ({children}) => {
    const [toggle,setToggle] = useState(false)

    const changeToggle = ()=>{
        setToggle((toggle)=>!toggle)
    }

  return (
    <toggleContext.Provider value={{toggle,changeToggle}}>
      {children}
    </toggleContext.Provider>
  )
}

export default ToggleContext
