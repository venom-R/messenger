import React, { Fragment } from 'react';

import Avatar from '../../../components/Avatar';
import SocialMediaList from './SocialMediaList';
import ProfileSection from './ProfileSection';
import { profileUserDataType } from '../../../types';

const CitySection = ({ country, city }) => {
  const title = city ? 'City' : 'Country';
  const text = city && country ? `${country} / ${city}` : city ? city : country;
  return <ProfileSection title={title} text={text} />;
};

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
        {(userData.country || userData.city) && (
          <CitySection city={userData.city} country={userData.country} />
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
  userData: profileUserDataType.isRequired,
};

export default ProfileContent;
