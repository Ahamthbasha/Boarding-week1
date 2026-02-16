import {combineReducers} from 'redux'
import { cakeReducer } from './cakeReducer'
import { icecreamReducer } from './icecreamReducer'
import { userReducer } from './userReducer'

const rootReducers = combineReducers({
    cake:cakeReducer,
    icecream:icecreamReducer,
    user:userReducer
})

export default rootReducers