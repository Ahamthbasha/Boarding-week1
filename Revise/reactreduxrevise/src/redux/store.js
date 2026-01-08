// import { createStore,applyMiddleware } from "redux";
// import {createLogger} from "redux-logger"
// import {thunk} from 'redux-thunk'
// import rootReducer from "./reducer/rootReducer";

// const logger = createLogger()
// const store = createStore(rootReducer,applyMiddleware(thunk,logger))

// export default store


// import { configureStore } from "@reduxjs/toolkit";
// import cakeReducer from "./slices/cakeSlice"
// import userReducer from "./slices/userSlice"

// const store = configureStore({
//     reducer:{
//        cake:cakeReducer,
//        user:userReducer
//     }
// })

// export default store

import { createStore } from "redux";
import rootReducer from "./reducer/rootReducer";

const store = createStore(rootReducer)

export default store