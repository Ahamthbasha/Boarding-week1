import {createSlice} from '@reduxjs/toolkit'

const cakeState = {
    noOfCakes : 10
}

const cakeSlice = createSlice({
    name:'cake',
    initialState:cakeState,
    reducers:{
        buyCake:(state)=>{
            state.noOfCakes -= 1
        }
    }
})

export const {buyCake} = cakeSlice.actions

export default cakeSlice.reducer