import React from 'react';
import ChatItem from './ChatItem';

const chatsData = [
  {
    id: 1,
    avatar: 'http://slek.laborasyon.com/demos/dark/dist/media/img/women_avatar1.jpg',
    fullName: 'Margaretta Worvell',
    body: 'I need you today',
    time: '11:05',
    unreadCounter: 3,
  },
  {
    id: 2,
    avatar: 'http://slek.laborasyon.com/demos/dark/dist/media/img/man_avatar1.jpg',
    fullName: 'Townsend Seary',
    body: "What's up, how are you?",
    time: '03:41',
    unreadCounter: 0,
  },
  {
    id: 3,
    avatar: 'http://slek.laborasyon.com/demos/dark/dist/media/img/women_avatar5.jpg',
    fullName: 'Mirabelle Tow',
    body: 'Where are you?',
    time: '09:23',
    unreadCounter: 0,
  },
];

const ChatList = props => {
  return (
    <div className="ChatList list-group">
      {chatsData.map(chatItem => (
        <ChatItem key={chatItem.id} data={chatItem} />
      ))}
    </div>
  );
};

export default ChatList;
