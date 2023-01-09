import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit'
import { AxiosResponse } from 'axios'
import axiosInstance from '../../shared/axiosInstance'
import { Category } from '../../types/category'
import { Product } from '../../types/product'

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
export const fetchAllCategories = createAsyncThunk(
    'fetchAllCategories',
    async () => {
        try {
            const jsondata: AxiosResponse<Category, Category> = await axiosInstance.get('categories')
            return jsondata.data
        } catch (error: any) {
            throw new Error(error.message)
        }
    }
)

let initialState: Product[] = []

const categorySlice = createSlice({
    name: "categorySlice",
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
        build.addCase(fetchAllCategories.fulfilled,(state,action)=>{
                if (!action.payload) {
                    return state
                } else{
                    // state = action.payload.name
                }
            })
    }
})

const categoryReducers = categorySlice.reducer
export const { sortByName, sortByPrice } = categorySlice.actions
export default categoryReducers