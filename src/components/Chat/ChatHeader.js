import React from 'react';
import { Button, Dropdown, Menu } from 'antd';
import { FontAwesomeIcon as Icon } from '@fortawesome/react-fontawesome';
import UserCard from '../UserCard';

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
  return (
    <header className="ChatHeader">
      <UserCard user={partner} />
      <Dropdown overlay={chatHeaderMenu} placement="bottomRight" trigger={['click']}>
        <Button>
          <Icon icon={['fas', 'ellipsis-h']} />
        </Button>
      </Dropdown>
    </header>
  );
};

export default ChatHeader;
