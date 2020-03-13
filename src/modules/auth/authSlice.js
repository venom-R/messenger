import { createSlice } from '@reduxjs/toolkit';
import Auth from '../../firebase/Auth';
import DB from '../../firebase/DB';

const initialState = {
  user: JSON.parse(localStorage.getItem('authUser')),
  error: null,
};

const auth = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setAuthUser(state, action) {
      state.user = action.payload;
    },
    setAuthError(state, action) {
      state.error = action.payload;
    },
  },
});

export const { setAuthUser, setAuthError } = auth.actions;

const authUserFactory = user => {
  if (user !== null) {
    const { uid, refreshToken, email, emailVerified, providerData } = user;
    return {
      uid,
      refreshToken,
      email,
      emailVerified,
      providerData,
    };
  }
  return null;
};

const attachUserDataToAuthUser = authUser => async dispatch => {
  if (authUser) {
    try {
      const userDoc = await DB.getUser(authUser.uid);
      if (userDoc.exists) {
        const userData = { ...authUserFactory(authUser), ...userDoc.data() };
        dispatch(setAuthUser(userData));
        localStorage.setItem('authUser', JSON.stringify(userData));
      } else {
        console.error(`DB.getUser: user ${authUser.uid} is not found.`);
        dispatch(setAuthUser(authUser));
      }
    } catch (error) {
      dispatch(setAuthError(error));
    }
  } else {
    localStorage.removeItem('authUser');
    dispatch(setAuthUser(null));
  }
};

export const onAuthUserListener = () => dispatch => {
  return Auth.onAuthUserListener(authUser => {
    dispatch(attachUserDataToAuthUser(authUser));
  });
};

export const updateAuthUserData = () => async dispatch => {
  try {
    const authUser = await Auth.getAuthUser();
    dispatch(attachUserDataToAuthUser(authUser));
  } catch (error) {
    dispatch(setAuthError(error));
  }
};

export default auth.reducer;
