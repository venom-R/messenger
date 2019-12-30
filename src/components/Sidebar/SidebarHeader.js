import React from 'react';
import { Button, Input, Tooltip } from 'antd';
import { FontAwesomeIcon as Icon } from '@fortawesome/react-fontawesome';

const SidebarHeader = props => {
  return (
    <header className="Sidebar__header">
      <div className="Sidebar__heading-row">
        <h2 className="Sidebar__title">Chats</h2>
        <div>
          <Tooltip placement="bottom" title="New group">
            <Button className="mr-2">
              <Icon icon={['fas', 'user-friends']} />
            </Button>
          </Tooltip>

          <Tooltip placement="bottom" title="New chat">
            <Button>
              <Icon icon={['fas', 'plus-circle']} />
            </Button>
          </Tooltip>
        </div>
      </div>
      <form className="Sidebar__form">
        <Input size="large" placeholder="Search chats" />
      </form>
    </header>
  );
};

export default SidebarHeader;
