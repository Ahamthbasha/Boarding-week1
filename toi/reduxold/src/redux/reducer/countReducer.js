import { CHANGE_DIRECTION, DECREMENT, INCREMENT } from "../action/countAction"

const countState = {
    noOfCount : 10,
    direction : "DOWN"
}

const countReducer = (state=countState,action)=>{
    switch(action.type){
        case INCREMENT:
            return {...state,noOfCount:state.noOfCount+1}
        case DECREMENT:
            return {...state,noOfCount:state.noOfCount-1}
        case CHANGE_DIRECTION:
            return {...state,direction:action.payload}
        default:
            return state
    }
}

export default countReducer