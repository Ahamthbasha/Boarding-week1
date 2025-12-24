import cakeReducer from "./cakeReducer";
import icecreamReducer from "./icecreamReducer";
import {combineReducers} from 'redux'

const rootReducer = combineReducers({
    cake:cakeReducer,
    icecream : icecreamReducer
})

export default rootReducer