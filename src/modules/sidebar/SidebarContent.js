import React, { Fragment } from 'react';
import SidebarHeader from './SidebarHeader';

const SidebarContent = ({ title, children, extra = [] }) => {
  return (
    <Fragment>
      <SidebarHeader title={title} extra={extra} />
      <div className="Sidebar__content styled-scroll">{children}</div>
    </Fragment>
  );
};

export default SidebarContent;
