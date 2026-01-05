import { CHANGE_DIRECTION, DECREMENT, INCREMENT } from "../action/counterAction"

const counterState = {
    counter : 0,
    direction : "UP"
}

const counterReducer = (state = counterState,action)=>{
    switch(action.type){
        case INCREMENT:
            return {...state,counter:state.counter+1}
        case DECREMENT:
            return {...state,counter:state.counter-1}
        case CHANGE_DIRECTION:
            return {...state,direction:action.payload}
        default:
            return state
    }
}

export default counterReducer