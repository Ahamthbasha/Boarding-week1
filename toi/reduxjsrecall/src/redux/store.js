import { configureStore} from "@reduxjs/toolkit";
import {createLogger} from 'redux-logger'
import cakeReducer from "./slices/cakeSlice"
import userReducer from "./slices/userSlice"

const logger = createLogger()
const store = configureStore({
    reducer:{
        cakeReducer,
        userReducer
    },
    middleware:(getDefaultMiddleware)=>{
        return getDefaultMiddleware().concat(logger)
    }
})

export default store