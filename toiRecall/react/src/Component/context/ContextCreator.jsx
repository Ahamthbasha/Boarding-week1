import React, { createContext, useState } from 'react'

// eslint-disable-next-line react-refresh/only-export-components
export const InputToggleContext = createContext()

const ContextCreator = ({children}) => {
    const [toggle,setToggle] = useState(false)

    const toggleChange = ()=>{
        setToggle((toggle)=>!toggle)
    }

  return (
    <InputToggleContext.Provider value={{toggle,toggleChange}}>
      {children}
    </InputToggleContext.Provider>
  )
}

export default ContextCreator
