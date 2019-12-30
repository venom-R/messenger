import React from 'react';
import classNames from 'classnames';
import Avatar from '../Avatar';
import { Button, Dropdown, Menu } from 'antd';
import { FontAwesomeIcon as Icon } from '@fortawesome/react-fontawesome';
import './ChatItem.scss';

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

export default ChatItem;
