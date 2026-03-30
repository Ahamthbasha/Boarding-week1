// import React from 'react'
// import { useDispatch, useSelector } from 'react-redux'
// import { decrement, increment, reset } from '../store/slices/countSlice'

// const Count = () => {
//     const {count} = useSelector((state)=>state.count)

//     const dispatch = useDispatch()

//     const incre = ()=>{
//         dispatch(increment())
//     }

//     const decre = ()=>{
//         dispatch(decrement())
//     }

//     const res = ()=>{
//         dispatch(reset())
//     }

//   return (
//     <div>
//       <h1>Count:{count}</h1>
//       <button onClick={incre}>Increment</button>
//       <button onClick={decre}>Decrement</button>
//       <button onClick={res}>Reset</button>
//     </div>
//   )
// }

// export default Count


// bindActionCreator

import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { bindActionCreators } from 'redux'
import { decrement, increment, reset } from '../store/slices/countSlice'

const Count = () => {

    const {count} = useSelector((state)=>state.count)

    const dispatch = useDispatch()

    const actions = bindActionCreators(
        {increment,decrement,reset},
        dispatch
    )

  return (
    <div>
    <h1>Count:{count}</h1>
    <button onClick={actions.increment}>Increment</button>
    <button onClick={actions.decrement}>Decrement</button>
    <button onClick={actions.reset}>Reset</button>  
    </div>
  )
}

export default Count
