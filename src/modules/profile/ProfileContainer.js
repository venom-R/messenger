import React from 'react';
import Profile from './Profile';
import { useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';
import { closeProfile } from './profileSlice';

const ProfileContainer = () => {
  const dispatch = useDispatch();
  const actions = bindActionCreators({ closeProfile }, dispatch);
  return <Profile onClose={actions.closeProfile} />;
};

export default ProfileContainer;
