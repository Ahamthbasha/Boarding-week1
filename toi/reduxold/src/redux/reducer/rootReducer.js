import { combineReducers } from "redux";
import cakeReducer from "./cakeReducer";
import userReducer from "./userReducer";
import countReducer from "./countReducer";

const rootReducer = combineReducers({
    cake:cakeReducer,
    user:userReducer,
    count:countReducer
})

export default rootReducer