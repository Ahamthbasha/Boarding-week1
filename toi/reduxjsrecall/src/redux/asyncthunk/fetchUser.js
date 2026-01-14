import { createAsyncThunk } from "@reduxjs/toolkit";

const fetchUser = createAsyncThunk(
    'user/fetchList',
    async ()=>{
            const result = await fetch(`https://jsonplaceholder.typicode.com/users`)
            const response = await result.json()
            return response
    }
)

export default fetchUser