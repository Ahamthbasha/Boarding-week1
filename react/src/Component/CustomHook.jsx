import React from 'react'
import useCount from '../customHook/useCount'

const CustomHook = () => {
    const {count,increment,decrement,reset} = useCount()
  return (
    <div>
      <h1>count no is :{count}</h1>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
      <button onClick={reset}>Reset</button>
    </div>
  )
}

export default CustomHook
