import {createSlice} from '@reduxjs/toolkit'

const countState = {
    count : 0
}

const countSlice = createSlice({
    name:'counter',
    initialState:countState,
    reducers:{
        increment:(state)=>{
            state.count++
        },
        decrement:(state)=>{
            state.count--
        },
        reset:(state)=>{
            state.count = 0
        }
    }
})

export const {increment,decrement,reset} = countSlice.actions

export default countSlice.reducer
