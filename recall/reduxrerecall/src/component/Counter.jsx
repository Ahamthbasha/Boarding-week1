import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { decrement, increment, resetValue } from '../redux/action/counterAction'

const Counter = () => {
    const {count} = useSelector((state)=>state.count)

    const dispatch = useDispatch()

    const increase = ()=>{
        dispatch(increment())
    }

    const decrease = ()=>{
        dispatch(decrement())
    }

    const reset = () => {
        dispatch(resetValue())
    }

  return (
    <div>
        <h1>Count is :{count}</h1>
        <button onClick={increase}>Increase</button>
        <button onClick={decrease}>Decrease</button>
        <button onClick={reset}>Reset</button>  
    </div>
  )
}

export default Counter
