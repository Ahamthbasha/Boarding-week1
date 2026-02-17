import { CHANGE_DIRECTION, DECREASE, INCREASE } from "../actions/countAction"

const counterState = {
    count : 10,
    direction : "DOWN"
}

export const counterReducer =(state = counterState,action)=>{
    switch(action.type){
        case INCREASE:
            return {...state,count:state.count+1}
        case DECREASE:
            return {...state,count:state.count-1}
        case CHANGE_DIRECTION:
            return {...state,direction:action.payload}
        default:
            return state
    }
}