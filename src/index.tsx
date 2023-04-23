import React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';

import {saveState, store, } from './redux/store';
import App from './App';
import reportWebVitals from './reportWebVitals';
import ToggleColorMode from './components/ChangeTheme';

import { fetchUser } from './redux/reducers/authenticationReducer'

if (localStorage.getItem('token') !== null && localStorage.getItem('user') !== null) {
  store.dispatch(fetchUser())
}

store.subscribe(() =>{
  saveState(store.getState())
  const state = store.getState();

  if(state.authenticationReducer.isAuthenticated){
    localStorage.setItem('token', JSON.stringify(state.authenticationReducer.token))
    localStorage.setItem('user', JSON.stringify(state.authenticationReducer.user))
  } else{
    localStorage.removeItem('token');
    localStorage.removeItem('user');
  }
}); 
const container = document.getElementById('root')!;
const root = createRoot(container);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <ToggleColorMode>
      <App />
      </ToggleColorMode>
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
