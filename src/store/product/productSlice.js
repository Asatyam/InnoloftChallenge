import { createSlice } from '@reduxjs/toolkit';
import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
  status: 'idle',
  error: '',
  product: {},
};

export const productSlice = createSlice({
  name: 'product',
  initialState,

  reducers: {
    // increment: (state)=>{
    //     state.value += 1
    // }
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchProduct.pending, (state, action) => {
        state.status = 'loading';
      })
      .addCase(fetchProduct.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.product = action.payload;
      })
      .addCase(fetchProduct.rejected, (state,action)=>{
        state.status = 'failed'
        state.error = action.error.message;
      })
  },
});

export const fetchProduct = createAsyncThunk(
  'product/fetchProduct',
  async () => {
    const response = await axios.get('/api/product');
    return response.data.result;
  }
);

export const selectProduct = (state) => state.product.product;
