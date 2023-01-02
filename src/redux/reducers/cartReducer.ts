import { createSlice, PayloadAction} from '@reduxjs/toolkit'
import { Product } from '../../types/product'

export interface CartItems extends Product {
    quantity: number
    subTotal:number
}

export type Cart = CartItems[]

interface CartState {
    cart:Cart
}

const initialState:CartState= {
    cart:[]
}

const cartSlice = createSlice({
    name: 'cartSlice',
    initialState:initialState,
    reducers:{
        add (state, action:PayloadAction<CartItems>) {
            const productInCart = state.cart.find(product=>product.id === action.payload.id)
            if(productInCart){
               productInCart.quantity +=1
               productInCart.subTotal= productInCart.price * productInCart.quantity
               return
            }
            state.cart.push({...action.payload, quantity:1, subTotal:action.payload.price})
        },
        remove (state:CartState, action:PayloadAction<CartItems>) {
        state.cart = state.cart.filter(product => product.id!== action.payload.id)
        },
        increment (state, action){
            const productToIncremenet = state.cart.find(product => product.id === action.payload.id)
            if(productToIncremenet){
                productToIncremenet.quantity = productToIncremenet.quantity+1
                productToIncremenet.subTotal= productToIncremenet.price * productToIncremenet.quantity
            }
        },
        decrement (state, action){
            const productToDecrement = state.cart.find(product => product.id === action.payload.id)
            if(productToDecrement && productToDecrement.quantity>1){
                productToDecrement.quantity = productToDecrement.quantity-1
                productToDecrement.subTotal= productToDecrement.price * productToDecrement.quantity
            }
        }
    }
})

const cartReducer =  cartSlice.reducer
export const {add, remove, increment, decrement} = cartSlice.actions;
export default cartReducer;