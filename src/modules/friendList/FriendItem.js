import React from 'react';

import { Button, Dropdown, Menu } from 'antd';
import { FontAwesomeIcon as Icon } from '@fortawesome/react-fontawesome';
import Avatar from '../../components/Avatar';

const FriendItemMenu = props => {
  return (
    <Menu>
      <Menu.Item>New chat</Menu.Item>
      <Menu.Item>Profile</Menu.Item>
      <Menu.Item>
        <span className="text_danger">Block</span>
      </Menu.Item>
    </Menu>
  );
};

const FriendItem = ({ data }) => {
  const { photo, firstName, lastName, phoneNumber } = data;
  const fullName = `${firstName} ${lastName}`;

  return (
    <div className="list-group-item list-group__item">
      <div className="list-group-item__avatar">
        <Avatar src={photo} alt={fullName} />
      </div>
      <div className="list-group-item__body">
        <h5 className="list-group-item__title">{fullName}</h5>
        <div className="list-group-item__content">{phoneNumber}</div>
      </div>
      <div className="list-group-item__actions">
        <Dropdown overlay={FriendItemMenu} placement="bottomRight" trigger={['click']}>
          <Button type="link" className="list-group-item__dropdown">
            <Icon icon={['fas', 'ellipsis-h']} />
          </Button>
        </Dropdown>
      </div>
    </div>
  );
};

export default FriendItem;
