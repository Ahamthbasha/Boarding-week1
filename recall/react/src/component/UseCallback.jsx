//without useCallback each call will get new reference

// import React, { useEffect, useState } from 'react';

// const Demo = () => {
//     const [count, setCount] = useState(0);

//     const increment = () => {
//         setCount(c => c + 1);
//     };

//     useEffect(() => {
//         console.log("Effect triggered");
//     }, [increment]);

//     return (
//         <button onClick={increment}>Click {count}</button>
//     );
// };

// export default Demo;

// with useCallback it will pass the function reference

// import React, { useCallback, useEffect, useState } from 'react'

// const UseCallback = () => {
//     const [count,setCount] = useState(0)

//     const increment = useCallback(()=>{
//         setCount((count)=>count+1)
//     },[])

//     useEffect(()=>{
//         console.log("Effect Triggered")
//     },[increment])

//   return (
//     <div>
//         <h1>Count:{count}</h1>
//         <button onClick={increment}>Click</button>
//     </div>
//   )
// }

// export default UseCallback

// with reactMemo

import React, { useCallback, useState } from 'react'

const ChildComponent = React.memo(({increment})=>{
    console.log('child Component')
    return(
        <div>
            <button onClick={increment}>increment</button>
        </div>
    )
})

const UseCallback = () => {
    const [input,setInput] = useState('')
    const [count,setCount] = useState(0)

    const increment = useCallback(()=>{
        setCount((count)=>count+1)
    },[])

  return (
    <div>
        <input type="text" value={input} onChange={(e)=>setInput(e.target.value)}/>
        <h1>count:{count}</h1>
        <ChildComponent increment={increment}/>
    </div>  )
}

export default UseCallback
