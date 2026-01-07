import React from 'react'
import { useSelector,useDispatch } from 'react-redux'
import { buyCake } from '../redux/action/cakeAction'
const Cake = () => {
    const {noOfCakes} = useSelector((state)=>state.cake)

    const dispatch = useDispatch()

    const buy = ()=>{
        dispatch(buyCake())
    }
  return (
    <div>
      <h1>cake shop</h1>
      <h2>noOfCakes : {noOfCakes}</h2>
      <button onClick={buy}>Buy Cake</button>
    </div>
  )
}

export default Cake
