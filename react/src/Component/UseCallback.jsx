// import React, { useCallback, useState } from 'react'

// const ChildComponent = React.memo(({increase})=>{
//     console.log('Child rendered')
//     return(
//         <div>
//             <button onClick={increase}>increase</button>
//         </div>
//     )
// })


// const UseCallback = () => {
//     const [count,setCount] = useState(0)
//     const [input,setInut] = useState('')

//     const increment = useCallback(() => {
//         console.log("function created")
//         setCount((count)=>count+1)
//     },[])
//   return (
//     <div>
//         <h1>{count}</h1>
//       <input type="text" value={input} onChange={(e)=>setInut(e.target.value)} />
//       <ChildComponent increase={increment}/>
//     </div>
//   )
// }

// export default UseCallback


import React, { useCallback, useState } from 'react'

const UseCallback = () => {
    const [input,setInput] = useState('')
    const [count,setCount] = useState(0)

    const increase = useCallback(()=>{
        console.log("function created")
        setCount((count)=>count+1)
    },[])
  return (
    <div>
        <h1>count is : {count}</h1>

        <input type="text" value={input} onChange={(e)=>setInput(e.target.value)}/>

        <button onClick={increase}>increment</button>
    </div>
  )
}

export default UseCallback