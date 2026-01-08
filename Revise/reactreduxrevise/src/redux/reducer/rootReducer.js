import {combineReducers} from 'redux'
import cakeReducer from './cakeReducer'
import userReducer from './userReducer'
import counterReducer from './counterReducer'

const rootReducer = combineReducers({
    cake:cakeReducer,
    user:userReducer,
    counter:counterReducer
})

export default rootReducer