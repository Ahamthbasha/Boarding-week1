import {configureStore} from '@reduxjs/toolkit'
import cakeReducer from './slices/cakeSlice'
import userReducer from './slices/userSlice'

const store = configureStore({
    reducer:{
        cake:cakeReducer,
        user:userReducer
    },
})

export default store