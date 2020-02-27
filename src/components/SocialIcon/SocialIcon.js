import React from 'react';
import classNames from 'classnames';
import { FontAwesomeIcon as Icon } from '@fortawesome/react-fontawesome';
import './SocialIcon.scss';

const icons = {
  facebook: ['fab', 'facebook-f'],
  google: ['fab', 'google'],
  twitter: ['fab', 'twitter'],
  dribbble: ['fab', 'dribbble'],
  linkedin: ['fab', 'linkedin-in'],
  instagram: ['fab', 'instagram'],
  github: ['fab', 'github'],
};

const SocialIcon = ({ brand, round = true, xs = false }) => {
  const socialIconClassName = classNames({
    SocialIcon: true,
    [brand]: true,
    SocialIcon_round: round,
    SocialIcon_xs: xs,
  });
  return (
    <span className={socialIconClassName}>
      <Icon icon={icons[brand]} />
    </span>
  );
};
export default SocialIcon;
