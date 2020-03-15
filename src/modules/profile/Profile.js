import React from 'react';
import PropTypes from 'prop-types';

import { Alert } from 'antd';
import ProfileLoading from './ProfileLoading';
import ProfileHeader from './ProfileHeader';
import ProfileContent from './ProfileContent';

import './Profile.scss';

const Profile = ({ userData, loading, error, onClose }) => {
  const content = loading ? <ProfileLoading /> : <ProfileContent userData={userData} />;

  return (
    <div className="Profile">
      <ProfileHeader onClose={onClose} />
      <div className="Profile__inner styled-scroll">{error ? <ProfileError /> : content}</div>
    </div>
  );
};

const ProfileError = () => (
  <Alert
    type="error"
    message="Server Error"
    description="Error occurred while fetching the data for this user."
    showIcon
  />
);

Profile.propTypes = {
  loading: PropTypes.bool,
  error: PropTypes.object,
  userData: PropTypes.object.isRequired,
  onClose: PropTypes.func.isRequired,
};

export default Profile;
