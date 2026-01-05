import React from 'react'
import {connect} from 'react-redux'
import { buyCake } from '../redux/action/cakeAction'

const Cake = (props) => {
  return (
    <div>
      <h1>cake shop</h1>

      <h2>no of cakes : {props.noOfCakes}</h2>

      <button onClick={props.buyCake}>Buy cake</button>
    </div>
  )
}

const mapStateToProps = (state)=>{
    return {
        noOfCakes : state.cake.noOfCakes
    }
}

const mapDispatchToProps = {
    buyCake
}

export default connect(mapStateToProps,mapDispatchToProps)(Cake)
