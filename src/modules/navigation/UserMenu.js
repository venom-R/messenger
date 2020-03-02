import React from 'react';

import { Button, Dropdown, Menu, Tooltip } from 'antd';
import Avatar from '../../components/Avatar';

import avatar from './temp-avatar.png';

const UserMenu = ({ openEditProfileModal, openProfile, logout }) => {
  const userMenu = (
    <Menu>
      <Menu.Item onClick={openEditProfileModal}>Edit profile</Menu.Item>
      <Menu.Item onClick={openProfile}>Profile</Menu.Item>
      <Menu.Item>Settings</Menu.Item>
      <Menu.Item onClick={logout}>
        <span className="text_danger">Logout</span>
      </Menu.Item>
    </Menu>
  );

  return (
    <Tooltip placement="right" title="User menu">
      <Dropdown overlay={userMenu} placement="topLeft" trigger={['click']}>
        <Button type="primary" shape="circle" className="Navigation__settings-btn">
          <Avatar src={avatar} alt="Profile avatar" />
        </Button>
      </Dropdown>
    </Tooltip>
  );
};

export default UserMenu;
