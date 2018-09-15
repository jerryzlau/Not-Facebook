import React from 'react';
import { render } from "react-dom";
import { BrowserRouter } from "react-router-dom";
import {Provider} from 'react-redux';
import {createStore, applyMiddleware, compose} from 'redux';
import thunk from 'redux-thunk';
import App from './components/App';
import rootReducer from './reducers/rootReducer';

document.addEventListener('DOMContentLoaded', () => {
  const store = createStore(
    rootReducer,
    compose(
      applyMiddleware(thunk),
      window.devToolsExtension ? window.devToolsExtension() : f => f // to use chrome redux devtool
    )
  );
  
  
  render(
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
    , document.getElementById('app')
  );
});