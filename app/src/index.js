import React from 'react';
import ReactDOM from 'react-dom/client';
//import App component
import App from './App';
//import store from redux library
import { store } from './redux/store'
//import Provider from react-redux library , 
import { Provider } from 'react-redux'

//Provider -> store - global store for the project app

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
