import React, { useState } from 'react'

const ConditionRender = () => {
    const [toggle,setToggle] = useState(false)

    const [swich,setSwitch] = useState(false)

    const toggleChange = ()=>{
        setToggle((toggle)=>!toggle)
    }

    const swichChange = ()=>{
        setSwitch((swich)=>!swich)
    }
// if else
    if(toggle){
        return <p>Toggle turned True</p>
    }

  return (
    <div>
      <button onClick={toggleChange}>Toggle</button>
{/* Ternary operator */}
      {swich ? <p>switch is on</p> : <p>swith is off</p>}

      <button onClick={swichChange}>Switch Toggle</button>
{/* short hand operator */}
      {swich && <p>swith is on</p>}
    </div>
  )
}

export default ConditionRender
