import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { buyCake } from '../redux/Slice/cakeSlice'

const Cake = () => {
    const {noOfCake} = useSelector((state)=>state.cake)
    const dispatch = useDispatch()

    const buy = ()=>{
        dispatch(buyCake())
    }

  return (
    <div>
      <h1>Cake Shop</h1>
      <h2>No Of Cakes:{noOfCake}</h2>
      <button onClick={buy}>Buy Cake</button>
    </div>
  )
}

export default Cake
