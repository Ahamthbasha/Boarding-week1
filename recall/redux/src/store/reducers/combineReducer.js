import {combineReducers} from 'redux'
import { cakeReducer } from './cakeReducer'
import { icecreamReducer } from './iceReducer'
import userReducer from './userReducer'

const rootReducer = combineReducers({
    cake:cakeReducer,
    icecream:icecreamReducer,
    user:userReducer
})

export default rootReducer