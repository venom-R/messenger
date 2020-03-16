import React from 'react';

import SocialIcon from '../../../components/SocialIcon';

import { SOCIAL_MEDIA_LINKS } from '../../../constants/socialMediaLinks';
import { socialMediaType } from '../../../types';

import './SocialMediaList.scss';

const SocialMediaList = ({ list }) => {
  const socialMedia = list
    ? Object.keys(list)
        .map(key => {
          if (list[key] !== '') {
            return { name: key, href: SOCIAL_MEDIA_LINKS[key] + list[key] };
          }
          return null;
        })
        .filter(Boolean)
    : null;
  return (
    <ul className="SocialMediaList pt-1">
      {socialMedia.map(item => (
        <li key={item.name} className="mr-2 mb-2">
          <a href={item.href} target="_blank" rel="noopener noreferrer">
            <SocialIcon brand={item.name} xs={true} />
          </a>
        </li>
      ))}
    </ul>
  );
};

SocialMediaList.propTypes = {
  list: socialMediaType.isRequired,
};

export default SocialMediaList;
