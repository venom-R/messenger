import React from 'react';
import { useSelector } from 'react-redux';

import Navigation from '../../modules/navigation/Navigation';
import Sidebar from '../../components/Sidebar';
import Chat from '../../components/Chat';
import EditProfileModal from '../../modules/editProfile/EditProfileModal';
import ProfileContainer from '../../modules/profile/ProfileContainer';

import { visibilityProfileSelector } from '../../modules/profile/profileSelectors';

import './Messenger.scss';
import AvatarLoader from '../../modules/editProfile/AvatarLoader';

const Messenger = props => {
  const isProfileVisible = useSelector(visibilityProfileSelector);

  return (
    <div className="Messenger">
      <Navigation />
      <div className="content">
        {/*<Sidebar />*/}
        {/*<Chat />*/}
        {/*{isProfileVisible && <ProfileContainer />}*/}
        <AvatarLoader />
      </div>
      <EditProfileModal />
    </div>
  );
};

export default Messenger;
