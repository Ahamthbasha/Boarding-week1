import React, { createContext, useState } from 'react'

// eslint-disable-next-line react-refresh/only-export-components
export const contextCreation = createContext(null)

const MainContext = ({children}) => {
const [toggle,setToggle] = useState(false)

const toggleChange = ()=>{
    setToggle((toggle)=>!toggle)
}

return (
    <contextCreation.Provider value={{toggle,toggleChange}}>
      {children}
    </contextCreation.Provider>
  )
}

export default MainContext
