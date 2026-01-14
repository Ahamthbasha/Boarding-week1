import React from 'react'
import {useSelector,useDispatch} from 'react-redux'
import { changeDirection, decrement, increment } from '../redux/actions/countActions'

const Counter = () => {
    const {count,direction} = useSelector((state)=>state.count)

    const dispatch = useDispatch()

    const autoIncreDecre = ()=>{
        if(count == 0){
            dispatch(changeDirection("UP"))
            dispatch(increment())
        }
        else if(count == 10){
            dispatch(changeDirection("DOWN"))
            dispatch(decrement())
        }
        else{
            direction == "UP" ? dispatch(increment()) : dispatch(decrement())
        }
    }

  return (
    <div>
      <h1>Counter</h1>
      <h1>count:{count} and direction:{direction}</h1>
      <button onClick={autoIncreDecre}>AutoIncreDecre</button>
    </div>
  )
}

export default Counter
