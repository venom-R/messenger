import { createSlice } from '@reduxjs/toolkit';
import { THEMES } from '../constants/themes';

const initialState = {
  theme: THEMES.LIGHT,
};

const app = createSlice({
  name: 'app',
  initialState,
  reducers: {
    setTheme(state, action) {
      state.theme = action.payload;
    },
  },
});

export const { setTheme } = app.actions;

export default app.reducer;
