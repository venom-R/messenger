import React from 'react';
import { bindActionCreators } from 'redux';
import { useSelector, useDispatch } from 'react-redux';

import { FontAwesomeIcon as Icon } from '@fortawesome/react-fontawesome';
import Logo from '../../components/Logo';
import NavigationItem from './NavigationItem';
import ThemeSwitcher from './ThemeSwitcher';
import UserMenu from './UserMenu';

import Auth from '../../firebase/Auth';
import { openEditProfileModal } from '../editProfile/editProfileSlice';
import { openProfile } from '../profile/profileSlice';
import { setTheme } from '../../App/appSlice';
import { themeSelector } from '../../App/appSelectors';

import './Navigation.scss';
import { authUserSelector } from '../auth/authSelectors';

const Navigation = () => {
  const theme = useSelector(themeSelector);
  const authUser = useSelector(authUserSelector);
  const dispatch = useDispatch();
  const actions = bindActionCreators({ openEditProfileModal, openProfile, setTheme }, dispatch);
  const logout = () => Auth.signOut();

  return (
    <nav className="Navigation">
      <Logo classList="Navigation__logo" />

      <ul className="Navigation__links-group">
        <li className="Navigation__group-item">
          <NavigationItem
            link="#chats"
            isVisibleBadge={true}
            badgeStatus="warning"
            tooltipTitle="Chats">
            <Icon icon={['far', 'comment']} />
          </NavigationItem>
        </li>

        <li className="Navigation__group-item">
          <NavigationItem
            link="#friends"
            isVisibleBadge={true}
            badgeStatus="error"
            tooltipTitle="Friends">
            <Icon icon={['far', 'user']} />
          </NavigationItem>
        </li>

        <li className="Navigation__group-item">
          <NavigationItem
            link="#favorites"
            isVisibleBadge={false}
            badgeStatus="success"
            tooltipTitle="Favorites">
            <Icon icon={['far', 'star']} />
          </NavigationItem>
        </li>

        <li className="Navigation__group-item">
          <NavigationItem
            link="#archived"
            isVisibleBadge={false}
            badgeStatus="default"
            tooltipTitle="Archived">
            <Icon icon={['fas', 'archive']} />
          </NavigationItem>
        </li>
      </ul>

      <ul className="Navigation__links-group Navigation__links-group_bottom">
        <li className="Navigation__group-item">
          <ThemeSwitcher theme={theme} setTheme={actions.setTheme} />
        </li>

        <li className="Navigation__group-item">
          <UserMenu
            openEditProfileModal={actions.openEditProfileModal}
            openProfile={actions.openProfile}
            logout={logout}
            avatarUrl={authUser.photo}
          />
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
