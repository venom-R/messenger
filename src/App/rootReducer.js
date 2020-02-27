import { combineReducers } from '@reduxjs/toolkit';
import editProfile from '../modules/editProfile/editProfileSlice';
import profile from '../modules/profile/profileSlice';

export default combineReducers({ editProfile, profile });
