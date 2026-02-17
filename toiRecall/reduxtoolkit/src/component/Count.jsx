import React from 'react'
import {useSelector,useDispatch} from 'react-redux'
import { changeDirection, decrease, increase } from '../redux/slice/autoIncOrDecSlice'

const Count = () => {
    const {counter,direction} = useSelector((state)=>state.incDec)
    console.log(counter,direction)
    const dispatch = useDispatch()

    const autoIncOrDec = ()=>{
        if(counter == 0){
            dispatch(increase())
            dispatch(changeDirection("UP"))
        }
        else if(counter == 10){
            dispatch(decrease())
            dispatch(changeDirection("DOWN"))
        }
        else{
            if(direction == "DOWN"){
                dispatch(decrease())
            }else{
                dispatch(increase())
            }
        }
    }
  return (
    <div>
      <h1>Count:{counter}</h1>
      <button onClick={autoIncOrDec}>IncOrDec</button>
    </div>
  )
}

export default Count
