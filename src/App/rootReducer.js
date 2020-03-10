import { combineReducers } from '@reduxjs/toolkit';

import app from './appSlice';
import editProfile from '../modules/editProfile/editProfileSlice';
import profile from '../modules/profile/profileSlice';
import auth from '../modules/auth/authSlice';

export default combineReducers({ app, editProfile, profile, auth });
