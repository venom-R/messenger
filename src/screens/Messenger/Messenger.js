import React, { useState } from 'react';

import Navigation from '../../modules/navigation/Navigation';
import Sidebar from '../../components/Sidebar';
import Chat from '../../components/Chat';
import Profile from '../../components/Profile';
import EditProfileModal from '../../modules/editProfile/EditProfileModal';

import './Messenger.scss';

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
      <EditProfileModal />
    </div>
  );
};

export default Messenger;
