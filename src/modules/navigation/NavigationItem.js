import React from 'react';
import classNames from 'classnames';
import { Badge, Tooltip } from 'antd';

const NavigationItem = ({ link, isVisibleBadge, badgeStatus, tooltipTitle, children }) => {
  const badgeClassNames = classNames('Navigation__badge-container', {
    'Navigation__badge-container_hidden': !isVisibleBadge,
  });
  return (
    <Tooltip placement="right" title={tooltipTitle}>
      <a href={link} className="Navigation__link">
        <Badge status={badgeStatus} className={badgeClassNames}>
          {children}
        </Badge>
      </a>
    </Tooltip>
  );
};

export default NavigationItem;
