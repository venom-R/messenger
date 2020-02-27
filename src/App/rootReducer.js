import { combineReducers } from '@reduxjs/toolkit';

import app from './appSlice';
import editProfile from '../modules/editProfile/editProfileSlice';
import profile from '../modules/profile/profileSlice';

export default combineReducers({ app, editProfile, profile });
