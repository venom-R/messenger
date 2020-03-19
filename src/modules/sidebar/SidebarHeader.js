import React from 'react';
import { Input } from 'antd';

const SidebarHeader = ({ title, extra = [] }) => {
  return (
    <header className="Sidebar__header">
      <div className="Sidebar__heading-row">
        <h2 className="Sidebar__title">{title}</h2>
        <div>{extra.map(element => element)}</div>
      </div>
      <form className="Sidebar__form">
        <Input size="large" placeholder="Search chats" />
      </form>
    </header>
  );
};

export default SidebarHeader;
