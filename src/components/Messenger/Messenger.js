import React from 'react';

import NavigationBar from '../NavigationBar';
import Sidebar from '../Sidebar';

import './Messenger.scss';

const Messenger = () => {
  return (
    <div className="Messenger" data-theme="light">
      <NavigationBar />
      <div className="content">
        <Sidebar />
        <h2>Chat</h2>
      </div>
    </div>
  );
};

export default Messenger;
