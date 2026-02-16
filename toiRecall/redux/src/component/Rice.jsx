import React from 'react'
import { connect } from 'react-redux'
import { buyRice } from '../redux/actions/riceAction'

const Rice = (props) => {
    const {noOfRices,buyRice} = props
    console.log(props)
    const buyingRice = ()=>{
        buyRice()
    }
  return (
    <div>
      <h1>NoOfRice:{noOfRices}</h1>
      <button onClick={buyingRice}>buyRice</button>
    </div>
  )
}

const mapStateToProps = (state)=>{
    return {
        noOfRices:state.rice.noOfRices
    }
}

const mapDispatchToProps = (dispatch)=>{
    return{
        buyRice:()=>dispatch(buyRice())
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Rice)
