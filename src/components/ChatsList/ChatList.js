import React from 'react';
import { ListGroup, ListGroupItem } from '../List';
import Avatar from '../Avatar';
import classNames from 'classnames';

import './ChatItem.scss';

const chatsData = [
  {
    id: 1,
    avatar: 'http://slek.laborasyon.com/demos/dark/dist/media/img/women_avatar1.jpg',
    title: 'Margaretta Worvell',
    body: 'I need you today',
    time: '11:05',
    unreadCounter: 3,
  },
  {
    id: 2,
    avatar: 'http://slek.laborasyon.com/demos/dark/dist/media/img/man_avatar1.jpg',
    title: 'Townsend Seary',
    body: "What's up, how are you?",
    time: '03:41',
    unreadCounter: null,
  },
  {
    id: 3,
    avatar: 'http://slek.laborasyon.com/demos/dark/dist/media/img/women_avatar5.jpg',
    title: 'Mirabelle Tow',
    body: 'Where are you?',
    time: '09:23',
    unreadCounter: null,
  },
];

const ChatList = props => {
  return (
    <ListGroup>
      {chatsData.map(chatItem => (
        <ChatItem key={chatItem.id} data={chatItem} />
      ))}
    </ListGroup>
  );
};

const ChatItem = ({ data }) => {
  const { avatar, title, body, time, unreadCounter } = data;
  const chatItemClassName = classNames({
    ChatItem: true,
    ChatItem_unread: !!unreadCounter,
  });
  return (
    <ListGroupItem className={chatItemClassName}>
      <div className="ListGroupItem__avatar">
        <Avatar src={avatar} alt={title} />
      </div>
      <div className="ListGroupItem__body">
        <h5 className="ListGroupItem__title ChatItem__title">{title}</h5>
        <div className="ListGroupItem__content ChatItem__content">{body}</div>
      </div>
      <div className="ListGroupItem__actions">
        <small className="ChatItem__time">{time}</small>
      </div>
    </ListGroupItem>
  );
};

export default ChatList;
