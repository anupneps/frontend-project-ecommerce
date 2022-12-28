import { createSlice} from '@reduxjs/toolkit'


export interface Cart {
    id: number
    name: string
    price:number
    description:string
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
            state= state.filter(item => item.id !== action.payload)
        }
    }
  
})

const cartReducer =  cartSlice.reducer
export const {add, remove} = cartSlice.actions;
export default cartReducer;