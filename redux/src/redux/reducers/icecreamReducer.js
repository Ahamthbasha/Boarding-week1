import { BUY_ICECREAM } from "../actions/iceCreamAction";

const icecreamState = {
    noOfIcecream : 10
}

const icecreamReducer = (state = icecreamState,action)=>{
    switch(action.type){
        case BUY_ICECREAM:
            return {...state,noOfIcecream:state.noOfIcecream-1}
        default:
            return state
    }
}

export default icecreamReducer