import { configureStore } from "@reduxjs/toolkit";
import cakeReducer from "./slices/cakeSlice"

const store = configureStore({
    reducer:{
        cakeReducer
    }
})

export default store