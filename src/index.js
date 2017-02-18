/*jshint esversion: 6 */
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import promise from 'redux-promise';
import thunk from 'redux-thunk';
import reducers from './reducers';
import App from './App';
// Stylesheets
import './style/App.scss';

const store = createStore(
  reducers,
  applyMiddleware(promise, thunk)
);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>
  , document.getElementById('root')
);
