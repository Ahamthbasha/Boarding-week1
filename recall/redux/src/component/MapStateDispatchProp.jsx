import React from 'react'
import { connect } from 'react-redux'
import { buyCake } from '../store/actions/cakeAction'
import { buyIcecream } from '../store/actions/icecreamAction'

const MapStateDispatchProp = (props) => {
    const buyItem = ()=>{
        props.buy()
    }
  return (
    <div>
      <h1>itemName:{props.name}</h1>
      <h2>itemCount:{props.item}</h2>
      <button onClick={buyItem}>Buy Cake</button>
    </div>
  )
}

const mapStateToProps = (state,props)=>{
    const ownState = props.Cake ? state.cake.noOfCakes : state.icecream.noOfIcecreams
    return {
        item : ownState,
        name : props.Cake ? 'cake' : 'icecream' 
    }
}

const mapDispatchToProps = (dispatch,props)=>{
    const dispatchFn = props.Cake ? buyCake() : buyIcecream()
    return {
        buy:()=>dispatch(dispatchFn)
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(MapStateDispatchProp)
