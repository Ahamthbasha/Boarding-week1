import {createSlice} from "@reduxjs/toolkit"

const counterState = {
    counter : 0,
    direction : "UP"
}

const counterSlice = createSlice({
    name:"counter",
    initialState:counterState,
    reducers:{
        increment:(state)=>{
            state.direction = "UP"
            state.counter = state.counter+1
        },
        decrement:(state)=>{
            state.direction = "DOWN"
            state.counter = state.counter-1
        },
        changeDirection:(state,payload)=>{
            state.direction = payload
        }
    }
})

export const {increment,decrement,changeDirection} = counterSlice.actions

export default counterSlice.reducer