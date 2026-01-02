import React, { useContext } from 'react'
import { contextCreation } from './MainContext'

const Button = () => {
    const {toggleChange} = useContext(contextCreation)
  return (
    <div>
      <button onClick={toggleChange}>Toggle</button>
    </div>
  )
}

export default Button
