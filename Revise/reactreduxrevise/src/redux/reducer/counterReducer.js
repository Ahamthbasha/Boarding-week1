import { CHANGE_DIRECTION, DECREMENT, INCREMENT } from "../action/counterAction"

const counterState = {
    count : 10,
    direction : "DOWN"
}


const counterReducer = (state = counterState,action)=>{
    switch(action.type){
        case INCREMENT:
            return {...state,count:state.count+1}
        case DECREMENT:
            return {...state,count:state.count-1}
        case CHANGE_DIRECTION:
            return {...state,direction:action.payload}
        default:
        return state
    }
}

export default counterReducer