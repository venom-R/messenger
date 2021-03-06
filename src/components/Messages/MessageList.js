import React from 'react';
import MessageItem from './MessageItem';
import './MessageList.scss';

const authUser = {
  id: 0,
  fullName: 'Roma Teleshyk',
  avatar: null,
};

const messages = [
  {
    id: 1,
    user: {
      id: 2,
      fullName: 'Townsend Seary',
      avatar: 'http://slek.laborasyon.com/demos/dark/dist/media/img/man_avatar1.jpg',
    },
    timestamp: '03:41',
    content: "What's up, how are you?",
  },
  {
    id: 2,
    user: authUser,
    timestamp: '03:42',
    content: 'everything is fine, thx',
  },
];

const MessageList = props => {
  return (
    <div className="MessageList">
      {messages.map(messageItem => (
        <MessageItem
          key={messageItem.id}
          data={messageItem}
          outgoing={messageItem.user.id === authUser.id}
        />
      ))}
    </div>
  );
};

export default MessageList;
