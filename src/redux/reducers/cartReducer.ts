import { createSlice, PayloadAction} from '@reduxjs/toolkit'

export interface CartItems {
    id:number
    title:string
    price:number
    images:string[]
    
}

// export interface Cart{
//     id:number
//     cart:CartItems[]
//     totalQuantity:number
//     totalPrice:number
// }

// export interface CartState {
//     cart: Cart[]
// }

const initialState:CartItems[] = [] 

// const initialState:CartItems[]=[]

const cartSlice = createSlice({
    name: 'cartSlice',
    initialState:initialState,
    reducers:{
        add (state, action:PayloadAction<CartItems>) {
            // const cartItems = state.cart.find(product=>product.id === action.payload.id)
            // if(cartItems){
            //     cartItems.totalQuantity += 1
            //     return
            // }

            state.push(action.payload)
        },
        remove (state, action) {
            return state.filter(item => item.id!== action.payload)
        }
    }
})

const cartReducer =  cartSlice.reducer
export const {add, } = cartSlice.actions;
export default cartReducer;