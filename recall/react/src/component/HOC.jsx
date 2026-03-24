import React from 'react'

const HOCCOMPONENT = (WrappedComponent)=>{
    return function(props){
        return(
        <div style={{border:'2px solid blue'}}>
            <WrappedComponent {...props}/>
        </div>
        )
    }
}

const Button = ()=>{
    return(
        <div>
            <button>click</button>
        </div>
    )
}

const HOC = HOCCOMPONENT(Button)
export default HOC
