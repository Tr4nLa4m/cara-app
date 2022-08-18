import { configureStore } from "@reduxjs/toolkit";
import productsSlice from "../pages/products/productsSlice";
import cartSlice from "../pages/cart/cartSlice";



const store = configureStore({
    reducer: {
        productList: productsSlice.reducer,
        cart: cartSlice.reducer,
    }
});

export default store;