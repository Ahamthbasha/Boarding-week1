import { CHANGE_DIRECTION, DECREMENT, INCREMENT } from "../action/countAction"

const initialState = {
    count:0,
    dir:'UP'
}

export const countReducer = (state = initialState,action)=>{
    switch(action.type){
        case INCREMENT:
            return {...state,count:state.count+1}
        case DECREMENT:
            return {...state,count:state.count-1}
        case CHANGE_DIRECTION:
            return {...state,dir:action.payload}
        default :
        return state
    }
}