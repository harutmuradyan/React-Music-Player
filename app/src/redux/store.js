//import configureStore from @reduxjs/toolkit library
import { configureStore } from '@reduxjs/toolkit'
//import reducer songReducer
import songReducer from './slice/songSlice';
//import reducer modalReducer
import modalReducer from './slice/modalSlice';

//create store 
export const store = configureStore({
  reducer: {
    songs:songReducer,
    modal:modalReducer
  },
})