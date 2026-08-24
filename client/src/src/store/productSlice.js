import {
    createSlice,
    createAsyncThunk,
} from "@reduxjs/toolkit";
import {api} from '../api/axios.js';

let initialState = {
    products: [] ,
    loading : false,
    error   : null
}
export const products = createAsyncThunk(
    '/get/products',
    async (category, { rejectWithValue }) => {
        try {
            const response = await api.get("/products/list", {
                params: {
                    category
                }
            });
            return response.data;
        } catch (error) {
                return rejectWithValue(
                error.response?.data?.message ||
                "Loading...."
            );
        }
});

let productsSlice = createSlice({
    name : 'products',
    initialState,
    reducers : {},
    extraReducers : (builder)=>{
        builder 
        .addCase(products.pending, (state)=>{
            state.loading = true
        })
        .addCase(products.fulfilled,(state,action)=>{
            state.products = action.payload.fetchProductsFromProductModel,
            state.loading  = false ,
            state.error    = null
        }) 
        .addCase(products.rejected, (state, action)=>{
            state.loading = false,
            state.error = action.payload
        });
    }
})
export default productsSlice.reducer;
