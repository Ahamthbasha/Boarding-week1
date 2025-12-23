import React, { createContext, useState } from 'react'

// eslint-disable-next-line react-refresh/only-export-components
export const toggleContext = createContext()

const ContextCreation = ({children}) => {
    const [toggle,setToggle] = useState(false)

    const modifyToggle = ()=>{
        setToggle((toggle)=>!toggle)
    }
    return (
    <toggleContext.Provider value={{toggle,modifyToggle}}>
      {children}
    </toggleContext.Provider>
  )
}

export default ContextCreation
