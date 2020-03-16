import React from 'react';

import { Link } from 'react-router-dom';
import { FontAwesomeIcon as Icon } from '@fortawesome/react-fontawesome';

import { HOME } from '../../constants/routes';
import './Logo.scss';

const Logo = ({ classList = '' }) => {
  return (
    <Link to={HOME} className={'Logo ' + classList}>
      <Icon icon={['far', 'comment-dots']} />
    </Link>
  );
};

export default Logo;
