import React from 'react';
import ChatHeader from './ChatHeader';
import ChatBody from './ChatBody';
import ChatFooter from './ChatFooter';
import './Chat.scss';

const chatData = {
  partner: {
    id: 3,
    fullName: 'Mirabelle Tow',
    avatar: 'http://slek.laborasyon.com/demos/dark/dist/media/img/women_avatar5.jpg',
  },
};

const Chat = props => {
  return (
    <div className="Chat">
      <ChatHeader partner={chatData.partner} />
      <ChatBody />
      <ChatFooter />
    </div>
  );
};

export default Chat;
