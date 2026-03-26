import React, { useState } from 'react'

const ConditionalRender = () => {
    const [toggle,setToggle] = useState(false)

    // if(toggle){
    //     return <p>toggle changed to true</p>
    // }
    // else{
    //     return <p>toggle changed to false</p>
    // }

  return (
    <div>
{/* ternary based */}
        {/* {toggle ? <p>true</p> : <p>false</p>} */}
{/* short hand */}
        {!toggle && <p>false</p>}      
    </div>
  )
}

export default ConditionalRender
