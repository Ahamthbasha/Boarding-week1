import { BUY_CAKE } from "../actions/cakeActions"

const cakeState = {
    noOfCakes : 10
}

const cakeReducer = (state = cakeState,action)=>{
    switch(action.type){
        case BUY_CAKE:
            return {...state,noOfCakes:state.noOfCakes-1}
        default:
            return state
    }
}

export default cakeReducer