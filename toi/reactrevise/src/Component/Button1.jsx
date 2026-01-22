// import React, { useRef } from 'react'

// const Button1 = () => {
//   const buttonRef = useRef(null)

//   const changeColor = ()=>{
//     buttonRef.current.style.color = 'red'
//   }

//   return (
//     <div>
//       <button onClick={changeColor} ref={buttonRef}>click</button>
//     </div>
//   )
// }

// export default Button1


import React, { useState } from 'react'

const CommonFunction = ({render})=>{
  const [count,setCount] = useState(0)

  const increment = ()=>{
    setCount((count)=>count+1)
  }

  const decrement = ()=>{
    setCount((count)=>count-1)
  }

  const reset = ()=>{
    setCount(0)
  }

  return render(count,increment,decrement,reset)
}

const Button1 = () => {
  return <CommonFunction render={((count,increment,decrement,reset)=>{
    return(
      <div>
        <h1>count:{count}</h1>
        <button onClick={increment}>Increment</button>
        <button onClick={decrement}>Decrement</button>
        <button onClick={reset}>Reset</button>
      </div>
    )
  })}/>
}

export default Button1
