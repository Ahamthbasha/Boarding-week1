import React from 'react'
import { useSelector,useDispatch } from 'react-redux'
import buyCake from '../redux/actions/cakeAction'

const Cake = () => {
    const {noOfCakes} = useSelector((store)=>store.cake)
    const dispatch = useDispatch()

    const buyCakes =()=>{
        dispatch(buyCake())
    }

  return (
    <div>
        <h1>noOfCakes:{noOfCakes}</h1>
        <button onClick={buyCakes}>BuyCake</button>
    </div>
  )
}

export default Cake
