import {createSlice} from '@reduxjs/toolkit'

const cakeState = {
    noOfCake:10
}

const cakeSlice = createSlice({
    name:'cake',
    initialState:cakeState,
    reducers:{
        buyCake:(state)=>{
            state.noOfCake -= 1
        }
    }
})

export const {buyCake} = cakeSlice.actions

export default cakeSlice.reducer