import {combineReducers} from 'redux'
import { cakeReducer } from './cakeReducer'
import { icecreamReducer } from './icecreamReducer'
import { userReducer } from './userReducer'
import riceReducer from './riceReducer'
import pongalReducer from './pongalReducer'
import { counterReducer } from './countReducer'

const rootReducers = combineReducers({
    cake:cakeReducer,
    icecream:icecreamReducer,
    user:userReducer,
    rice:riceReducer,
    pongal:pongalReducer,
    count:counterReducer
})

export default rootReducers