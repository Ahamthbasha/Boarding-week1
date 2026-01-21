import React from 'react'
import { useSelector,useDispatch } from 'react-redux'
import { buyCake } from '../redux/action/cakeAction'
const CakeShop = () => {
    const {noOfCakes} = useSelector((state)=>state.cake)

    const dispatch = useDispatch()

    const buy = ()=>{
        dispatch(buyCake())
    }
  return (
    <div>
      <h1>Cake Shop</h1>
      <h2>No Of Cakes :{noOfCakes}</h2>
      <button onClick={buy}>BuyCake</button>
    </div>
  )
}

export default CakeShop
