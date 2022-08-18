import { createSlice } from '@reduxjs/toolkit';
import {cartsData} from "../../fakeData";


export default createSlice({
  name: 'cart',
  initialState: cartsData,
  reducers: { // IMMER
    addProduct: (state, action) => {
      state.push(action.payload);
    }, // action creators
    
  }
});

export function addToCart(productCart){ //thunk action creator
    return function addToCartThunk(dispatch, getState){
        console.log(productCart);
    };
}