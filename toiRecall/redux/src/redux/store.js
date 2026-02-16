import { applyMiddleware, createStore } from "redux";
import rootReducers from "./reducers/combineReducer";
import {createLogger} from 'redux-logger'
import {thunk} from 'redux-thunk'

const logger = createLogger()
const store = createStore(rootReducers,applyMiddleware(thunk,logger))

export default store