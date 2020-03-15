import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

import Avatar from '../../components/Avatar';
import SocialMediaList from '../../components/SocialMediaList';
import ProfileSection from './ProfileSection';

const ProfileContent = ({ userData }) => {
  const fullName = `${userData.firstName} ${userData.lastName}`;

  return (
    <Fragment>
      <figure className="Profile__card">
        <Avatar src={userData.photo} alt={fullName} size="lg" />
        <figcaption>
          <h3 className="Profile__username">{fullName}</h3>
        </figcaption>
      </figure>
      <div className="Profile__details">
        {userData.description && <p className="Profile__text">{userData.description}</p>}
        {userData.phoneNumber && <ProfileSection title="Phone" text={userData.phoneNumber} />}
        {/*TODO fix this*/}
        {userData.country && userData.city && (
          <ProfileSection title="City" text={`${userData.country} / ${userData.city}`} />
        )}
        {userData.website && (
          <ProfileSection title="Website">
            <a href={userData.website} target="_blank" rel="noopener noreferrer">
              {userData.website}
            </a>
          </ProfileSection>
        )}
        {userData.socialMedia && Object.keys(userData.socialMedia).length > 0 && (
          <ProfileSection title="Social media accounts">
            <SocialMediaList list={userData.socialMedia} />
          </ProfileSection>
        )}
      </div>
    </Fragment>
  );
};

ProfileContent.propTypes = {
  userData: PropTypes.object.isRequired,
};

export default ProfileContent;
