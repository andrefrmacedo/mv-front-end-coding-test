import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import configureStore from './store';
import App from './containers/app';

ReactDOM.render(
  <Provider store={ configureStore() }>
    <App />
  </Provider>, 
  document.getElementById('app')
);