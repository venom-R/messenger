import React from 'react';
import { useSelector } from 'react-redux';

import Navigation from '../../modules/navigation/Navigation';
import Sidebar from '../../components/Sidebar';
import Chat from '../../components/Chat';
import EditProfileModal from '../../modules/editProfile/EditProfileModal';
import ProfileContainer from '../../modules/profile/ProfileContainer';

import { visibilityProfileSelector } from '../../modules/profile/profileSelectors';

import './Messenger.scss';

const Messenger = props => {
  const isProfileVisible = useSelector(visibilityProfileSelector);

  return (
    <div className="Messenger">
      <Navigation history={props.history} />
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
