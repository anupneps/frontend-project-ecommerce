import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { AxiosResponse } from "axios";

import axiosInstance from "../../shared/axiosInstance";
import { Product } from "../../types/product";

const initialState: Product[] = []

export const fetchAllProducts = createAsyncThunk(
    'fetchAllProducts',
    async () => {
        try {
            const jsondata: AxiosResponse<Product[], Product> = await axiosInstance.get('products')
            return jsondata.data
        } catch (error: any) {
            throw new Error(error.message)
        }
    }
)

export const deleteAproduct = createAsyncThunk(
    'deleteProduct',
    async (product: Product) => {
        try {
            const jsondata: AxiosResponse<boolean> = await axiosInstance.delete(`products/${product.id}`)
            return jsondata.data
        } catch (error: any) {
            throw new Error(error.message)
        }
    }
)

const productSlice = createSlice({
    name: "productSlice",
    initialState: initialState,
    reducers: {
       
    },
    extraReducers: (build) => {
        build.addCase(fetchAllProducts.fulfilled, (state, action) => {
            if (action.payload && "message" in action.payload) {
                return state
            } else if (!action.payload) {
                return state
            }
            return action.payload
        })
        .addCase(fetchAllProducts.rejected, (state, action) => {
            return state
        })
        .addCase(fetchAllProducts.pending, (state, action) => {
            return state
        })
        .addCase(deleteAproduct.fulfilled,(state, action)=>{
            return state
        })
        
    }
})

const productReducer = productSlice.reducer
export const {} = productSlice.actions
export default productReducer


