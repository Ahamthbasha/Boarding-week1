import { BUY_ICECREAM } from "../actions/icecreamAction";

const icecreamState = {
    noOfIcecreams : 10
}

export const icecreamReducer = (state = icecreamState,action)=>{
    switch(action.type){
        case BUY_ICECREAM:
            return {...state,noOfIcecreams:state.noOfIcecreams+1}
        default:
            return state
    }
}