import React, { useContext } from 'react'
import { contextCreation } from './MainContext'

const Input = () => {
    const {toggle} = useContext(contextCreation)
  return (
    <div>
      <input type='checkbox' checked={toggle}/>
    </div>
  )
}

export default Input
