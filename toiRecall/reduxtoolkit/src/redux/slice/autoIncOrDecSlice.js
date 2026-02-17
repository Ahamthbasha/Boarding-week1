import { createSlice } from "@reduxjs/toolkit"

const count = {
    counter : 10,
    direction : "DOWN"
}

const autoIncOrDecSlice = createSlice({
    name:'autoIncOrDecCounter',
    initialState:count,
    reducers:{
        increase:(state)=>{
            state.counter += 1
        },
        decrease:(state)=>{
            state.counter-=1
        },
        changeDirection:(state,action)=>{
            state.direction = action.payload
        }
    }
})

export const {increase,decrease,changeDirection} = autoIncOrDecSlice.actions
 
export default autoIncOrDecSlice.reducer