import React from 'react';
import { Switch, Route } from 'react-router';

import ChatList from '../chatList/ChatList';
import FriendList from '../friendList/FriendList';
import FavoritesList from '../favoritesList/FavoritesList';
import ArchivedList from '../archivedList/ArchivedList';

import * as ROUTES from '../../constants/routes';
import './Sidebar.scss';

const Sidebar = props => {
  return (
    <aside className="Sidebar">
      <Switch>
        <Route path={ROUTES.HOME} component={ChatList} exact />
        <Route path={ROUTES.FRIENDS} render={FriendList} />
        <Route path={ROUTES.FAVORITES} render={FavoritesList} />
        <Route path={ROUTES.ARCHIVED} render={ArchivedList} />
      </Switch>
    </aside>
  );
};

export default Sidebar;
