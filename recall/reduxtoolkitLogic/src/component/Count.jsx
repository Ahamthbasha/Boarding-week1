import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { changeDirection, decrement, increment } from '../redux/slice/countSlice'

const Count = () => {
    const {count,dir} = useSelector((state)=>state.count)

    const dispatch = useDispatch()

    const autoIncDec = ()=>{
        if(count == 0){
            dispatch(increment())
            dispatch(changeDirection("UP"))
        }
        else if (count == 10){
            dispatch(decrement())
            dispatch(changeDirection("DOWN"))
        }
        else{
            dir == 'UP' ? dispatch(increment()) : dispatch(decrement())
        }
    }
  return (
    <div>
    <h1>Count : {count}</h1>
    <button onClick={autoIncDec}>AutoIncreDecre</button>  
    </div>
  )
}

export default Count
