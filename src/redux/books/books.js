/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';

// const initialState = [
//   {
//     id: 1,
//     title: 'life',
//     author: 'okolike',
//   },
//   {
//     id: 2,
//     title: 'life',
//     author: 'okolike',
//   },
// ];
const bookSlice = createSlice({
  name: 'books',
  initialState: [],
  reducers: {
    ADDBOOK(state, action) {
      return ([...state, action.payload]);
    },
    REMOVEBOOK(state, action) {
      return state.filter((book) => book.id !== action.payload.id);
    },
  },
});

export const { actions } = bookSlice;

export default bookSlice.reducer;
