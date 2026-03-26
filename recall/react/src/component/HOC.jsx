import React from 'react'

const HocComponent = (WrappedComponent)=>{
    return function(props){
        return(
            <div style={{border:"2px solid blue"}}>
                <WrappedComponent {...props}/>
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

const HOC = HocComponent(Button)

export default HOC
