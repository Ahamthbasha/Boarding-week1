import React, { useState } from 'react'

const Conditional = () => {
    const [loading,setLoading] = useState(false)

    const toggle =()=>{
        setLoading((loading)=>!loading)
    }

    if(loading){
        return (<div>
            <button onClick={toggle}>toggle</button>
            </div>)
    }


  return (
    <div>
        {/* {loading ? <p>Loading</p> : <p>NotLoading</p>} */}

        {/* {loading && <p>Loading..</p>} */}
      <button onClick={toggle}>Toggle</button>
    </div>
  )
}

export default Conditional
