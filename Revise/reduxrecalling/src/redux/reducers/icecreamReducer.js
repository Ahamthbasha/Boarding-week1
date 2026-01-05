import { BUY_ICECREAM } from "../actions/icecreamActions";

const iceCreamState = {
    noOfIcecreams : 10
}

const icecreamReducer = (state = iceCreamState,action)=>{
    switch(action.type){
        case BUY_ICECREAM:
            return {...state,noOfIcecreams:state.noOfIcecreams-1}
        default:
            return state
    }
}

export default icecreamReducer