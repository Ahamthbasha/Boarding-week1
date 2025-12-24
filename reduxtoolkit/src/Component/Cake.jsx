import React from 'react'
import {useSelector,useDispatch} from 'react-redux'
import { buyCake } from '../redux/slice/cakeSlice'

const Cake = () => {
    const {noOfCakes} = useSelector((state)=>state.cake)
    const dispatch = useDispatch()

  return (
    <div>
    <h1>no Of Cakes : {noOfCakes}</h1> 
    <button onClick={()=>dispatch(buyCake())}>Buy Cake</button> 
    </div>
  )
}

export default Cake
