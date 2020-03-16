import { createSlice } from '@reduxjs/toolkit';
import DB from '../../firebase/DB';

const initialState = {
  isVisible: false,
  uid: null,
  loading: false,
  data: {},
  error: null,
};

const profile = createSlice({
  name: 'profile',
  initialState,
  reducers: {
    openProfile(state, action) {
      state.isVisible = true;
      state.uid = action.payload;
    },
    closeProfile(state) {
      state.isVisible = false;
      state.uid = null;
      state.error = null;
    },
    fetchProfileDataRequest(state) {
      state.loading = true;
      state.error = null;
    },
    fetchProfileDataSuccess(state, action) {
      state.loading = false;
      state.data = action.payload;
    },
    fetchProfileDataFailure(state, action) {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export const {
  openProfile,
  closeProfile,
  fetchProfileDataRequest,
  fetchProfileDataSuccess,
  fetchProfileDataFailure,
} = profile.actions;

export const fetchProfileData = uid => async dispatch => {
  try {
    dispatch(fetchProfileDataRequest());
    const userDoc = await DB.getUser(uid);
    dispatch(fetchProfileDataSuccess(userDoc.data()));
  } catch (error) {
    dispatch(fetchProfileDataFailure(error));
  }
};

export default profile.reducer;
