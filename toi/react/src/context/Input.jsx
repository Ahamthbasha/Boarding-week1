import React from 'react'
import { useContext } from 'react'
import { ContextCreate } from './ContextCreation'

const Input = () => {
    const {toggle} = useContext(ContextCreate)
  return (
    <div>
      <input type='checkbox' checked={toggle}/>
    </div>
  )
}

export default Input
