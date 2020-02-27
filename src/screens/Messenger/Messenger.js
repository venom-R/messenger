import React from 'react';
import { useSelector } from 'react-redux';

import Navigation from '../../modules/navigation/Navigation';
import Sidebar from '../../components/Sidebar';
import Chat from '../../components/Chat';
import EditProfileModal from '../../modules/editProfile/EditProfileModal';
import ProfileContainer from '../../modules/profile/ProfileContainer';

import './Messenger.scss';

const Messenger = () => {
  const isProfileVisible = useSelector(state => state.profile.isVisible);

  return (
    <div className="Messenger">
      <Navigation />
      <div className="content">
        <Sidebar />
        <Chat />
        {isProfileVisible && <ProfileContainer />}
      </div>
      <EditProfileModal />
    </div>
  );
};

export default Messenger;
