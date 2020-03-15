import React from 'react';
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

export default ProfileHeader;
