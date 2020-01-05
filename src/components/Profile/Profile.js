import React from 'react';
import { FontAwesomeIcon as Icon } from '@fortawesome/react-fontawesome';
import './Profile.scss';
import { Button } from 'antd';
import Avatar from '../Avatar';
import SocialMediaList from '../SocialMediaList';

const userData = {
  firstname: 'Roma',
  lastname: 'Teleshyk',
  avatar: '/static/media/temp-avatar.927f61d8.png',
  description:
    "Lorem ipsum is a pseudo-Latin text used in web design, typography, layout, and printing in place of English to emphasise design elements over content. It's also called placeholder (or filler) text. It's a convenient tool for mock-ups.",
  phone: '+380661452026',
  country: 'Ukraine',
  city: 'Poltava',
  website: 'https://github.com/venom-R',
  socialMedia: {
    facebook: 'roma.teleshyk',
    twitter: '',
    dribbble: '',
    linkedin: '',
    instagram: 'roma_teleshyk',
    github: 'venom-R',
  },
};

const Profile = ({ onClose }) => {
  const fullName = `${userData.firstname} ${userData.lastname}`;

  return (
    <div className="Profile">
      <header className="Profile__header">
        <h2 className="Profile__main-title">Profile</h2>
        <Button onClick={onClose}>
          <Icon icon={['fas', 'times']} className="text_danger" />
        </Button>
      </header>
      <div className="Profile__inner styled-scroll">
        <figure className="Profile__card">
          <Avatar src={userData.avatar} alt={fullName} size="lg" />
          <figcaption>
            <h3 className="Profile__username">{fullName}</h3>
          </figcaption>
        </figure>
        <div className="Profile__details">
          {userData.description && <p className="Profile__text">{userData.description}</p>}
          {userData.phone && (
            <div className="py-2">
              <h4 className="Profile__sub-title">Phone</h4>
              <p className="Profile__text">{userData.phone}</p>
            </div>
          )}
          {userData.country && userData.city && (
            <div className="py-2">
              <h4 className="Profile__sub-title">City</h4>
              <p className="Profile__text">
                {userData.country} / {userData.city}
              </p>
            </div>
          )}
          {userData.website && (
            <div className="py-2">
              <h4 className="Profile__sub-title">Website</h4>
              <p className="Profile__text">
                <a href={userData.website} target="_blank">
                  {userData.website}
                </a>
              </p>
            </div>
          )}
          {userData.socialMedia && (
            <div className="py-2">
              <h4 className="Profile__sub-title">Social media accounts</h4>
              <SocialMediaList list={userData.socialMedia} />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Profile;
