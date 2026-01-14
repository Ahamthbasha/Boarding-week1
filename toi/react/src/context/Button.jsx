import React from 'react'
import { useContext } from 'react'
import { ContextCreate } from './ContextCreation'

const Button = () => {
    const {changeToggle} = useContext(ContextCreate)
  return (
    <div>
      <button onClick={changeToggle}>Change toggle</button>
    </div>
  )
}

export default Button
