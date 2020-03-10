import { createSlice } from '@reduxjs/toolkit';
import Auth from '../../firebase/Auth';
import DB from '../../firebase/DB';

const initialState = {
  user: JSON.parse(localStorage.getItem('authUser')),
};

const auth = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setAuthUser(state, action) {
      state.user = action.payload;
    },
  },
});

export const { setAuthUser } = auth.actions;

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

export const onAuthUserListener = () => async dispatch => {
  return Auth.onAuthUserListener(async user => {
    let authUser = authUserFactory(user);

    if (authUser) {
      try {
        const userDoc = await DB.getUser(authUser.uid);
        if (userDoc.exists) {
          authUser = { ...authUser, ...userDoc.data() };
          localStorage.setItem('authUser', JSON.stringify(authUser));
        } else {
          console.error(`DB.getUser: user ${authUser.uid} is not found.`);
        }
      } catch (error) {}
    } else {
      localStorage.removeItem('authUser');
    }

    dispatch(setAuthUser(authUser));
  });
};

export default auth.reducer;
