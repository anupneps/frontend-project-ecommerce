import React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';

import {saveState, store, } from './redux/store';
import App from './App';
import reportWebVitals from './reportWebVitals';
import ToggleColorMode from './components/ChangeTheme';


store.subscribe(() => saveState(store.getState()))
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
