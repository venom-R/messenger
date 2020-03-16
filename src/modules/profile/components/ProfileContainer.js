import React, { useEffect, useMemo } from 'react';
import { shallowEqual, useDispatch, useSelector } from 'react-redux';
import { bindActionCreators } from 'redux';

import Profile from './Profile';

import { profileSelector } from '../profileSelectors';
import { authUserSelector } from '../../auth/authSelectors';
import { closeProfile, fetchProfileData } from '../profileSlice';

const ProfileContainer = () => {
  const authUser = useSelector(authUserSelector, shallowEqual);
  const { uid, loading, data, error } = useSelector(profileSelector, shallowEqual);
  const dispatch = useDispatch();
  const actions = bindActionCreators({ closeProfile }, dispatch);
  const isAuthUser = useMemo(() => authUser.uid === uid, [authUser.uid, uid]);

  useEffect(() => {
    if (!isAuthUser) {
      dispatch(fetchProfileData(uid));
    }
  }, [uid, isAuthUser, dispatch]);

  return (
    <Profile
      loading={loading}
      error={error}
      userData={isAuthUser ? authUser : data}
      onClose={actions.closeProfile}
    />
  );
};

export default ProfileContainer;
