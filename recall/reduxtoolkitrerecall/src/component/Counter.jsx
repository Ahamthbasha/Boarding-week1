import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { decrement, increment, reset } from '../redux/slices/countSlice'

const Counter = () => {
    const {count} = useSelector((state)=>state.count)

    const dispatch = useDispatch()

    const increase = ()=>{
        dispatch(increment())
    }

    const decrease = ()=>{
        dispatch(decrement())
    }

    const resetValue = ()=>{
        dispatch(reset())
    }

  return (
    <div>
    <h1>Count is : {count}</h1>
    <button onClick={increase}>Increment</button>
    <button onClick={decrease}>Decrement</button>
    <button onClick={resetValue}>Reset</button>  
    </div>
  )
}

export default Counter
