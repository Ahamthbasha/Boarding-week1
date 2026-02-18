import React from 'react'
import { useState } from 'react'

const ConditionRender = () => {
    const [toggle,setToggle] = useState(false)

    // if(toggle){
    //     return <p>Loading...</p>
    // }
  return (
    <div>
        {/* {toggle ? "loading..." : "notLoading..."} */}
        {toggle && "Loading..."}
      <button onClick={()=>{
        setToggle((toggle)=>!toggle)
      }}>Toggle</button>
    </div>
  )
}

export default ConditionRender
