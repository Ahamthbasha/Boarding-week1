import {createSlice} from "@reduxjs/toolkit"
import { fetchUser } from "../thunk/fetchUser"

const initialState = {
    loading : false,
    users:[],
    error:''
}
const userSlice = createSlice({
    name:'user',
    initialState,
    reducers:{},
    extraReducers:(builder)=>{
        builder
        .addCase(fetchUser.pending,(state)=>{
            state.loading = true
        })
        .addCase(fetchUser.fulfilled,(state,action)=>{
            state.loading = false
            state.users = action.payload
        })
        .addCase(fetchUser.rejected,(state,action)=>{
            state.loading = false
            state.error = action.error.message
        })
    }
})


export default userSlice.reducer