import { createSlice } from "@reduxjs/toolkit"

const cakeSlice = createSlice({
    name:'cake',
    initialState:{noOfCakes:10},
    reducers:{
        buyCake:((state)=>{
            state.noOfCakes--
        })
    }
})

export const {buyCake} = cakeSlice.actions

export default cakeSlice.reducer