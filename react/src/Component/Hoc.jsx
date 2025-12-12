import React from 'react'

// eslint-disable-next-line no-unused-vars
const Hoc = (WrappedComponent) => {
  return function Enhance(props){
    return (
        <div style={{border:"2px solid red"}}>
            <WrappedComponent {...props}/>
        </div>
    )
  }
}

const Component = ()=>{
    return(
        <>
        Hello world
        </>
    )
}

const EnhancedComponent = Hoc(Component)


export {Hoc,Component,EnhancedComponent}
