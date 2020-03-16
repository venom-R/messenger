import React from 'react';
import PropTypes from 'prop-types';

const ProfileSection = ({ title, text, children }) => {
  return (
    <section className="Profile__section">
      <h4 className="Profile__sub-title">{title}</h4>
      {text && <p className="Profile__text">{text}</p>}
      {children}
    </section>
  );
};

ProfileSection.propTypes = {
  title: PropTypes.string.isRequired,
  text: PropTypes.string,
};

export default ProfileSection;
