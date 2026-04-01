import { createAsyncThunk } from "@reduxjs/toolkit";

const fetchUser = createAsyncThunk(
    'user/fetch',
    async()=>{
        const resonse = await fetch(`https://jsonplaceholder.typicode.com/users`)
        const result = await resonse.json()
        return result 
    }
)

export default fetchUser