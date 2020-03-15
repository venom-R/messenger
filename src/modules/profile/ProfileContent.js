import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

import Avatar from '../../components/Avatar';
import SocialMediaList from '../../components/SocialMediaList';

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
        {userData.phoneNumber && (
          <section className="py-2">
            <h4 className="Profile__sub-title">Phone</h4>
            <p className="Profile__text">{userData.phoneNumber}</p>
          </section>
        )}
        {/*TODO fix this*/}
        {userData.country && userData.city && (
          <section className="py-2">
            <h4 className="Profile__sub-title">City</h4>
            <p className="Profile__text">
              {userData.country} / {userData.city}
            </p>
          </section>
        )}
        {userData.website && (
          <section className="py-2">
            <h4 className="Profile__sub-title">Website</h4>
            <p className="Profile__text">
              <a href={userData.website} target="_blank" rel="noopener noreferrer">
                {userData.website}
              </a>
            </p>
          </section>
        )}
        {userData.socialMedia && Object.keys(userData.socialMedia).length > 0 && (
          <section className="py-2">
            <h4 className="Profile__sub-title">Social media accounts</h4>
            <SocialMediaList list={userData.socialMedia} />
          </section>
        )}
      </div>
    </Fragment>
  );
};

ProfileContent.propTypes = {
  userData: PropTypes.object.isRequired,
};

export default ProfileContent;
