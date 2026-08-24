import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

let initialState = {
    loading : false,
    user    : null,
    message : "",
    error   : ""
}

export const userLogin = createAsyncThunk(
    'user/login',
     async (userLogin, THUNKAPi) =>{
        try {
          let resp = await axios.post( `http://localhost:5000/user/Auth/login/user`, 
            userLogin,
            {
                withCredentials : true
            }
          )  
         return resp.data;
        } catch (error) {
            return THUNKAPi.rejectWithValue(
                error.response?.data || error.message
            )
        }
     }
)

let userLoginSlice = createSlice({
    name : 'userLogin',
    initialState,
    reducers : {},
    extraReducers : (builder)=>{
        builder 

    .addCase(userLogin.pending, (state)=>{
                state.loading = true
            })
            .addCase(userLogin.fulfilled,(state,action)=>{
                 state.loading = false 
                 state.message = action.payload.message
                 state.error   = ""
                 state.user    = action.payload.User
            }) 
            .addCase(userLogin.rejected, (state, action)=>{
                 state.loading = false,
                 state.error = action.payload
            });
    }
})

export default userLoginSlice.reducer;