import { combineReducers } from "redux";
import icecreamReducer from "./icecreamReducer";
import cakeReducer from "./cakeReducer";
import userReducer from "./userReducer";

const rootReducer = combineReducers({
    ice:icecreamReducer,
    cake:cakeReducer,
    user:userReducer
})

export default rootReducer