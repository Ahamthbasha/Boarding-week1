import React from 'react'
import { createContext } from 'react'
import { useState } from 'react'

// eslint-disable-next-line react-refresh/only-export-components
export const ContextCreate = createContext()

const ContextCreation = ({children}) => {
    const [toggle,setToggle] = useState(false)

    const changeToggle = ()=>{
        setToggle((toggle)=>!toggle)
    }

  return (
    <ContextCreate.Provider value={{toggle,changeToggle}}>
      {children}
    </ContextCreate.Provider>
  )
}

export default ContextCreation
