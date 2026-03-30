import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { BUY_ICECREAM } from '../store/actions/icecreamAction'

const Icecream = () => {
    const {noOfIcecreams} = useSelector((state)=>state.icecream)
    const dispatch = useDispatch()

    const buyIce = ()=>{
        dispatch({type:BUY_ICECREAM})
    }

  return (
    <div>
        <h1>Ice cream</h1>
        <h2>No Of Ice cream:{noOfIcecreams}</h2>
        <button onClick={buyIce}>BuyIce</button>  
    </div>
  )
}

export default Icecream
