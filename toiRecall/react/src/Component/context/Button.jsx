import React, { useContext } from 'react'
import { InputToggleContext } from './ContextCreator'

const Button = () => {
    const {toggleChange} = useContext(InputToggleContext)
  return (
    <div>
      <button onClick={toggleChange}>Click</button>
    </div>
  )
}

export default Button
