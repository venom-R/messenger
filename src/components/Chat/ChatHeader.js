import React from 'react';
import Avatar from '../Avatar';
import { Button, Dropdown, Menu } from 'antd';
import { FontAwesomeIcon as Icon } from '@fortawesome/react-fontawesome';

const chatHeaderMenu = (
  <Menu>
    <Menu.Item>
      <a href="http://www.alipay.com/">Profile</a>
    </Menu.Item>
    <Menu.Item>
      <a href="http://www.tmall.com/">Add to archive</a>
    </Menu.Item>
    <Menu.Item>
      <a href="http://www.tmall.com/">Delete</a>
    </Menu.Item>
    <Menu.Item>
      <a href="http://www.tmall.com/" className="text_danger">
        Block
      </a>
    </Menu.Item>
  </Menu>
);

const ChatHeader = ({ partner }) => {
  const { avatar, fullName } = partner;
  return (
    <header className="ChatHeader">
      <div className="ChatHeader__user-card user-card">
        <Avatar src={avatar} alt={fullName} />
        <div className="user-card__caption">
          <h5 className="user-card__fullname">{fullName}</h5>
        </div>
      </div>

      <Dropdown overlay={chatHeaderMenu} placement="bottomRight" trigger={['click']}>
        <Button>
          <Icon icon={['fas', 'ellipsis-h']} />
        </Button>
      </Dropdown>
    </header>
  );
};

export default ChatHeader;
