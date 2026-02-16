import React from 'react'
import { buyPongal } from '../redux/actions/pongalAction'
import { connect } from 'react-redux'
import { buyRice } from '../redux/actions/riceAction'

const Pongal = ({noOfPongal,buyPongal}) => {

    const buyingPongal = ()=>{
        buyPongal()
    }
  return (
    <div>
        <h1>noOfPongal:{noOfPongal}</h1>
        <button onClick={buyingPongal}>Buy_Pongal</button>  
    </div>
  )
}

const mapStateToProps = (state,ownProps)=>{
    return{
        noOfPongal:ownProps.isRice ? state.rice.noOfRices : state.pongal.noOfPongal
    }
}

const mapDispatchToProps = (dispatch,ownProps)=>{
    return{
        buyPongal:ownProps.isRice ? ()=>dispatch(buyRice()) : ()=>dispatch(buyPongal())
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Pongal)
