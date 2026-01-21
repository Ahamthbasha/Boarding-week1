import React, { useContext } from 'react'
import { Context } from './Main'

const Input = () => {
    const {toggle} = useContext(Context)
  return (
    <div>
      <input type="checkbox" checked={toggle}/>
    </div>
  )
}

export default Input
