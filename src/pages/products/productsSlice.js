import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { productsData } from "../../fakeData";
import Repository from "../../fakeApi/repository";

export default createSlice({
  name: "productList",
  initialState: {
    status: "idle",
    productsList: [],
  },
  reducers: {
    // IMMER
    addProduct: (state, action) => {
      state.push(action.payload);
    }, // action creators
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.pending, (state, action) => {
        state.status = "loading";
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        console.log("[action]", action);
        state.productsList = action.payload;
        state.status = "idle";
      });
  },
});

export const fetchProducts = createAsyncThunk("products/fetchProducts", () => {
  let productRepository = new Repository("api/v1/products");
  const res = productRepository.getAll("products");
  return res;
});

//products/fetchProducts/pending || khi vừa gửi request
//products/fetchProducts/fullfiled || khi gửi xong request
//products/fetchProducts/rejected || khi gửi request bị lỗi
