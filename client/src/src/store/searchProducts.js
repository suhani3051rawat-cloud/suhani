import {
    createSlice,
    createAsyncThunk,
} from "@reduxjs/toolkit";
import {api} from '../api/axios.js';

let initialState = {
    products: [] ,
    search  : "",
    loading : false,
    error   : null
}
export const searchProducts = createAsyncThunk(
    'search/items',
    async (search, { rejectWithValue }) => {
        try {
            const response = await api.get("/search/product", {
                params: {
                    search
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

let searchProductsSlice = createSlice({
    name : 'products',
    initialState,
    reducers : {},
    extraReducers : (builder)=>{
        builder 
        .addCase(searchProducts.pending, (state)=>{
            state.loading = true
        })
        .addCase(searchProducts.fulfilled,(state,action)=>{
            state.products = action.payload.product,
            state.search   = action.meta.arg,
            state.loading  = false ,
            state.error    = null
        }) 
        .addCase(searchProducts.rejected, (state, action)=>{
            state.loading = false,
            state.error = action.payload
        });
    }
})
export default searchProductsSlice.reducer;
