// import {createStore} from 'redux'
// import rootReducer from './reducers/rootReducer'
// import { applyMiddleware } from 'redux'
// import {createLogger} from 'redux-logger'

// const store = createStore(rootReducer,applyMiddleware(createLogger()))

// export default store


import {createStore,applyMiddleware} from 'redux'
import {createLogger} from 'redux-logger'
import rootReducer from './reducers/rootReducer'
import {thunk} from 'redux-thunk'

const store = createStore(rootReducer,applyMiddleware(thunk,createLogger()))

export default store