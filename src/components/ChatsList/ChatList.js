import React from 'react';
import Avatar from '../Avatar';
import classNames from 'classnames';
import { FontAwesomeIcon as Icon } from '@fortawesome/react-fontawesome';
import { Button, Dropdown, Menu } from 'antd';
import './ChatItem.scss';

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

const chatItemMenu = (
  <Menu>
    <Menu.Item>
      <a href="http://www.alipay.com/">Open</a>
    </Menu.Item>
    <Menu.Item>
      <a href="http://www.taobao.com/">Profile</a>
    </Menu.Item>
    <Menu.Item>
      <a href="http://www.tmall.com/">Add to archive</a>
    </Menu.Item>
    <Menu.Item>
      <a href="http://www.tmall.com/" className="text_danger">
        Delete
      </a>
    </Menu.Item>
  </Menu>
);

const ChatList = props => {
  return (
    <div className="ChatList list-group">
      {chatsData.map(chatItem => (
        <ChatItem key={chatItem.id} data={chatItem} />
      ))}
    </div>
  );
};

const ChatItem = ({ data }) => {
  const { avatar, fullName, body, time, unreadCounter } = data;
  const isUnread = unreadCounter > 0;
  const chatItemClassName = classNames({
    'list-group-item': true,
    'list-group__item': true,
    ChatItem: true,
    ChatItem_unread: isUnread,
    'list-group-item_active': false,
  });
  return (
    <div className={chatItemClassName}>
      <div className="list-group-item__avatar">
        <Avatar src={avatar} alt={fullName} />
      </div>
      <div className="list-group-item__body">
        <h5 className="list-group-item__title ChatItem__title">{fullName}</h5>
        <div className="list-group-item__content ChatItem__content">{body}</div>
      </div>
      <div className="list-group-item__actions">
        {isUnread && <div className="ChatItem__unread-counter">{unreadCounter}</div>}
        <small className="ChatItem__time">{time}</small>
        {!isUnread && (
          <Dropdown overlay={chatItemMenu} placement="bottomRight" trigger={['click']}>
            <Button type="link" className="list-group-item__dropdown">
              <Icon icon={['fas', 'ellipsis-h']} />
            </Button>
          </Dropdown>
        )}
      </div>
    </div>
  );
};

export default ChatList;
