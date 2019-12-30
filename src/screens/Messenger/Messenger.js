import React from 'react';

import Navigation from '../../components/Navigation';
import Sidebar from '../../components/Sidebar';
import Chat from '../../components/Chat';

import './Messenger.scss';

const Messenger = () => {
  return (
    <div className="Messenger">
      <Navigation />
      <div className="content">
        <Sidebar />
        <Chat />
      </div>
    </div>
  );
};

export default Messenger;
