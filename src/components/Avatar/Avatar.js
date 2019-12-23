import React from 'react';
import classNames from 'classnames';
import './Avatar.scss';

const Avatar = ({ src, alt, size = 'sm', round = true }) => {
  const avatarClass = classNames({
    Avatar: true,
    [`Avatar_${size}`]: size === 'sm' || size === 'lg',
    Avatar_round: round,
  });
  return (
    <span className={avatarClass}>
      <img src={src} alt={alt} className="Avatar__img" />
    </span>
  );
};

export default Avatar;
