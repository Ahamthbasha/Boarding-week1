import {combineReducers} from 'redux'
import cakeReducer from './cakeReducer'
import userReducer from './userReducer'

const rootReducer = combineReducers({
    cake:cakeReducer,
    user:userReducer
})

export default rootReducer