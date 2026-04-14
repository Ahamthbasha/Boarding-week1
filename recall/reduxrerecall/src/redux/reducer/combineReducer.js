import { combineReducers } from "redux";
import countReducer from "./counterReducer";
import userReducer from "./userReduer";

const rootReducer = combineReducers({
    count:countReducer,
    user:userReducer
})

export default rootReducer