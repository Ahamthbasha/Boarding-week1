import React from 'react'
import {connect} from 'react-redux'
import { buyCake } from '../store/actions/cakeAction'

 const MapStateToProps = ({noOfCakes,buyCake}) => {
  return (
    <div>
      <h1>CakeComponent</h1>
      <h2>no of cakes:{noOfCakes}</h2>
      <button onClick={buyCake}>buy</button>
    </div>
  )
}

const mapStateToProps = (state)=>{
    return{
        noOfCakes:state.cake.noOfCakes
    }
}

const mapDisptachtoProps = (dispatch)=>{
    console.log(dispatch)
    return {
        buyCake:()=>dispatch(buyCake())
    }
}

export default connect(mapStateToProps,mapDisptachtoProps)(MapStateToProps)
