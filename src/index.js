/*jshint esversion: 6 */
import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, browserHistory } from 'react-router';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import promise from 'redux-promise';
import thunk from 'redux-thunk';
import reducers from './reducers';
import App from './App';
import Cms from './components/cms';
// Stylesheets
import './style/App.scss';

const store = createStore(
  reducers,
  applyMiddleware(promise, thunk)
);

ReactDOM.render(
  <Provider store={store}>
    <Router history={browserHistory}>
      <Route path="/" component={App} />
      <Route path="/cms" component={Cms} />
    </Router>
  </Provider>
  , document.getElementById('root')
);
