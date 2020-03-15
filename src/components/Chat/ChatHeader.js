import React from 'react';
import PropTypes from 'prop-types';

import { Button, Dropdown, Menu } from 'antd';
import { FontAwesomeIcon as Icon } from '@fortawesome/react-fontawesome';
import UserCard from '../UserCard';

const ChatHeader = ({ partner, actions }) => {
  const { openProfile } = actions;
  const chatHeaderMenu = (
    <Menu>
      <Menu.Item onClick={() => openProfile(partner.uid)}>Profile</Menu.Item>
      <Menu.Item>Add to archive</Menu.Item>
      <Menu.Item>Delete</Menu.Item>
      <Menu.Item>
        <span className="text_danger">Block</span>
      </Menu.Item>
    </Menu>
  );

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

ChatHeader.propTypes = {
  partner: PropTypes.object.isRequired,
  actions: PropTypes.shape({
    openProfile: PropTypes.func.isRequired,
  }).isRequired,
};

export default ChatHeader;
