import { createSlice } from '@reduxjs/toolkit';
import { THEMES } from '../constants/themes';

const initialState = {
  theme: THEMES.LIGHT,
  loading: false,
  error: null,
};

const app = createSlice({
  name: 'app',
  initialState,
  reducers: {
    setTheme(state, action) {
      state.theme = action.payload;
    },
    startLoading(state) {
      state.loading = true;
    },
    finishLoading(state) {
      state.loading = false;
    },
    setError(state, action) {
      state.error = action.payload;
    },
  },
});

export const { setTheme, startLoading, finishLoading, setError } = app.actions;

export default app.reducer;
