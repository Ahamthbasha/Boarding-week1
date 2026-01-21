import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { changeDirection, decrement, increment } from '../redux/action/countAction'

const Count = () => {
  const {noOfCount,direction} = useSelector((state)=>state.count)
  const dispatch = useDispatch()
  const autoIncreOrDec = ()=>{
    if(noOfCount == 10){
      dispatch(changeDirection("DOWN"))
      dispatch(decrement())
    }
    else if(noOfCount == 0){
      dispatch(changeDirection("UP"))
      dispatch(increment())
    }
    else{
      direction == 'UP' ? dispatch(increment()) : dispatch(decrement())
    }
  }
  return (
    <div>
      <h1>Counter</h1>
      <h2>no Of count:{noOfCount} direction : {direction}</h2>
      <button onClick={autoIncreOrDec}>autoIncreOrDec</button>
    </div>
  )
}

export default Count
