//import createSlice from @reduxjs/toolkit library
import { createSlice } from '@reduxjs/toolkit';

//create Initalestate
const initialState = {
  isOpen: false,
};

//create Slice Modal
const modalSlice = createSlice({
  name: 'modal',
  initialState,
  reducers: {
    //create oppenModal reducer 
    openModal: (state, action) => {
      state.isOpen = true;
      //console output message AddAll functional done
      console.log("Add All")
    },
    //create closeModal reduces
    closeModal: (state, action) => {
      state.isOpen = false
    },
  },
});

//export functions openModal and closeModal
export const { openModal, closeModal } = modalSlice.actions;
//export reducer modalSlice
export default modalSlice.reducer;