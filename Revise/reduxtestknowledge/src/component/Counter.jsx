import React from 'react'
import {useSelector,useDispatch} from 'react-redux'
import { changeDirection, decrement, increment } from '../redux/action/counterAction'
const Counter = () => {
    const {counter,direction:dir} = useSelector((state)=>state.counter)

    const dispatch = useDispatch()

    const autoIncOrDec = ()=>{
        if(counter == 0){
            dispatch(changeDirection("UP"))
            dispatch(increment())
        }
        else if(counter == 10){
            dispatch(changeDirection("DOWN"))
            dispatch(decrement())
        }
        else{
            dir == "UP" ? dispatch(increment()) : dispatch(decrement())
        }
    }
  return (
    <div>
      <h1>counter</h1>
      <h2>count :{counter} direction :{dir}</h2>
      <button onClick={autoIncOrDec}>Auto Incre Or Decre</button>
    </div>
  )
}

export default Counter
