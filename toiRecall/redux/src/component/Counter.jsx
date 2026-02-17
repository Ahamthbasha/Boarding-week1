import React from 'react'
import {useSelector,useDispatch} from 'react-redux'
import { changeDirection, decrease, increase } from '../redux/actions/countAction'

const Counter = () => {
    const {count,direction} = useSelector((state)=>state.count)

    console.log(count,direction)
    const dispatch = useDispatch()

    const autoIncDec = ()=>{
        if(count == 0){
            dispatch(increase())
            dispatch(changeDirection("UP"))
        }
        else if(count == 10){
            dispatch(decrease())
            dispatch(changeDirection("DOWN"))
        }
        else{
            if(direction == "UP"){
                dispatch(increase())
            }
            else{
                dispatch(decrease())
            }
        }
    }
  return (
    <div>
      <h1>Count:{count}</h1>
      <button onClick={autoIncDec}>AutoIncOrDec</button>
    </div>
  )
}

export default Counter
