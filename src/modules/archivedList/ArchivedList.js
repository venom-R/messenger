import React from 'react';

import ArchivedItem from './ArchivedItem';
import SidebarContent from '../sidebar/SidebarContent';

const archivedData = [
  {
    id: 1,
    photo: 'http://slek.laborasyon.com/demos/dark/dist/media/img/women_avatar1.jpg',
    firstName: 'Margaretta',
    lastName: 'Worvell',
    body:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet, cumque dignissimos facilis impedit ipsum molestiae obcaecati pariatur vero voluptate? Fugit, illo laudantium quibusdam suscipit ut voluptatem! Architecto minima nesciunt ullam?',
  },
  {
    id: 2,
    photo: 'http://slek.laborasyon.com/demos/dark/dist/media/img/man_avatar1.jpg',
    firstName: 'Townsend',
    lastName: 'Seary',
    body:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet, cumque dignissimos facilis impedit ipsum molestiae obcaecati pariatur vero voluptate? Fugit, illo laudantium quibusdam suscipit ut voluptatem! Architecto minima nesciunt ullam?',
  },
  {
    id: 3,
    photo: 'http://slek.laborasyon.com/demos/dark/dist/media/img/women_avatar5.jpg',
    firstName: 'Mirabelle',
    lastName: 'Tow',
    body:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet, cumque dignissimos facilis impedit ipsum molestiae obcaecati pariatur vero voluptate? Fugit, illo laudantium quibusdam suscipit ut voluptatem! Architecto minima nesciunt ullam?',
  },
];

const ArchivedList = props => {
  return (
    <SidebarContent title="Archived">
      <div className="list-group">
        {archivedData.map(chatItem => (
          <ArchivedItem key={chatItem.id} data={chatItem} />
        ))}
      </div>
    </SidebarContent>
  );
};

export default ArchivedList;
