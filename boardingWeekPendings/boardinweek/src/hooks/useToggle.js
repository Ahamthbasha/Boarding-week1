import React, { useState } from 'react'

const useToggle = () => {
    const [toggle,setToggle] = useState(false)

    const modify = ()=>{
        setToggle((toggle)=>!toggle)
    }
  return {toggle,modify}
}

export default useToggle
