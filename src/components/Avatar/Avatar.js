import React from 'react';
import classNames from 'classnames';
import { randomInteger } from '../../utils/helpers';
import './Avatar.scss';

const avatarBgColors = [
  '#2196F3',
  '#00BCD4',
  '#f44336',
  '#E91E63',
  '#009688',
  '#607D8B',
  '#FF9800',
  '#9C27B0',
  '#9E9E9E',
  '#9E9E9E',
];

const Avatar = ({ src, alt, size = 'sm', round = true }) => {
  const avatarClass = classNames({
    Avatar: true,
    [`Avatar_${size}`]: size === 'sm' || size === 'lg',
    Avatar_round: round,
  });
  const renderContent = () => {
    if (src) {
      return <img src={src} alt={alt} className="Avatar__img" />;
    }
    const randomColor = avatarBgColors[randomInteger(0, 9)];
    return (
      <span style={{ background: randomColor }} className="Avatar__content">
        {typeof alt === 'string' && alt.length > 0 ? alt.substring(0, 1) : null}
      </span>
    );
  };

  return <span className={avatarClass}>{renderContent()}</span>;
};

export default Avatar;
