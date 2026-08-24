import { configureStore }  from "@reduxjs/toolkit";
import productsSlice       from "./productSlice.js";
import searchProductsSlice from "../store/searchProducts.js"; 
import userRegisterSlice   from '../store/RegisterUserSlice.js';
import userLoginSlice      from '../store/loginUserSlice.js';
import userLogoutSlice     from '../store/logoutUserSlice.js';
import getCurrentUserSlice from '../store/getCurrentUser.js';
import cartReducer         from "./cartSlice.js";

export const store = configureStore({
    reducer : {
            products        : productsSlice,
            searchProducts  : searchProductsSlice,
            userRegister    : userRegisterSlice,
            userLogin       : userLoginSlice,
            userLogout      : userLogoutSlice,
            getCurrentUser  : getCurrentUserSlice,
            cart            : cartReducer

    }
});