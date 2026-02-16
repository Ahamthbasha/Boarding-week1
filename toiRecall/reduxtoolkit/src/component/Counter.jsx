import React from 'react'
import {useSelector,useDispatch} from 'react-redux'
import { decrement, increment, reset } from '../redux/slice/countSlice'

const Counter = () => {
    const {count} = useSelector((store)=>store.count)
    const disptach = useDispatch()

    const increase = ()=>{
        disptach(increment())
    }

    const decrease = ()=>{
        disptach(decrement())
    }

    const setToZero = ()=>{
        disptach(reset())
    }

  return (
    <div>
        <h1>Count : {count}</h1>
        <button onClick={increase}>Increment</button> 
        <button onClick={decrease}>Decrement</button>
        <button onClick={setToZero}>Reset</button> 
    </div>
  )
}

export default Counter
