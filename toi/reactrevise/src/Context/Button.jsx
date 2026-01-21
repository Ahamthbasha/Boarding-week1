import React, { useContext } from 'react'
import { Context } from './Main'

const Button = () => {
    const {changeToggle} = useContext(Context)
  return (
    <div>
      <button onClick={changeToggle}>Change Toggle</button>
    </div>
  )
}

export default Button
