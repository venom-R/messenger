import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isVisible: false,
};

const profile = createSlice({
  name: 'profile',
  initialState,
  reducers: {
    openProfile(state, action) {
      state.isVisible = true;
    },
    closeProfile(state, action) {
      state.isVisible = false;
    },
  },
});

export const { openProfile, closeProfile } = profile.actions;

export default profile.reducer;
