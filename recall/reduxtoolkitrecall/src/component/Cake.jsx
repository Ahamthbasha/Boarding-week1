import React from 'react'
import { buyCake } from '../redux/slices/cakeSlice'
import {useSelector,useDispatch} from 'react-redux'


const Cake = () => {
    const {noOfCakes} = useSelector((state)=>state.cake)

    const dispatch = useDispatch()

    const buy = ()=>{
        dispatch(buyCake())
    }
  return (
    <div>
      <h1>Cake:{noOfCakes}</h1>
      <button onClick={buy}>Buy Cake</button>
    </div>
  )
}

export default Cake
