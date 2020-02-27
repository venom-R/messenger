import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isModalVisible: false,
};

const editProfile = createSlice({
  name: 'editProfile',
  initialState,
  reducers: {
    openEditProfileModal(state) {
      state.isModalVisible = true;
    },
    closeEditProfileModal(state) {
      state.isModalVisible = false;
    },
  },
});

export const { openEditProfileModal, closeEditProfileModal } = editProfile.actions;

export default editProfile.reducer;
