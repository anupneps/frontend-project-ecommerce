import { createSlice} from '@reduxjs/toolkit'

export interface Cart {
    id:number
    title:string
    price:number
    images:string[]
}

const initialState:Cart[] = []

const cartSlice = createSlice({
    name: 'cartSlice',
    initialState:initialState,
    reducers:{
        add (state, action) {
            state.push(action.payload)
        },
        remove(state, action) {
            return state.filter(item => item.id !== action.payload)
        }
    }
})

const cartReducer =  cartSlice.reducer
export const {add, remove} = cartSlice.actions;
export default cartReducer;