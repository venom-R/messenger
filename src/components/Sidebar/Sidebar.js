import React from 'react';
import SidebarHeader from './SidebarHeader';
import ChatList from '../ChatsList';

import './Sidebar.scss';

const Sidebar = props => {
  return (
    <aside className="Sidebar">
      <SidebarHeader />
      <div className="Sidebar__content styled-scroll">
        <ChatList />
      </div>
    </aside>
  );
};

export default Sidebar;
