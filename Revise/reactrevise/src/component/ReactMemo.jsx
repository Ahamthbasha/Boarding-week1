//// state update render the owning Component.

import React, { useCallback, useMemo, useState } from 'react'

const ChildComponent = React.memo(({onCount}) => {
    const {count,increment} = onCount

    console.log("child rendered")
    return(
        <div>
            <h1>count is:{count}</h1>
            <button onClick={increment}>Increment</button>
        </div>
    )
})

const ReactMemo = () => {
    const [input,setInput] = useState('')
    const [count,setCount] = useState(0)

    const increment = useCallback(()=>{
        setCount((count)=>count+1)
    },[])

    const onCount = useMemo(() => {
        return {count,increment}
    },[count,increment])

    console.log("parent rendered")

  return (
    <div>
        <input type="text" value={input} onChange={(e)=>setInput(e.target.value)} />

        <ChildComponent onCount={onCount}/>
    </div>
  )
}

export default ReactMemo



























// import React, { useCallback, useState } from 'react'

// const ChildComponent = React.memo(({onCount})=>{
//     console.log("child rendered")
//     const {count,increment} = onCount
//     return(
//         <div>
//             <h1>count is : {count}</h1>
//             <button onClick={increment}>Increment</button>
//         </div>
//     )
// })

// const ReactMemo = () => {
//     const [input,setInput] = useState('')
//     const [count,setCount] = useState(0)

//     const increment = useCallback(()=>{
//         setCount((count)=>count+1)
//     },[])

//     console.log("parent component rendered")
//   return (
//     <div>
//       <input type="text" value={input} onChange={(e)=>setInput(e.target.value)} />
//       {/* when you pass it like object literal it will create new object so every time re render happen */}
//       <ChildComponent onCount = {{count,increment}}/>
//     </div>
//   )
// }

// export default ReactMemo
