import { combineReducers } from "redux";
import productsSlice from "../pages/products/productsSlice";

export default combineReducers({
    reducer: {
        products: productsSlice.reducer,
      },
})