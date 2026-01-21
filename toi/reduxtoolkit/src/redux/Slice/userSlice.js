import { createSlice } from "@reduxjs/toolkit"
import { fetchUser } from "../asyncThunk/fetchUser"

const userState = {
    loading:false,
    users:[],
    error:''
}

const userSlice = createSlice({
    name:'user',
    initialState:userState,
    reducers:{},
    extraReducers:(builders)=>{
        builders.addCase(fetchUser.pending,(state)=>{
            state.loading = true
        })
        builders.addCase(fetchUser.fulfilled,(state,action)=>{
            state.loading = false
            state.users = action.payload
            state.error = ''
        })
        builders.addCase(fetchUser.rejected,(state,action)=>{
            state.loading = false
            state.users = []
            state.error = action.payload
        })
    }
})

export default userSlice.reducer