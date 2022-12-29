import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import authenticationReducer from './reducers/AuthenticationReducer';
import cartReducer from './reducers/cartReducer';
import productReducer from './reducers/productReducer';
// import userReducer from './reducers/userReduer';

export const store = configureStore({
  reducer: {
    productReducer,
    cartReducer,
    // userReducer,
    authenticationReducer
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
