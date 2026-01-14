import {createStore,applyMiddleware} from 'redux'
import {createLogger} from 'redux-logger'
import rootReducer from './reducers/rootReducer'
import {thunk} from 'redux-thunk'


const logger = createLogger()
const store = createStore(rootReducer,applyMiddleware(thunk,logger))

export default store