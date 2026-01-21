import React from 'react'

// eslint-disable-next-line no-unused-vars
const HOCComponent = (WrappedComponent)=>{
    return function EnhancedComponent(){
        return(
            <div style={{border:"2px solid blue"}}>
                <WrappedComponent/>
            </div>
        )
    }
}

const Button = ()=>{
    return(
        <div>
            <button>Click Me</button>
        </div>
    )
}

const HOC = HOCComponent(Button)

export default HOC
