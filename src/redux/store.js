import { configureStore, createSlice } from '@reduxjs/toolkit';

const initialState = {
  inputValue: '',
};

const inputSlice = createSlice({
  name: 'input',
  initialState,
  reducers: {
    updateInputValue: (state, action) => {
        return { ...state, inputValue: action.payload };
    },
  },
});

export const { updateInputValue } = inputSlice.actions;

const store = configureStore({
  reducer: {
    input: inputSlice.reducer,
  },
});

export default store;
