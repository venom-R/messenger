import React from 'react';
import PropTypes from 'prop-types';

import { Button, Dropdown, Menu, Tooltip } from 'antd';
import Avatar from '../../components/Avatar';

import './UserMenu.scss';

const UserMenu = ({ avatarUrl, userFullName, openEditProfileModal, openProfile, logout }) => {
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
        <Button type="primary" shape="circle" className="UserMenu">
          <Avatar src={avatarUrl} alt={userFullName} />
        </Button>
      </Dropdown>
    </Tooltip>
  );
};

UserMenu.propTypes = {
  avatarUrl: PropTypes.string,
  userFullName: PropTypes.string,
  openEditProfileModal: PropTypes.func.isRequired,
  openProfile: PropTypes.func.isRequired,
  logout: PropTypes.func.isRequired,
};

export default UserMenu;
