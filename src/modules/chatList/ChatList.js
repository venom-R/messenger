import React from 'react';

import ChatItem from './ChatItem';
import SidebarContent from '../sidebar/SidebarContent';
import { Button, Tooltip } from 'antd';
import { FontAwesomeIcon as Icon } from '@fortawesome/react-fontawesome';

const chatsData = [
  {
    id: 1,
    photo: 'http://slek.laborasyon.com/demos/dark/dist/media/img/women_avatar1.jpg',
    firstName: 'Margaretta',
    lastName: 'Worvell',
    body: 'I need you today',
    time: '11:05',
    unreadCounter: 3,
  },
  {
    id: 2,
    photo: 'http://slek.laborasyon.com/demos/dark/dist/media/img/man_avatar1.jpg',
    firstName: 'Townsend',
    lastName: 'Seary',
    body: "What's up, how are you?",
    time: '03:41',
    unreadCounter: 0,
  },
  {
    id: 3,
    photo: 'http://slek.laborasyon.com/demos/dark/dist/media/img/women_avatar5.jpg',
    firstName: 'Mirabelle',
    lastName: 'Tow',
    body: 'Where are you?',
    time: '09:23',
    unreadCounter: 0,
  },
];

const ChatList = props => {
  const headerButtons = [
    <Tooltip placement="bottom" title="New group">
      <Button className="mr-2">
        <Icon icon={['fas', 'user-friends']} />
      </Button>
    </Tooltip>,
    <Tooltip placement="bottom" title="New chat">
      <Button>
        <Icon icon={['fas', 'plus-circle']} />
      </Button>
    </Tooltip>,
  ];

  return (
    <SidebarContent title="Chats" extra={headerButtons}>
      <div className="ChatList list-group">
        {chatsData.map(chatItem => (
          <ChatItem key={chatItem.id} data={chatItem} />
        ))}
      </div>
    </SidebarContent>
  );
};

export default ChatList;
