import React from 'react';
import SocialIcon from '../SocialIcon';
import './SocialMediaList.scss';

const socialMediaLink = {
  facebook: 'https://www.facebook.com/',
  twitter: 'https://twitter.com/',
  dribble: 'https://dribbble.com/',
  linkedin: 'https://www.linkedin.com/in/',
  instagram: 'https://www.instagram.com/',
  github: 'https://github.com/',
};

const SocialMediaList = ({ list }) => {
  const socialMedia = list
    ? Object.keys(list)
        .map(key => {
          if (list[key] !== '') {
            return { name: key, href: socialMediaLink[key] + list[key] };
          }
        })
        .filter(Boolean)
    : null;
  return (
    <ul className="SocialMediaList pt-1">
      {socialMedia.map(item => (
        <li key={item.name} className="mr-2 mb-2">
          <a href={item.href} target="_blank">
            <SocialIcon brand={item.name} xs={true} />
          </a>
        </li>
      ))}
    </ul>
  );
};

export default SocialMediaList;
