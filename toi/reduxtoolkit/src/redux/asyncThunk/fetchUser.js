import { createAsyncThunk } from "@reduxjs/toolkit";

export const fetchUser = createAsyncThunk(
    "fetchUser/users",
    async function(){
        const response = await fetch(`https://jsonplaceholder.typicode.com/users`)

        const result = await response.json()

        return result
    }
)