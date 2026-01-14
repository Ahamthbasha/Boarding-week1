import React from 'react'

const HOCComponent = (WrappedComponent)=>{
    return function EnhancedComponent(){
        return(
            <div style={{border:"2px solid red"}}>
                <WrappedComponent />
            </div>
        )
    }
}

const Button = ()=>{
    return(
        <div>
            <button>Click</button>
        </div>
    )
}

const HOC = HOCComponent(Button)

export default HOC
