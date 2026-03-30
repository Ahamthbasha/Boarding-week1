import { createAsyncThunk } from "@reduxjs/toolkit";

const fetchUser = createAsyncThunk(
    'user/fetchUser',
    async function(){
        const response = await fetch(`https://jsonplaceholder.typicode.com/users`)
        const result = await response.json()
        return result
    }
)

export default fetchUser