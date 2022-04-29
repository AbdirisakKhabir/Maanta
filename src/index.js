import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { createStore, combineReducers } from 'redux'
import { Provider } from 'react-redux';
import { TeamReducer }  from './store/TeamReducer';
import './index.css';
import App from './App';


const store = createStore(combineReducers({ TeamReducer }));

ReactDOM.render(
  <React.StrictMode>
 
    <BrowserRouter>
    <Provider store = {store} >
    <App />
    </Provider>
    </BrowserRouter>

  </React.StrictMode>,
  document.getElementById('root')
);

