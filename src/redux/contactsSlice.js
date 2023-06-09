import { createSlice } from '@reduxjs/toolkit';


// import { useSelector } from 'react-redux';
const INITIAL_CONTAСTS_STATE = {
  items: [],
  filter: '',
};
const contactsSlice = createSlice({
  name: 'contacts',
  initialState: INITIAL_CONTAСTS_STATE,
  reducers: {
    addContact: (state, action) => {
      state.items.push(action.payload);
    },
    deleteContact: (state, action) => {
      console.log(action);
      const filteredArr = state.items.filter(item => item.id !== action.payload);
      state.items = filteredArr;
   
    },
    addFilter: (state, action) => {
      state.filter = action.payload;
    },
  },
});


export const { addContact, deleteContact, addFilter } = contactsSlice.actions;
export default contactsSlice.reducer;

//Selectors

export const getContactsState = state => state.contacts.items;
export const getFilterState = state => state.contacts.filter;