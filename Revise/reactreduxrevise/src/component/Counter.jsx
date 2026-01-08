import React from 'react'
import { useSelector,useDispatch } from 'react-redux'
import { changeDirection, decrement, increment } from '../redux/action/counterAction'

const Counter = () => {
    const {count,direction} = useSelector((state)=>state.counter)

    const dispatch = useDispatch()

    const autoIncDec = ()=>{
        if(count == 0){
            dispatch(increment())
            dispatch(changeDirection("UP"))
        }
        else if(count == 10){
            dispatch(decrement())
            dispatch(changeDirection("DOWN"))
        }
        else{
            direction == "UP" ? dispatch(increment()) : dispatch(decrement())
        }
    }

  return (
    <div>
      <h1>Counter</h1>
      <h2>count:{count}</h2>
      <button onClick={autoIncDec}>incre or decre</button>
    </div>
  )
}

export default Counter
