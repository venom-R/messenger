import React from 'react';

import { Button, Dropdown, Menu } from 'antd';
import { FontAwesomeIcon as Icon } from '@fortawesome/react-fontawesome';
import Avatar from '../../components/Avatar';

const ArchivedItemMenu = props => {
  return (
    <Menu>
      <Menu.Item>Open</Menu.Item>
      <Menu.Item>Restore</Menu.Item>
      <Menu.Item>
        <span className="text_danger">Delete</span>
      </Menu.Item>
    </Menu>
  );
};

const ArchivedItem = ({ data }) => {
  const { photo, firstName, lastName, body } = data;
  const fullName = `${firstName} ${lastName}`;

  return (
    <div className="list-group-item list-group__item">
      <div className="list-group-item__avatar">
        <Avatar src={photo} alt={fullName} />
      </div>
      <div className="list-group-item__body">
        <h5 className="list-group-item__title">{fullName}</h5>
        <div className="list-group-item__content">{body}</div>
      </div>
      <div className="list-group-item__actions">
        <Dropdown overlay={ArchivedItemMenu} placement="bottomRight" trigger={['click']}>
          <Button type="link" className="list-group-item__dropdown">
            <Icon icon={['fas', 'ellipsis-h']} />
          </Button>
        </Dropdown>
      </div>
    </div>
  );
};

export default ArchivedItem;
