import { createSlice } from '@reduxjs/toolkit';

export const categoriesSlice = createSlice({
  name: 'categories',
  initialState: {
    value: '',
  },
  reducers: {
    checkStatus: (state) => {
      state.value = 'Under construction :/';
    },
  },
});

export const { checkStatus } = categoriesSlice.actions;

export default categoriesSlice.reducer;
