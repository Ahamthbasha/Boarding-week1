import React from 'react'
import { useState } from 'react'

const ConditionRender = () => {
    const [load,setLoad] = useState(false)

    const toggle = ()=>{
        setLoad((load)=>!load)
    }

    // if(load){
    //     return <p>Hi users</p>
    // }
  return (
    <div>
        {/* {load ? <p>hi users</p> : <p>Need to toggle</p>} */}

        {load && <p>Hi users</p>}
      <button onClick={toggle}>Toggle</button>
    </div>
  )
}

export default ConditionRender
