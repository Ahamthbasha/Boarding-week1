import React from 'react'
import useCounter from '../hooks/useCounter'

const ComponentBasedOnHook = () => {
    const {count,increment,decrement,reset} = useCounter()
  return (
    <div>
      <h1>count:{count}</h1>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
      <button onClick={reset}>Reset</button>
    </div>
  )
}

export default ComponentBasedOnHook
