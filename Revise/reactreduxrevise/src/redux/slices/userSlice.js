import { createSlice } from "@reduxjs/toolkit"
import { createAsyncThunk } from "@reduxjs/toolkit"

const initialState = {
    loading : false,
    users : [],
    error : ''
}

export const fetchUserToolkit = createAsyncThunk(
    'fetchlist',
    async ()=>{
            const response = await fetch('https://jsonplaceholder.typicode.com/users')
            const result = await response.json()
            return result
    }
)


const userSlice = createSlice({
    name:"userList",
    initialState,
    reducers:{},
    extraReducers:(builder)=>{
        builder
        .addCase(fetchUserToolkit.pending,(state)=>{
            state.loading = true
        })
        .addCase(fetchUserToolkit.fulfilled,(state,action)=>{
            state.loading = false
            state.users = action.payload
            state.error = ''
        })
        .addCase(fetchUserToolkit.rejected,(state,action)=>{
            state.loading = false
            state.users = []
            state.error = action.payload
        })
    }
})

export default userSlice.reducer