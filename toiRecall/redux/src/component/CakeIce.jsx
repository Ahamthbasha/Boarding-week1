import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { buyCake } from '../redux/actions/cakeAction'
import { buyIcecream } from '../redux/actions/icecreamAction'

const CakeIce = () => {
    const {noOfCakes} = useSelector((store)=>store.cake)
    const {noOfIcecreams} = useSelector((store)=>store.icecream)

    const dispatch = useDispatch()
    const buyCakes = ()=>{
        dispatch(buyCake())
    }

    const buyIceCreams = () => {
        dispatch(buyIcecream())
    }

  return (
    <div>
        <h1>No Of Cakes:{noOfCakes}</h1>
        <h1>No Of Icecreams:{noOfIcecreams}</h1>
        <button onClick={buyCakes}>Buy Cake</button>
        <button onClick={buyIceCreams}>Buy Icecream</button>  
    </div>
  )
}

export default CakeIce
