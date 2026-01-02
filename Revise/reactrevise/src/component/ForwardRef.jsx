// import React, { useRef } from 'react'

// const ChildComponent = ({onRef})=>{
//     const focus = ()=>{
//         onRef.current.focus()
//     }
//     return(
//         <div>
//             <input type="text" ref={onRef} />
//             <button onClick={focus}>Click To Focus</button>
//         </div>
//     )
// }

// const ForwardRef = () => {
//     const inputRef = useRef()
//   return (
//     <div>
//       <ChildComponent onRef = {inputRef}/>
//     </div>
//   )
// }

// export default ForwardRef



import React, { forwardRef, useRef } from 'react'

const ChildComponent = forwardRef((props,ref)=>{

    const focus = ()=>{
        ref.current.focus()
    }

    return(
        <div>
            <input type="text" ref={ref} />
            <button onClick={focus}>Click To Focus</button>
        </div>
    )
})

const ForwardRef = () => {
    const inputRef = useRef()
  return (
    <div>
      <ChildComponent ref={inputRef}/>
    </div>
  )
}

export default ForwardRef
