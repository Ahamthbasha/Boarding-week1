import {createSlice} from '@reduxjs/toolkit'

const countSlice = createSlice({
    name:'count',
    initialState:{count:0,dir:'UP'},
    reducers:{
        increment:((state)=>{
            state.count += 1
        }),
        decrement:((state)=>{
            state.count-=1
        }),
        changeDirection:((state,action)=>{
            state.dir = action.payload
        })
    }
})

export const {increment,decrement,changeDirection} = countSlice.actions

export default countSlice.reducer