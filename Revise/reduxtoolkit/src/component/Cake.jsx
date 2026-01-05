import React from 'react'
import {useSelector,useDispatch} from 'react-redux'
import { buyCake } from '../redux/slice/cakeSlice'

const Cake = () => {
    const {noOfCakes} = useSelector((state)=>state.cake)
    const dispatch = useDispatch()
  
    return (
    <div>
      <h1> cake shop </h1>
      <p>no Of Cake : {noOfCakes}</p>
      <button onClick={()=>dispatch(buyCake())}>BuyCake</button>
    </div>
  )
}

export default Cake
