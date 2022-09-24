/* eslint-disable no-param-reassign */
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const API = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/pgaZX3KccKEE6Meztdoy/books';

export const fetchBooks = createAsyncThunk('fetch-books', async () => {
  const response = await axios.get(API);
  const result = await response.data;
  const book = Object.entries(result).map((res) => ({
    id: res[0],
    ...res[1][0],
  }));
  return book;
});

export const postBooks = createAsyncThunk('post-data', async (data) => {
  const response = await fetch(API, {
    method: 'POST',
    body: JSON.stringify(data),
    headers: {
      'content-Type': 'application/json',
    },
  });

  return response;
});

export const removeBook = createAsyncThunk('delete/REMOVEBOOK', async (id) => {
  await fetch(`${API}/${id}`, {
    method: 'DELETE',
  });
  return id;
});

const initialState = {
  books: [],
};

const bookSlice = createSlice({
  name: 'books',
  initialState,
  reducers: {
    ADDBOOK(state, action) {
      return ([...state.books, action.payload]);
    },
    REMOVEBOOK(state, action) {
      return state.books.filter((book) => book.id !== action.payload.id);
    },
  },
  extraReducers: {
    [fetchBooks.fulfilled]: (state, action) => {
      state.loading = false;
      state.books = action.payload;
    },
    [postBooks.fulfilled]: (state, action) => {
      state.books = [...state.books, action.payload];
    },
  },
});

export const { actions } = bookSlice;

export default bookSlice.reducer;
