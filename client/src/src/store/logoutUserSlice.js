import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

let initialState = {
    loading : false,
    message : "",
    error   : ""
}

export const userLogout = createAsyncThunk(
    'user/logout',
     async ( _ , THUNKAPi) =>{
        try {
          let resp = await axios.post(`http://localhost:5000/api/auth/logout/user`,{}, 
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

let userLogoutSlice = createSlice({
    name : 'userLogout',
    initialState,
    reducers : {},
    extraReducers : (builder)=>{
        builder 

    .addCase(userLogout.pending, (state)=>{
                state.loading = true
            })
            .addCase(userLogout.fulfilled,(state,action)=>{
                 state.loading = false 
                 state.message = action.payload.message
                 state.error   = ""
            }) 
            .addCase(userLogout.rejected, (state, action)=>{
                 state.loading = false,
                 state.error = action.payload
            });
    }
})

export default userLogoutSlice.reducer; 