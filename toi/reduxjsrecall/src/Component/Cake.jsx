import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { buyCake } from '../redux/slices/cakeSlice'

const Cake = () => {
    const {noOfCakes} = useSelector((state)=>state.cakeReducer)
    
    const dispatch = useDispatch()

    const buy = ()=>{
        dispatch(buyCake())
    }
  return (
    <div>
      <h1>Cake shop</h1>
      <h1>no Of Cakes:{noOfCakes}</h1>
      <button onClick={buy}>Buy Cake</button>
    </div>
  )
}

export default Cake
