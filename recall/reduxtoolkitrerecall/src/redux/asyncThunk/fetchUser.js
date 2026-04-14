import { createAsyncThunk } from "@reduxjs/toolkit";

const fetchUser = createAsyncThunk("user/fetch", async () => {
  const response = await fetch(`https://jsonplaceholder.typicode.com/users`);
  const result = await response.json();
  return result;
});

export default fetchUser;
