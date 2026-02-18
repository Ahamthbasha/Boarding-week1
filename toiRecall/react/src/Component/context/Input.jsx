import React, { useContext } from 'react'
import { InputToggleContext } from './ContextCreator'

const Input = () => {
    const {toggle} = useContext(InputToggleContext)
  return (
    <div>
      <input type="checkbox" checked={toggle} />
    </div>
  )
}

export default Input
