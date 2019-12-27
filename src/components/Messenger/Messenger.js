import React from 'react';

import NavigationBar from '../NavigationBar';
import Sidebar from '../Sidebar';
import Chat from '../Chat';

import './Messenger.scss';

const Messenger = () => {
  return (
    <div className="Messenger" data-theme="light">
      <NavigationBar />
      <div className="content">
        <Sidebar />
        <Chat />
      </div>
    </div>
  );
};

export default Messenger;
