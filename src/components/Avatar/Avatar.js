import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import './Avatar.scss';

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
    return (
      <span className="Avatar__content">
        {typeof alt === 'string' && alt.length > 0 ? alt.substring(0, 1) : null}
      </span>
    );
  };

  return <span className={avatarClass}>{renderContent()}</span>;
};

Avatar.propTypes = {
  src: PropTypes.string,
  alt: PropTypes.string,
  size: PropTypes.oneOf(['sm', 'lg']),
  round: PropTypes.bool,
};

export default Avatar;
