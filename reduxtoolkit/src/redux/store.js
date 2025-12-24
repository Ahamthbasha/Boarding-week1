import { configureStore } from "@reduxjs/toolkit";
import {createLogger} from 'redux-logger'
import cakeSlice from "./slice/cakeSlice"

const logger = createLogger()

const store = configureStore({
    reducer:{
        cake:cakeSlice
    },
    middleware:(getDefaultMiddleware)=>{
       return getDefaultMiddleware().concat(logger)
    }
})

export default store