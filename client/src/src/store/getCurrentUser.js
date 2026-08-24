import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

let initialState = {
    loading : false,
    message : "",
    error   : ""
}

export const getCurrentUser = createAsyncThunk(
    'getuser',
     async ( _ , THUNKAPi) =>{
        try {
          let resp = await axios.get( `http://localhost:5000/user/Auth/getCurrent/user`, 
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

let getCurrentUserSlice = createSlice({
    name : 'getCurrentUser',
    initialState,
    reducers : {},
    extraReducers : (builder)=>{
        builder 

            .addCase(getCurrentUser.pending, (state)=>{
                state.loading = true
            })
            .addCase(getCurrentUser.fulfilled,(state,action)=>{
                 state.loading = false 
                 state.message = action.payload.message
                 state.error   = ""
                 state.user    = action.payload.User
            }) 
            .addCase(getCurrentUser.rejected, (state, action)=>{
                 state.loading = false,
                 state.error = action.payload
            });
    }
})

export default getCurrentUserSlice.reducer;