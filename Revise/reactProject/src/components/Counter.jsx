// import React, { useState } from 'react'

// const Counter = () => {
//     const [count,setCount] = useState(0)

//     const increment =()=>{
//         setCount((count)=>count+1)
//     }

//     const decrement = () => {
//         setCount((count)=>count-1)
//     }

//     const reset = () => {
//         setCount(0)
//     }

//   return (
//     <div>
//         <h1>{count}</h1>
//         <button onClick={increment}>increment</button>
//         <button onClick={decrement}>Decrement</button>
//         <button onClick={reset}>Reset</button> 
//     </div>
//   )
// }

// export default Counter


// import React, { useEffect, useState } from 'react'

// const Counter = () => {
//     const [width,setWidth] = useState(window.innerWidth)

//     const widthResizer = ()=>{
//         setWidth(()=>window.innerWidth)
//     }

//     useEffect(()=>{
//         window.addEventListener('resize',widthResizer)

//         return ()=>[
//             window.removeEventListener('resize',widthResizer)
//         ]
//     },[])
//   return (
//     <div>
//       <h1>{width}</h1>
//     </div>
//   )
// }

// export default Counter


//useRef

// import React, { useRef } from 'react'

// const Counter = () => {
//     const inputRef = useRef()

//     const focus = ()=>{
//         inputRef.current.focus()
//     }

//   return (
//     <div>
//         <input type="text" ref={inputRef}/>
//         <button onClick={focus}>Click To Focus</button>  
//     </div>
//   )
// }

// export default Counter


// import React, { useState } from 'react'

// const ChildComponent = ({properties})=>{
//     const {increment,decrement,reset} = properties
//     return(
//         <div>
//             <button onClick={increment}>increment</button>
//             <button onClick={decrement}>Decrement</button>
//             <button onClick={reset}>Reset</button>
//         </div>
//     )
// }


// const Counter = () => {
//     const [count,setCount] = useState(0)

//     const increment = ()=>{
//         setCount((count)=>count+1)
//     }

//     const decrement = ()=>{
//         setCount((count)=>count-1)
//     }
    
//     const reset = ()=>{
//         setCount(0)
//     }
//   return (
//     <div>
//       <h1>{count}</h1>
//       <ChildComponent properties={{increment,decrement,reset}}/>
//     </div>
//   )
// }

// export default Counter


//child to parent component

// import React, { useState } from 'react'

// const ChildComponent = ({receive})=>{

//     const sendData = ()=>{
//         receive("hello parent")
//     }
//     return(
//         <div>
//             <button onClick={sendData}>Click To Send Data To Parent</button>
//         </div>
//     )
// }

// const Counter = () => {
//     const [data,setData] = useState('')

//     const settingData = (receivedData)=>{
//         setData(receivedData)
//     }
//     return (
//     <div>
//       <h1>Parent Component:{data}</h1>
//       <ChildComponent receive={settingData}/>
//     </div>
//   )
// }

// export default Counter


//without forward Ref

// import React, { useRef } from 'react'

// const ChildComponent = ({ref})=>{

//   const focus = ()=>{
//     console.log(ref)
//     ref.current.focus()
//   }
//   return(
//     <div>
//       <input type="text" ref={ref} />
//       <button onClick={focus}>Click To Focus</button>
//     </div>
//   )
// }

// const Counter = () => {
//   const inputRef = useRef()
//   return (
//     <div>
//       <ChildComponent ref={inputRef}/>
//     </div>
//   )
// }

// export default Counter


//with forward ref

// import React, { forwardRef, useRef } from 'react'

// const ChildComponent = forwardRef((props,ref) => {
//   const focus = ()=>{
//     ref.current.focus()
//   }
//   return(
//     <div>
//       <input type="text" ref={ref}/>
//       <button onClick={focus}>Click To Focsu</button>
//     </div>
//   )
// })

// const Counter = () => {
//   const inputRef = useRef()
//   return (
//     <div>
//       <ChildComponent ref={inputRef}/>
//     </div>
//   )
// }

// export default Counter


//custom hook

// import React from 'react'
// import useCounter from '../hooks/useCounter'

// const Counter = () => {
//   const {count,increment,decrement,reset} = useCounter()
//   return (
//     <div>
//       <h1>{count}</h1>
//       <button onClick={increment}>Increment</button>
//       <button onClick={decrement}>Decrement</button>
//       <button onClick={reset}>Reset</button>
//     </div>
//   )
// }

// export default Counter

//hoc

// import React from 'react'

// const Hoc = (WrappedComponent)=>{
//   return function(props){
//     return(
//       <div style={{border:"2px solid red"}}>
//         <WrappedComponent {...props}/>
//       </div>
//     )
//   }
// }

// const Button = ()=>{
//   return(
//     <>
//     <button>Click</button>
//     </>
//   )
// }

// const Counter = Hoc(Button)

// export default Counter


//render props

// import React, { useState } from 'react'

// const Logic = ({render})=>{
//   const [count,setCount] = useState(0)

//   const increment = ()=>{
//     setCount((count)=>count+1)
//   }

//   const decrement = ()=>{
//     setCount((count)=>count-1)
//   }

//   const reset = ()=>{
//     setCount(0)
//   }

//   return render({count,increment,decrement,reset})
// }

// const Counter = () => {
//   return(

//     <Logic render={({count,increment,decrement,reset})=>{
//       return(
//         <div>
//           <h1>{count}</h1>
//           <button onClick={increment}>Increment</button>
//           <button onClick={decrement}>Decrement</button>
//           <button onClick={reset}>Reset</button>
//         </div>
//       )
//     }}/>
//   )
// }

// export default Counter



import React from 'react'

const Counter = () => {
  return (
    <div>
      <h1>Counter</h1>
    </div>
  )
}

export default Counter