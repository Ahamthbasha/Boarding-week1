import {createSlice} from "@reduxjs/toolkit"

const initialState = {
    noOfCakes : 10
}

const cakeSlice = createSlice({
    name:"cake",
    initialState,
    reducers:{
        buyCake:(state)=>{
            state.noOfCakes -= 1
        }
    }
})

export const {buyCake} = cakeSlice.actions

export default cakeSlice.reducer
