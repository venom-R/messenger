import React from 'react';

import { Badge, Button, Divider, Dropdown, Menu, Tooltip } from 'antd';
import { FontAwesomeIcon as Icon } from '@fortawesome/react-fontawesome';
import Logo from './Logo';

import './Navigation.scss';
import avatar from './temp-avatar.png';
import Avatar from '../Avatar';

const userMenu = (
  <Menu>
    <Menu.Item>
      <a href="http://www.alipay.com/">Edit profile</a>
    </Menu.Item>
    <Menu.Item>
      <a href="http://www.taobao.com/">Profile</a>
    </Menu.Item>
    <Menu.Item>
      <a href="http://www.tmall.com/">Settings</a>
    </Menu.Item>
    <Divider className="DropdownMenu__divider" />
    <Menu.Item>
      <a href="http://www.tmall.com/" className="text_danger">
        Logout
      </a>
    </Menu.Item>
  </Menu>
);

const NavigationItem = ({ link, isVisibleBadge, badgeStatus, tooltipTitle, children }) => {
  return (
    <Tooltip placement="right" title={tooltipTitle}>
      <a href={link} className="Navigation__link">
        <Badge
          status={badgeStatus}
          className={`Navigation__badge-container ${isVisibleBadge ? '' : 'hidden'}`}>
          {children}
        </Badge>
      </a>
    </Tooltip>
  );
};

const Navigation = () => {
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
            <Dropdown overlay={userMenu} placement="topLeft" trigger="click">
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
