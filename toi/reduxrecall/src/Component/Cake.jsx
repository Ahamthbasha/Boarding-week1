import React from 'react'
import { useSelector,useDispatch } from 'react-redux'
import { buyCake } from '../redux/actions/cakeActions'

const Cake = () => {
    const {noOfCakes} = useSelector((state)=>state.cake)
    const dispatch = useDispatch()
    const buy = ()=>{
        dispatch(buyCake())
    }
  return (
    <div>
      <h1>Cake Shop</h1>
      <h1>No of cakes:{noOfCakes}</h1>
      <button onClick={buy}>Buy Cake</button>
    </div>
  )
}

export default Cake
