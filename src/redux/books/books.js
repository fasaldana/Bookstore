import { createSlice } from '@reduxjs/toolkit';

export const bookSlice = createSlice({
  name: 'book',
  initialState: {
    value: [
      {
        id: 1,
        title: 'The Hunger Games',
        author: 'Suzanne Collins',
      },
      {
        id: 2,
        title: 'Dune',
        author: 'Frank Herbert',
      },
      {
        id: 3,
        title: 'Capital in the Twenty-First Century',
        author: 'Suzanne Collins',
      },
    ],
  },
  reducers: {
    addBook: (state, action) => {
      state.value.push(action.payload);
    },

    removeBook: (state, action) => {
      state.value = state.value.filter((book) => book.id !== action.payload.id);
    },
  },
});

export const { addBook, removeBook } = bookSlice.actions;

export default bookSlice.reducer;
