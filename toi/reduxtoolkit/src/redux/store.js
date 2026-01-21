import { configureStore } from "@reduxjs/toolkit";
import cakeReducer from './Slice/cakeSlice'
import userReducer from './Slice/userSlice'
import {createLogger} from 'redux-logger'

const logger = createLogger()
const store = configureStore({
    reducer:{
        cake:cakeReducer,
        user:userReducer,
    },
    middleware:(getDefaultMiddleware)=>{
       return getDefaultMiddleware().concat(logger)
    }
})

export default store

