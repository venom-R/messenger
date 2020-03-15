import React from 'react';
import PropTypes from 'prop-types';

import { Button } from 'antd';
import { FontAwesomeIcon as Icon } from '@fortawesome/react-fontawesome';

const ProfileHeader = ({ onClose }) => {
  return (
    <header className="Profile__header">
      <h2 className="Profile__main-title">Profile</h2>
      <Button onClick={onClose}>
        <Icon icon={['fas', 'times']} className="text_danger" />
      </Button>
    </header>
  );
};

ProfileHeader.propTypes = {
  onClose: PropTypes.func.isRequired,
};

export default ProfileHeader;
