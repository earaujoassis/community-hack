import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose, combineReducers } from 'redux';
import thunk from 'redux-thunk';

import App from './app';
import reducers from './stores/reducers';
import wsMiddleware from './utils/ws-middleware';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const rootReducer = combineReducers({
  root: reducers
});

const store = createStore(
  rootReducer,
  composeEnhancers(
    applyMiddleware(thunk, wsMiddleware())
  )
);

const app = (
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>
);

document.addEventListener('DOMContentLoaded', () => {
  const div = document.createElement('div');
  div.className = 'application-root';
  ReactDOM.render(app, document.body.appendChild(div));
});
