import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { BUY_CAKE } from '../store/actions/cakeAction'

const Cake = () => {
    const {noOfCakes} = useSelector((state)=>state.cake)
    const dispatch = useDispatch()

    const buyCake = ()=>{
        dispatch({type:BUY_CAKE})
    }
    
  return (
    <div>
      <h1>CakeShop</h1>
      <h2>No of cakes:{noOfCakes}</h2>
      <button onClick={buyCake}>BuyCake</button>
    </div>
  )
}

export default Cake
