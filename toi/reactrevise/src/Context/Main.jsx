import React, { createContext, useState } from 'react'

// eslint-disable-next-line react-refresh/only-export-components
export const Context = createContext()

const Main = ({children}) => {
    const [toggle,setToggle] = useState(false)

    const changeToggle = ()=>{
        setToggle((toggle)=>!toggle)
    }
  return (
    <Context.Provider value={{toggle,changeToggle}}>
      {children}
    </Context.Provider>
  )
}

export default Main
