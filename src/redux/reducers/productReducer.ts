import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { AxiosResponse } from "axios";

import axiosInstance from "../../shared/axiosInstance";
import { CreateProduct } from "../../types/createProduct";
import { ModifyProduct, Product } from "../../types/product";

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

export const createProduct = createAsyncThunk(
    'createProduct',
    async (product: CreateProduct) => {
        try {
            const jsondata: AxiosResponse<Product, any> = await axiosInstance.post('products', product)
            console.log('success')
            return jsondata.data
        } catch (error: any) {
            console.log(error.message)
            throw new Error(error.message)
        }
    }
)

export const modifyProduct = createAsyncThunk(
    'modifyProduct',
    async ({ id, update }: ModifyProduct) => {
        try {
            const jsondata: AxiosResponse<Product, any> = await axiosInstance.put(`products/${id}`, update)
            return jsondata.data
        } catch (error: any) {
            throw new Error(error.message)
        }
    }
)

export const deleteAproduct = createAsyncThunk(
    'deleteProduct',
    async (id: number) => {
        try {
            const jsondata: AxiosResponse<boolean> = await axiosInstance.delete(`products/${id}`)
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
        sortByName: (state, action: PayloadAction<'asc' | 'desc'>) => {
            if (action.payload === 'asc') {
                state.sort((a, b) => a.title.localeCompare(b.title))
            } else {
                state.sort((a, b) => b.title.localeCompare(a.title))
            }
        },
        sortByPrice: (state, action: PayloadAction<'asc'>) => {
            if (action.payload === 'asc') {
                state.sort((a, b) => (a.price) - (b.price))
            }
        }
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
            .addCase(createProduct.fulfilled, (state, action) => {
                if (action.payload) {
                    state.push(action.payload)
                } else {
                    return state
                }
            })
            .addCase(deleteAproduct.fulfilled, (state, action) => {
                if (action.payload === true) {
                    return state
                }
                return { ...state }
            })
            .addCase(modifyProduct.fulfilled, (state, action) => {
                return state.map((product) => {
                    if (product.id === action.payload.id) {
                        return action.payload
                    }
                    return product
                })
            })
    }
})

const productReducer = productSlice.reducer
export const { sortByName, sortByPrice } = productSlice.actions
export default productReducer


