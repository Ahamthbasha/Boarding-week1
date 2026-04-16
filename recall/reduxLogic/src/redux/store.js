import {createStore,applyMiddleware} from 'redux'
import rootReducer from './reducer/rootReducer'
import {createLogger} from 'redux-logger'

const store = createStore(rootReducer,applyMiddleware(createLogger()))

export default store