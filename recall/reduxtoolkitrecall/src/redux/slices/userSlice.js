import { createSlice, } from "@reduxjs/toolkit";
import fetchUser from "../thunk/fetchUser";

const userSlice = createSlice({
    name : 'user',
    initialState : {loading:false,users:[],error:''},
    reducers:{},
    extraReducers:((builders)=>{
        builders
        .addCase(fetchUser.pending,((state)=>{
            state.loading = true
        }))

        .addCase(fetchUser.fulfilled,(state,action)=>{
            state.loading = false
            state.users = action.payload
            state.error = ''
        })

        .addCase(fetchUser.rejected,(state,action)=>{
            state.loading = false;
            state.users =[]
            state.error = action.payload
        })
    })
})

export default userSlice.reducer