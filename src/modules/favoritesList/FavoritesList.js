import React from 'react';

import FavoriteItem from './FavoriteItem';
import SidebarContent from '../sidebar/SidebarContent';

const favoritesData = [
  {
    id: 1,
    photo: 'http://slek.laborasyon.com/demos/dark/dist/media/img/women_avatar1.jpg',
    firstName: 'Margaretta',
    lastName: 'Worvell',
    body: 'I need you today',
    time: '11:05',
    unreadCounter: 3,
  },
  {
    id: 2,
    photo: 'http://slek.laborasyon.com/demos/dark/dist/media/img/man_avatar1.jpg',
    firstName: 'Townsend',
    lastName: 'Seary',
    body: "What's up, how are you?",
    time: '03:41',
    unreadCounter: 0,
  },
  {
    id: 3,
    photo: 'http://slek.laborasyon.com/demos/dark/dist/media/img/women_avatar5.jpg',
    firstName: 'Mirabelle',
    lastName: 'Tow',
    body: 'Where are you?',
    time: '09:23',
    unreadCounter: 0,
  },
];

const FavoritesList = props => {
  return (
    <SidebarContent title="Favorites">
      <div className="list-group">
        {favoritesData.map(chatItem => (
          <FavoriteItem key={chatItem.id} data={chatItem} />
        ))}
      </div>
    </SidebarContent>
  );
};

export default FavoritesList;
