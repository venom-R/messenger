import React from 'react';
import classNames from 'classnames';
import Avatar from '../../components/Avatar';
import { Button, Dropdown, Menu } from 'antd';
import { FontAwesomeIcon as Icon } from '@fortawesome/react-fontawesome';
import './ChatItem.scss';

const ChatItemMenu = props => {
  return (
    <Menu>
      <Menu.Item>Open</Menu.Item>
      <Menu.Item>Profile</Menu.Item>
      <Menu.Item>Add to archive</Menu.Item>
      <Menu.Item>
        <span className="text_danger">Delete</span>
      </Menu.Item>
    </Menu>
  );
};

const ChatItem = ({ data }) => {
  const { photo, firstName, lastName, body, time, unreadCounter } = data;
  const fullName = `${firstName} ${lastName}`;
  const isUnread = unreadCounter > 0;
  const chatItemClassName = classNames('list-group-item list-group__item ChatItem', {
    ChatItem_unread: isUnread,
    'list-group-item_active': false,
  });

  return (
    <div className={chatItemClassName}>
      <div className="list-group-item__avatar">
        <Avatar src={photo} alt={fullName} />
      </div>
      <div className="list-group-item__body">
        <h5 className="list-group-item__title ChatItem__title">{fullName}</h5>
        <div className="list-group-item__content ChatItem__content">{body}</div>
      </div>
      <div className="list-group-item__actions">
        {isUnread && <div className="ChatItem__unread-counter">{unreadCounter}</div>}
        <small className="ChatItem__time">{time}</small>
        {!isUnread && (
          <Dropdown overlay={ChatItemMenu} placement="bottomRight" trigger={['click']}>
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
