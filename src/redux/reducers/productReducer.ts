import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";

import { Product } from "../../types/product";

const initialState:Product[] = []

export const fetchAllProducts = createAsyncThunk(
    "fetchAllProducts", 
    async () =>{
        try {
            const jsondata = await fetch("https://fakestoreapi.com/products")
            const data:Product[]|Error = await jsondata.json()
            return data
        } catch (e:any) {
            throw new Error(e.message)
        }
    }
)


const productSlice = createSlice({
    name:"productSlice",
    initialState:initialState,
    reducers:{
         sortByName:(state, action:PayloadAction<'asc'|'desc'>)=>{ 
            if(action.payload === 'asc'){
                state.sort((a,b)=>a.title.localeCompare(b.title))
            } else{
            state.sort((a,b)=> b.title.localeCompare(a.title))
            }
        },
        deleteItem: (state, action:PayloadAction<number>) => {
            return state.filter(item => item.id !== action.payload) 
        }, 
        modifyItem:(state, action:PayloadAction<Product>)=>{
            const foundItem = state.find(item => item.id === action.payload.id)
            if(foundItem){
                return state.map(item => {
                    if(item.id === action.payload.id){
                        item = action.payload
                    }
                    return item
                })
            }else{
                throw new Error("Item not found")
            }
        },
        sortByPrice: (state, action:PayloadAction<'asc'>)=>{
            if(action.payload === 'asc'){
               state.sort((a,b)=>(a.price)-(b.price)) 
            }
            
        }
        
    }, 
    extraReducers: (build) => { 
        build.addCase(fetchAllProducts.fulfilled, (state, action)=>{
           console.log("no-error")
           if(action.payload && "message" in action.payload){
            return state
           }else if (!action.payload){
            return state
           }
           return action.payload
        })
        build.addCase(fetchAllProducts.rejected, (state, action)=>{
            console.log("Error in fetching data")
            return state
        })
        build.addCase(fetchAllProducts.pending, (state, action)=>{
            console.log("Data is loading")
            return state
        })
    }
})

const productReducer = productSlice.reducer
export const{sortByName, deleteItem, modifyItem, sortByPrice} = productSlice.actions
export default productReducer


