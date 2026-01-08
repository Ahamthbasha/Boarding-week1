import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { buyCake } from '../redux/slices/cakeSlice'

const CakeSComp = () => {
    const noOfCakes  = useSelector((state)=>state.cake.noOfCakes)

    const dispatch = useDispatch()
  return (
    <div>
      <h1>CakeShop</h1>
      <h2>Cake Count:{noOfCakes}</h2>
      <button onClick={()=>dispatch(buyCake())}>buy Cake</button>
    </div>
  )
}

export default CakeSComp
