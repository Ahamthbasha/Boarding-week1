import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { buyCake } from '../redux/actions/cakeAction'

const Cake = () => {
    const {noOfCakes} = useSelector((state)=>state.cake)
    const dispatch = useDispatch()

    const buyCakes = ()=>{
        dispatch(buyCake())
    }
  return (
    <div>
      <h1>Cake shop</h1>
      <h2>no Of cakes : {noOfCakes}</h2>
      <button onClick={buyCakes}>Buy Cake</button>
    </div>
  )
}

export default Cake
