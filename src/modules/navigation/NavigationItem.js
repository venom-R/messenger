import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import { NavLink } from 'react-router-dom';
import { Badge, Tooltip } from 'antd';

import { badgeStatusType } from '../../types';

const NavigationItem = ({ to, hasBadge, badgeStatus, tooltipTitle, children }) => {
  const badgeClassNames = classNames('Navigation__badge-container', {
    'Navigation__badge-container_hidden': !hasBadge,
  });
  return (
    <Tooltip placement="right" title={tooltipTitle}>
      <NavLink to={to} className="Navigation__link" activeClassName="Navigation__link_active" exact>
        <Badge status={badgeStatus} className={badgeClassNames}>
          {children}
        </Badge>
      </NavLink>
    </Tooltip>
  );
};

NavigationItem.propTypes = {
  to: PropTypes.string.isRequired,
  hasBadge: PropTypes.bool,
  badgeStatus: badgeStatusType,
  tooltipTitle: PropTypes.string,
};

export default NavigationItem;
