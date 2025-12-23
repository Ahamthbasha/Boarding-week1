import React, { useContext } from 'react'
import { toggleContext } from './ContextCreation'

const Button = () => {
    const {modifyToggle} = useContext(toggleContext)
  return (
    <div>
      <button onClick={modifyToggle}>Toggle</button>
    </div>
  )
}

export default Button
