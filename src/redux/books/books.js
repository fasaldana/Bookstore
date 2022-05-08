import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

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

export const addNewBook = createAsyncThunk('books/addNewBook', async (book) => {
  const response = await axios
    .post(`${booksUrl}/apps/orZh6Zhb7kYfqHuBMsh2/books/`, book)
    .catch((error) => {
      console.log(error);
    });
  return response.data;
});

export const bookSlice = createSlice({
  name: 'book',
  initialState: {
    value: [],
  },
  reducers: {
    addBook: (state, action) => {
      state.value.push(action.payload);
    },

    removeBook: (state, action) => {
      state.value = state.value.filter((book) => book.id !== action.payload.id);
    },
  },
  extraReducers(builder) {
    builder
      .addCase(fetchBooks.fulfilled, (state, action) => {
        state.value = state.value.concat(action.payload);
      })
      .addCase(addNewBook.fulfilled, (state, action) => {
        console.log(action.payload);
        state.value.push(action.payload);
      });
  },
});

export const { addBook, removeBook } = bookSlice.actions;

export default bookSlice.reducer;
