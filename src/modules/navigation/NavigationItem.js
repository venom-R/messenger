import React from 'react';
import { Badge, Tooltip } from 'antd';

const NavigationItem = ({ link, isVisibleBadge, badgeStatus, tooltipTitle, children }) => {
  return (
    <Tooltip placement="right" title={tooltipTitle}>
      <a href={link} className="Navigation__link">
        <Badge
          status={badgeStatus}
          className={`Navigation__badge-container ${isVisibleBadge ? '' : 'hidden'}`}>
          {children}
        </Badge>
      </a>
    </Tooltip>
  );
};

export default NavigationItem;
