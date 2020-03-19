import React from 'react';
import FriendItem from './FriendItem';
import SidebarContent from '../sidebar/SidebarContent';
import { Button, Tooltip } from 'antd';
import { FontAwesomeIcon as Icon } from '@fortawesome/react-fontawesome';

const friendsData = [
  {
    id: 1,
    photo: 'http://slek.laborasyon.com/demos/dark/dist/media/img/women_avatar1.jpg',
    firstName: 'Margaretta',
    lastName: 'Worvell',
    phoneNumber: '+38 (099) 999 99 99',
  },
  {
    id: 2,
    photo: 'http://slek.laborasyon.com/demos/dark/dist/media/img/man_avatar1.jpg',
    firstName: 'Townsend',
    lastName: 'Seary',
    phoneNumber: '',
  },
  {
    id: 3,
    photo: 'http://slek.laborasyon.com/demos/dark/dist/media/img/women_avatar5.jpg',
    firstName: 'Mirabelle',
    lastName: 'Tow',
    phoneNumber: '+38 (099) 999 99 99',
  },
];

const FriendList = props => {
  const headerButton = [
    <Tooltip placement="bottom" title="Add friend">
      <Button>
        <Icon icon={['fas', 'user-plus']} />
      </Button>
    </Tooltip>,
  ];

  return (
    <SidebarContent title="Friends" extra={headerButton}>
      <div className="list-group">
        {friendsData.map(chatItem => (
          <FriendItem key={chatItem.id} data={chatItem} />
        ))}
      </div>
    </SidebarContent>
  );
};

export default FriendList;
