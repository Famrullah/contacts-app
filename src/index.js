import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from "react-redux";
import App from './App';
import * as serviceWorker from './serviceWorker';
import axios from 'axios'
import store from "./store/index";
import './assets/scss/index.scss'

axios.defaults.baseURL = 'http://www.mocky.io/v2/';

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
