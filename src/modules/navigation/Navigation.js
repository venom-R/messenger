import React from 'react';
import { bindActionCreators } from 'redux';
import { useDispatch } from 'react-redux';

import { Button, Dropdown, Menu, Tooltip } from 'antd';
import { FontAwesomeIcon as Icon } from '@fortawesome/react-fontawesome';
import Logo from '../../components/Logo';
import Avatar from '../../components/Avatar';
import NavigationItem from './NavigationItem';

import { openEditProfileModal } from '../editProfile/editProfileSlice';
import { openProfile } from '../profile/profileSlice';

import './Navigation.scss';
import avatar from './temp-avatar.png';

const Navigation = () => {
  const dispatch = useDispatch();
  const actions = bindActionCreators({ openEditProfileModal, openProfile }, dispatch);
  const userMenu = (
    <Menu>
      <Menu.Item onClick={actions.openEditProfileModal}>Edit profile</Menu.Item>
      <Menu.Item onClick={actions.openProfile}>Profile</Menu.Item>
      <Menu.Item>Settings</Menu.Item>
      <Menu.Item>
        <span className="text_danger">Logout</span>
      </Menu.Item>
    </Menu>
  );

  return (
    <nav className="Navigation">
      <Logo classList="Navigation__logo" />

      <ul className="Navigation__links-group">
        <li className="Navigation__group-item">
          <NavigationItem
            link="#chats"
            isVisibleBadge={true}
            badgeStatus="warning"
            tooltipTitle="Chats">
            <Icon icon={['far', 'comment']} />
          </NavigationItem>
        </li>

        <li className="Navigation__group-item">
          <NavigationItem
            link="#friends"
            isVisibleBadge={true}
            badgeStatus="error"
            tooltipTitle="Friends">
            <Icon icon={['far', 'user']} />
          </NavigationItem>
        </li>

        <li className="Navigation__group-item">
          <NavigationItem
            link="#favorites"
            isVisibleBadge={false}
            badgeStatus="success"
            tooltipTitle="Favorites">
            <Icon icon={['far', 'star']} />
          </NavigationItem>
        </li>

        <li className="Navigation__group-item">
          <NavigationItem
            link="#archived"
            isVisibleBadge={false}
            badgeStatus="default"
            tooltipTitle="Archived">
            <Icon icon={['fas', 'archive']} />
          </NavigationItem>
        </li>
      </ul>

      <ul className="Navigation__links-group Navigation__links-group_bottom">
        <li className="Navigation__group-item">
          <Tooltip placement="right" title="Dark mode">
            <Button type="link" className="Navigation__btn">
              <Icon icon={['far', 'moon']} />
            </Button>
          </Tooltip>
        </li>

        <li className="Navigation__group-item">
          <Tooltip placement="right" title="User menu">
            <Dropdown overlay={userMenu} placement="topLeft" trigger={['click']}>
              <Button type="primary" shape="circle" className="Navigation__settings-btn">
                <Avatar src={avatar} alt="Profile avatar" />
              </Button>
            </Dropdown>
          </Tooltip>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
