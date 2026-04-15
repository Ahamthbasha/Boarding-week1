// import React from 'react'

// const withComponent = (WrappedComponent)=>{
//     return function enhancedComponent(props){
//         return (
//             <div>
//                 <WrappedComponent {...props} style={{...props.style,backgroundColor:'blue',color:'white'}}/>
//             </div>
//         )
//     }
// }

// const Button = (props)=>{
//     return(
//         <div>
//             <button style={props.style}>Click</button>
//         </div>
//     )
// }

// const CustomHook = withComponent(Button)

// export default CustomHook


import React from 'react'

const Hook = (WrappedComponent)=>{
    return function enhancedComponent(props){
        return(
            <div>
                <WrappedComponent {...props} style={{...props.style,border:'2px solid black'}}/>
            </div>
        )
    }
}

const Button = ({style})=>{
    return(
        <button style={style}>Click</button>
    )
}

const CustomHook = Hook(Button)

export default CustomHook
