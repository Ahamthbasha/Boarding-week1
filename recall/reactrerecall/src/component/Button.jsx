import React, { useContext } from 'react'
import { toggleContext } from './Context'

const Button = () => {
    const {changeToggle} = useContext(toggleContext)
  return (
    <div>
      <button onClick={changeToggle}>change</button>
    </div>
  )
}

export default Button
