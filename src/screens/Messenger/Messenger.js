import React, { useState } from 'react';

import Navigation from '../../components/Navigation';
import Sidebar from '../../components/Sidebar';
import Chat from '../../components/Chat';
import Profile from '../../components/Profile';

import './Messenger.scss';

const Messenger = () => {
  const [isProfileOpen, setIsProfileOpen] = useState(true);

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
    </div>
  );
};

export default Messenger;
