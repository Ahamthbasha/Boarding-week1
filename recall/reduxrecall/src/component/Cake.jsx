import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { buyCake } from '../redux/actions/cakeActions'

const Cake = () => {
    const {noOfCakes} = useSelector((state)=>state.cake)
    const dispatch = useDispatch()

    const buy =()=>{
        dispatch(buyCake())
    }
  return (
    <div>
      <h1>Cake is : {noOfCakes}</h1>
      <button onClick={buy}>BuyCake</button>
    </div>
  )
}

export default Cake
