import { BUY_RICE } from "../actions/riceAction"

const riceState = {
    noOfRices : 10
}

const riceReducer = (state=riceState,action)=>{
    switch(action.type){
        case BUY_RICE:
            return {...state,noOfRices:state.noOfRices-1}
        default:
            return state
    }
}

export default riceReducer