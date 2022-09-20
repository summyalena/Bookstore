import { configureStore, createSlice } from '@reduxjs/toolkit';

const bookSlice = createSlice({
  name: 'Books',
  inititalState: [],
  reducers: {
    ADDBOOK(state, action) {
      state.Books.push(action.payload);
    },
    REMOVEBOOK(state, action) {
      state.Books.filter((Book) => Book.id !== action.payload);
    },
  },
});

export const { actions } = bookSlice;
const store = configureStore({
  reducer: bookSlice.reducer,
});

export default store;
