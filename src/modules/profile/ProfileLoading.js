import React from 'react';
import { Icon, Spin } from 'antd';

function ProfileLoading() {
  const loadingIcon = <Icon type="loading" style={{ fontSize: 36 }} spin />;

  return (
    <div className="Profile__loading">
      <Spin tip="Loading..." indicator={loadingIcon} delay={300} />
    </div>
  );
}

export default ProfileLoading;
