import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { v4 as uuid } from 'uuid';

const booksUrl = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi';

export const fetchBooks = createAsyncThunk('books/fetchBooks', async () => {
  try {
    const response = await axios.get(`${booksUrl}/apps/orZh6Zhb7kYfqHuBMsh2/books/`);
    const data = await response.data;
    const books = [];
    Object.entries(data).forEach((book) => {
      const bookObj = Object.assign({ id: book[0] }, ...book[1]);
      books.push(bookObj);
    });
    return books;
  } catch (error) {
    return error.message;
  }
});

export const addNewBook = createAsyncThunk('books/addNewBook', async ({ title, author }) => {
  const response = await axios.post(`${booksUrl}/apps/orZh6Zhb7kYfqHuBMsh2/books/`, {
    item_id: uuid(),
    title,
    author,
    category: 'not yet',
  });
  return response.data;
});

export const deleteBook = createAsyncThunk('books/deleteBook', async ({ id }) => {
  await axios
    .delete(`${booksUrl}/apps/orZh6Zhb7kYfqHuBMsh2/books/${id}`)
    .catch((error) => console.log(error));
  return { id };
});

export const bookSlice = createSlice({
  name: 'book',
  initialState: {
    value: [],
  },
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchBooks.fulfilled, (state, action) => {
        state.value = state.value.concat(action.payload);
      })
      .addCase(addNewBook.fulfilled, (state, action) => {
        console.log(action.payload);
        state.value.push(action.payload);
      })
      .addCase(deleteBook.fulfilled, (state, action) => {
        const index = state.value.findIndex(({ id }) => id === action.payload.id);
        state.value.splice(index, 1);
      });
  },
});

export const { addBook, removeBook } = bookSlice.actions;

export default bookSlice.reducer;
