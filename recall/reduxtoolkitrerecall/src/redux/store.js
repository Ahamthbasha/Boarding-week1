import { configureStore } from "@reduxjs/toolkit";
import countReducer from './slices/countSlice'
import userReducer from './slices/userSlice'

const store = configureStore({
    reducer:{
        count:countReducer,
        user:userReducer
    }
})

export default store