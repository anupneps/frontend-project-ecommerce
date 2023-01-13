import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import authenticationReducer from './reducers/authenticationReducer';
import cartReducer, { CartState } from './reducers/cartReducer';
import productReducer from './reducers/productReducer';
import userReducer from './reducers/userReduer';
import categoryReducers from './reducers/categoryReducers'
// import { AuthState } from '../types/authorization';
// import { Users } from '../types/users';



let preCart: CartState = {
  cart: []
}
// let preUser: Users = {
//     id :null,
//     email:'',
//     password:'',
//     name:'',
//     role:'',
//     avatar:'',
//     access_token:''
// }

const getCart = localStorage.getItem("cart")
// const getUser = localStorage.getItem("user")

if (!!getCart) {
  preCart = JSON.parse(getCart)
}
// if (!!getUser) {
//   preUser = JSON.parse(getUser)
// }

const preloadedState = {
  cartReducer: preCart,
}

export const saveState = (state: RootState) => {
  try {
    const cartLocal = JSON.stringify(state.cartReducer)
    // const authLocal = JSON.stringify(state.authenticationReducer)
    localStorage.setItem("cart", cartLocal)
    // localStorage.setItem("user", authLocal)
  } catch (error) {
    console.log(error)
  }
}

export const createStore = () => {
  return configureStore({
    reducer: {
      productReducer,
      cartReducer,
      userReducer,
      authenticationReducer,
      categoryReducers
    },
    preloadedState: preloadedState,
  });
}

export const store = createStore()
export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
