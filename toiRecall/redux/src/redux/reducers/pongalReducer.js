import { BUY_PONGAL } from "../actions/pongalAction"

const pongalState = {
    noOfPongal : 10
}

const pongalReducer = (state = pongalState,action)=>{
    switch(action.type){
        case BUY_PONGAL:
            return {...state,noOfPongal:state.noOfPongal-1}
        default:
            return state
    }
}

export default pongalReducer