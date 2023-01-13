import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import authenticationReducer from './reducers/authenticationReducer';
import cartReducer, { CartState } from './reducers/cartReducer';
import productReducer from './reducers/productReducer';
import userReducer from './reducers/userReduer';
import categoryReducers from './reducers/categoryReducers'


let preCart:CartState ={
  cart:[]
}

const getCart = localStorage.getItem('cart')
if(!!getCart){
  preCart = JSON.parse(getCart)
}

const preloadedState = {
  cartReducer: preCart
}
const saveState = (state:RootState)=>{
  try {
    const cartReducer = JSON.stringify(state.cartReducer)
    localStorage.setItem('cart', cartReducer)
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
    preloadedState:preloadedState
  });
}

const store = createStore()
store.subscribe(()=>saveState(store.getState()))
export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
