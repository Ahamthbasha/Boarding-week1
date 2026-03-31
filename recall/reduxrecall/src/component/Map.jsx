// import React from 'react'
// import {connect} from 'react-redux'
// import { buyCake } from '../redux/actions/cakeActions'

// // eslint-disable-next-line react-refresh/only-export-components
// const Map = ({noOfCakes,buyCake}) => {
//   return (
//     <div>
//       <h1>CakeShop :{noOfCakes}</h1>
//       <button onClick={buyCake}>Buy Cake</button>
//     </div>
//   )
// }

// const mapStateToProps = (state)=>{
//     return {
//         noOfCakes : state.cake.noOfCakes
//     }
// }

// const mapDispatchToProps = (dispatch)=>{
//     return{
//         buyCake:()=>dispatch(buyCake())
//     }
// }

// export default connect(mapStateToProps,mapDispatchToProps)(Map)


// own props

import React from 'react'
import {connect} from 'react-redux'
import { buyCake } from '../redux/actions/cakeActions'
import { buyIcecream } from '../redux/actions/icecreamActions'

const Map = ({itemName,itemCount,dispatchFn}) => {
  return (
    <div>
      <h1>ItemName : {itemName}</h1>
      <h2>ItemCount :{itemCount}</h2>
      <button onClick={dispatchFn}>Buy</button>
    </div>
  )
}

const mapStateToProps = (state,props)=>{
    const itemName = props.cake ? 'cake' : 'iceCream'
    const itemState = props.cake ? state.cake.noOfCakes : state.ice.noOfIcecreams

    return {
        itemName : itemName,
        itemCount : itemState
    }
}

const mapDispatchToProps = (dispatch,props)=>{
    return {
        dispatchFn : props.cake ?()=> dispatch(buyCake()) :()=>dispatch(buyIcecream())
    }
}

export default  connect(mapStateToProps,mapDispatchToProps)(Map)
