import { createSlice } from "@reduxjs/toolkit";
import { createAsyncThunk } from "@reduxjs/toolkit";


const initialState = {
    status:'idle',
    value:0,
    product: {}
};

export const productSlice = createSlice({
    name:'Product',
    initialState,

    reducers: {
        // increment: (state)=>{
        //     state.value += 1
        // }
    },
    // extraReducers: (builder)=>{
    //     builder.addCase()
    // }
})



export const selectProduct = (state)=>state.product;