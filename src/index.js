import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux';
import UserListing from './pages/Users';
import { configureStore } from './reduxTest/store/store';

const store = configureStore();
ReactDOM.render(
  <React.StrictMode>
    <Provider store = {store}>

      <UserListing/>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
