import React, { useState } from 'react';

import Navigation from '../../components/Navigation';
import Sidebar from '../../components/Sidebar';
import Chat from '../../components/Chat';
import Profile from '../../components/Profile';

import './Messenger.scss';

import EditProfileModal from '../../components/Modals/EditProfileModal'; // TODO

const Messenger = () => {
  const [isProfileOpen, setIsProfileOpen] = useState(false);

  const onProfileClose = () => {
    setIsProfileOpen(false);
  };

  return (
    <div className="Messenger">
      <Navigation />
      <div className="content">
        <Sidebar />
        <Chat />
        {isProfileOpen && <Profile onClose={onProfileClose} />}
      </div>
      <EditProfileModal visible={false} />
    </div>
  );
};

export default Messenger;
