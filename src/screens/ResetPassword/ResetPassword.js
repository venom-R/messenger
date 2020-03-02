import React from 'react';
import ResetPasswordForm from '../../modules/auth/ResetPasswordForm';

const ResetPassword = props => {
  return (
    <div className="ResetPassword">
      <ResetPasswordForm {...props} />
    </div>
  );
};

export default ResetPassword;
