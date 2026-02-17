import { configureStore } from "@reduxjs/toolkit";
import {createLogger} from 'redux-logger'
import countSlice from './slice/countSlice'
import userSlice from './slice/userSlice'
import autoIncOrDecSlice from './slice/autoIncOrDecSlice'

const logger = createLogger()

const store = configureStore({
    reducer:{
        count:countSlice,
        user:userSlice,
        incDec:autoIncOrDecSlice,
    },
    middleware:(getDefaultMiddleware)=>{
        return getDefaultMiddleware().concat(logger)
    }
})

export default store