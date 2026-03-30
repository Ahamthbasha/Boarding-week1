import { configureStore } from "@reduxjs/toolkit";
import countSlice from './slices/countSlice'
import userSlice from './slices/userSlice'

const store = configureStore({
    reducer:{
        count:countSlice,
        user:userSlice,
    }
})

export default store