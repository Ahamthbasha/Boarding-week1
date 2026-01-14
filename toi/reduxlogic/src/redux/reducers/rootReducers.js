import {combineReducers} from 'redux'
import counterReducer from './countReducer'

const rootReducer = combineReducers({
    count:counterReducer
})

export default rootReducer