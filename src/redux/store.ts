import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import authenticationReducer from './reducers/authenticationReducer';
import cartReducer from './reducers/cartReducer';
import productReducer from './reducers/productReducer';
import userReducer from './reducers/userReduer';
import categoryReducers from './reducers/categoryReducers'

export const createStore = () => {
  return configureStore({
    reducer: {
      productReducer,
      cartReducer,
      userReducer,
      authenticationReducer,
      categoryReducers
    },
  });
}

const store = createStore()
export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
