import { createStore } from "redux";
import {createLogger} from 'redux-logger'
import { applyMiddleware } from "redux";
import rootReducer from "./reducers/combineReducer";
import {thunk} from 'redux-thunk'

const loggerMiddleware = createLogger()
const store = createStore(rootReducer,applyMiddleware(thunk,loggerMiddleware))
export default store